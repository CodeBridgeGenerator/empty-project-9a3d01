import React from "react";
import ProjectLayout from "../Layouts/ProjectLayout";
import { connect } from "react-redux";
import CbRefSupportPage from "./CbRefSupportPage";

const CbRefSupportProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <CbRefSupportPage />
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

export default connect(mapState, mapDispatch)(CbRefSupportProjectLayoutPage);