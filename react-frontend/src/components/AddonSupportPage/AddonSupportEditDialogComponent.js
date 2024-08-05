import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const AddonSupportCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [projectid, setProjectid] = useState([])
const [supportid, setSupportid] = useState([])

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

     useEffect(() => {
                    //on mount projects
                    client
                        .service("projects")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleProjectsId } })
                        .then((res) => {
                            setProjectid(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Projects", type: "error", message: error.message || "Failed get projects" });
                        });
                }, []);
 useEffect(() => {
                    //on mount cbRefSupport
                    client
                        .service("cbRefSupport")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCbRefSupportId } })
                        .then((res) => {
                            setSupportid(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CbRefSupport", type: "error", message: error.message || "Failed get cbRefSupport" });
                        });
                }, []);

    const onSave = async () => {
        let _data = {
            projectid: _entity?.projectid?._id,
supportid: _entity?.supportid?._id,
        };

        setLoading(true);
        try {
            
        await client.service("addonSupport").patch(_entity._id, _data);
        const eagerResult = await client
            .service("addonSupport")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[_entity._id]}, $populate : [
                {
                    path : "projectid",
                    service : "projects",
                    select:["name"]},{
                    path : "supportid",
                    service : "cbRefSupport",
                    select:["name"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info addonSupport updated successfully" });
        props.onEditResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    const projectidOptions = projectid.map((elem) => ({ name: elem.name, value: elem.value }));
const supportidOptions = supportid.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Edit Addon Support" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="addonSupport-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="projectid">Projectid:</label>
            <Dropdown id="projectid" value={_entity?.projectid?._id} optionLabel="name" optionValue="value" options={projectidOptions} onChange={(e) => setValByKey("projectid", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supportid">Supportid:</label>
            <Dropdown id="supportid" value={_entity?.supportid?._id} optionLabel="name" optionValue="value" options={supportidOptions} onChange={(e) => setValByKey("supportid", {_id : e.value})}  />
        </span>
        </div>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created At:"></Tag>{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created By:"></Tag>{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated At:"></Tag>{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated By:"></Tag>{" " +_entity?.updatedBy?.name}</p></div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AddonSupportCreateDialogComponent);
