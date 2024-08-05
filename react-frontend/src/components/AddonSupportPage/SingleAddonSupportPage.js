import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleAddonSupportPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [projectid, setProjectid] = useState([]);
const [supportid, setSupportid] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("addonSupport")
            .get(urlParams.singleAddonSupportId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"projectid","supportid"] }})
            .then((res) => {
                set_entity(res || {});
                const projectid = Array.isArray(res.projectid)
            ? res.projectid.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.projectid
                ? [{ _id: res.projectid._id, name: res.projectid.name }]
                : [];
        setProjectid(projectid);
const supportid = Array.isArray(res.supportid)
            ? res.supportid.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.supportid
                ? [{ _id: res.supportid._id, name: res.supportid.name }]
                : [];
        setSupportid(supportid);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "AddonSupport", type: "error", message: error.message || "Failed get addonSupport" });
            });
    }, [props,urlParams.singleAddonSupportId]);


    const goBack = () => {
        navigate("/addonSupport");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Addon Support</h3>
                </div>
                <p>addonSupport/{urlParams.singleAddonSupportId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Projectid</label>
                    {projectid.map((elem) => (
                        <Link key={elem._id} to={`/projects/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Supportid</label>
                    {supportid.map((elem) => (
                        <Link key={elem._id} to={`/cbRefSupport/${elem._id}`}>
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

export default connect(mapState, mapDispatch)(SingleAddonSupportPage);
