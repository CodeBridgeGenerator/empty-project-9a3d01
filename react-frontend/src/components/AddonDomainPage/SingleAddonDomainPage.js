import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleAddonDomainPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [projectId, setProjectId] = useState([]);
const [domainid, setDomainid] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("addonDomain")
            .get(urlParams.singleAddonDomainId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"projectId","domainid"] }})
            .then((res) => {
                set_entity(res || {});
                const projectId = Array.isArray(res.projectId)
            ? res.projectId.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.projectId
                ? [{ _id: res.projectId._id, name: res.projectId.name }]
                : [];
        setProjectId(projectId);
const domainid = Array.isArray(res.domainid)
            ? res.domainid.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.domainid
                ? [{ _id: res.domainid._id, name: res.domainid.name }]
                : [];
        setDomainid(domainid);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "AddonDomain", type: "error", message: error.message || "Failed get addonDomain" });
            });
    }, [props,urlParams.singleAddonDomainId]);


    const goBack = () => {
        navigate("/addonDomain");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Addon Domain</h3>
                </div>
                <p>addonDomain/{urlParams.singleAddonDomainId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm">ProjectId</label>
                    {projectId.map((elem) => (
                        <Link key={elem._id} to={`/projects/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Domainid</label>
                    {domainid.map((elem) => (
                        <Link key={elem._id} to={`/cbRefDomains/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>

                    <div className="col-12">&nbsp;</div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="created By:"></Tag>
                        <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="created At:"></Tag>
                        <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="last Updated By:"></Tag>
                        <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="updated At:"></Tag>
                        <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleAddonDomainPage);
