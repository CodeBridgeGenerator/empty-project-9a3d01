import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const AddonDiscountCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [projectId, setProjectId] = useState([])
const [discountId, setDiscountId] = useState([])

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [projectId,discountId], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            projectId: _entity?.projectId?._id,discountId: _entity?.discountId?._id,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("addonDiscount").create(_data);
        const eagerResult = await client
            .service("addonDiscount")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                {
                    path : "projectId",
                    service : "projects",
                    select:["name"]},{
                    path : "discountId",
                    service : "cbRefDiscountCode",
                    select:["code"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Addon Discount updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Addon Discount" });
        }
        setLoading(false);
    };

    useEffect(() => {
                    // on mount projects
                    client
                        .service("projects")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleProjectsId } })
                        .then((res) => {
                            setProjectId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Projects", type: "error", message: error.message || "Failed get projects" });
                        });
                }, []);

useEffect(() => {
                    // on mount cbRefDiscountCode
                    client
                        .service("cbRefDiscountCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCbRefDiscountCodeId } })
                        .then((res) => {
                            setDiscountId(res.data.map((e) => { return { name: e['code'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CbRefDiscountCode", type: "error", message: error.message || "Failed get cbRefDiscountCode" });
                        });
                }, []);

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

    const projectIdOptions = projectId.map((elem) => ({ name: elem.name, value: elem.value }));
const discountIdOptions = discountId.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create Addon Discount" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="addonDiscount-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="projectId">ProjectId:</label>
                <Dropdown id="projectId" value={_entity?.projectId?._id} optionLabel="name" optionValue="value" options={projectIdOptions} onChange={(e) => setValByKey("projectId", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["projectId"]) ? (
              <p className="m-0" key="error-projectId">
                {error["projectId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountId">DiscountId:</label>
                <Dropdown id="discountId" value={_entity?.discountId?._id} optionLabel="name" optionValue="value" options={discountIdOptions} onChange={(e) => setValByKey("discountId", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountId"]) ? (
              <p className="m-0" key="error-discountId">
                {error["discountId"]}
              </p>
            ) : null}
          </small>
            </div>
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

export default connect(mapState, mapDispatch)(AddonDiscountCreateDialogComponent);
