import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleAddonPrivacyPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [projectId, setProjectId] = useState([]);
const [privacyid, setPrivacyid] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("addonPrivacy")
            .get(urlParams.singleAddonPrivacyId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"projectId","privacyid"] }})
            .then((res) => {
                set_entity(res || {});
                const projectId = Array.isArray(res.projectId)
            ? res.projectId.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.projectId
                ? [{ _id: res.projectId._id, name: res.projectId.name }]
                : [];
        setProjectId(projectId);
const privacyid = Array.isArray(res.privacyid)
            ? res.privacyid.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.privacyid
                ? [{ _id: res.privacyid._id, name: res.privacyid.name }]
                : [];
        setPrivacyid(privacyid);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "AddonPrivacy", type: "error", message: error.message || "Failed get addonPrivacy" });
            });
    }, [props,urlParams.singleAddonPrivacyId]);


    const goBack = () => {
        navigate("/addonPrivacy");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Addon Privacy</h3>
                </div>
                <p>addonPrivacy/{urlParams.singleAddonPrivacyId}</p>
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
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Privacyid</label>
                    {privacyid.map((elem) => (
                        <Link key={elem._id} to={`/cbRefGitPrivate/${elem._id}`}>
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

export default connect(mapState, mapDispatch)(SingleAddonPrivacyPage);
