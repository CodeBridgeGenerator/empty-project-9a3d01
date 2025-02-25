import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import NoMatch from "./NoMatch";

import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/LoginPage/SignUpPage";
import SignUpByInvitePage from "../components/LoginPage/SignUpByInvitePage";
import ResetPage from "../components/LoginPage/ResetPage";
import Account from "../components/Account/Account";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardPreLogin from "../components/Dashboard/DashboardPreLogin";
import ProjectLayout from "../components/Layouts/ProjectLayout";

import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import SingleUserInvitesPage from "../components/UserInvitesPage/SingleUserInvitesPage";
import UserInvitesProjectLayoutPage from "../components/UserInvitesPage/UserInvitesProjectLayoutPage";
import SingleCompaniesPage from "../components/CompaniesPage/SingleCompaniesPage";
import CompanyProjectLayoutPage from "../components/CompaniesPage/CompanyProjectLayoutPage";
import SingleBranchesPage from "../components/BranchesPage/SingleBranchesPage";
import BranchProjectLayoutPage from "../components/BranchesPage/BranchProjectLayoutPage";
import SingleDepartmentsPage from "../components/DepartmentsPage/SingleDepartmentsPage";
import DepartmentProjectLayoutPage from "../components/DepartmentsPage/DepartmentProjectLayoutPage";
import SingleSectionsPage from "../components/SectionsPage/SingleSectionsPage";
import SectionProjectLayoutPage from "../components/SectionsPage/SectionProjectLayoutPage";
import SingleRolesPage from "../components/RolesPage/SingleRolesPage";
import RoleProjectLayoutPage from "../components/RolesPage/RoleProjectLayoutPage";
import SinglePositionsPage from "../components/PositionsPage/SinglePositionsPage";
import PositionProjectLayoutPage from "../components/PositionsPage/PositionProjectLayoutPage";
import SingleTemplatesPage from "../components/TemplatesPage/SingleTemplatesPage";
import TemplateProjectLayoutPage from "../components/TemplatesPage/TemplateProjectLayoutPage";
import SingleMailsPage from "../components/MailsPage/SingleMailsPage";
import MailProjectLayoutPage from "../components/MailsPage/MailProjectLayoutPage";
import SingleTestsPage from "../components/TestsPage/SingleTestsPage";
import TestProjectLayoutPage from "../components/TestsPage/TestProjectLayoutPage";
import SingleUserAddressesPage from "../components/UserAddressesPage/SingleUserAddressesPage";
import UserAddressProjectLayoutPage from "../components/UserAddressesPage/UserAddressProjectLayoutPage";
import SingleCompanyAddressesPage from "../components/CompanyAddressesPage/SingleCompanyAddressesPage";
import CompanyAddressProjectLayoutPage from "../components/CompanyAddressesPage/CompanyAddressProjectLayoutPage";
import SingleCompanyPhonesPage from "../components/CompanyPhonesPage/SingleCompanyPhonesPage";
import CompanyPhoneProjectLayoutPage from "../components/CompanyPhonesPage/CompanyPhoneProjectLayoutPage";
import SingleUserPhonesPage from "../components/UserPhonesPage/SingleUserPhonesPage";
import UserPhoneProjectLayoutPage from "../components/UserPhonesPage/UserPhoneProjectLayoutPage";
import StaffinfoProjectLayoutPage from "../components/StaffinfoPage/StaffinfoProjectLayoutPage";
import SingleProfilesPage from "../components/ProfilesPage/SingleProfilesPage";
import ProfileProjectLayoutPage from "../components/ProfilesPage/ProfileProjectLayoutPage";
import SinglePermissionServicesPage from "../components/PermissionServicesPage/SinglePermissionServicesPage";
import PermissionServiceProjectLayoutPage from "../components/PermissionServicesPage/PermissionServiceProjectLayoutPage";
import SinglePermissionFieldsPage from "../components/PermissionFieldsPage/SinglePermissionFieldsPage";
import PermissionFieldProjectLayoutPage from "../components/PermissionFieldsPage/PermissionFieldProjectLayoutPage";
import SingleDynaLoaderPage from "../components/DynaLoaderPage/SingleDynaLoaderPage";
import SingleDynaFieldsPage from "../components/DynaFieldsPage/SingleDynaFieldsPage";
import DynaLoaderProjectLayoutPage from "../components/DynaLoaderPage/DynaLoaderProjectLayoutPage";
import DynaFieldsProjectLayoutPage from "../components/DynaFieldsPage/DynaFieldsProjectLayoutPage";
import SingleStaffinfoPage from "../components/StaffinfoPage/SingleStaffinfoPage";

import SingleJobQuesPage from "../components/JobQuesPage/SingleJobQuesPage";
import JobQueProjectLayoutPage from "../components/JobQuesPage/JobQueProjectLayoutPage";
import SingleEmployeesPage from "../components/EmployeesPage/SingleEmployeesPage";
import EmployeeProjectLayoutPage from "../components/EmployeesPage/EmployeeProjectLayoutPage";
import SingleMailQuesPage from "../components/MailQuesPage/SingleMailQuesPage";
import MailQueProjectLayoutPage from "../components/MailQuesPage/MailQueProjectLayoutPage";
import SingleSuperiorPage from "../components/SuperiorPage/SingleSuperiorPage";
import SuperiorProjectLayoutPage from "../components/SuperiorPage/SuperiorProjectLayoutPage";
import ChataiProjectLayoutPage from "../components/ChatAiProjectLayout/ChataiProjectLayoutPage";
import ChataiUserLayoutPage from "../components/ChataiPage/UserLayoutPage";
import SingleChataiPage from "../components/ChataiPage/SingleChataiPage";
import PromptsUserLayoutPage from "../components/PromptsPage/UserLayoutPage";
import SinglePromptsPage from "../components/PromptsPage/SinglePromptsPage";

import SingleDepartmentAdminPage from "../components/DepartmentAdminPage/SingleDepartmentAdminPage";
import DepartmentAdminProjectLayoutPage from "../components/DepartmentAdminPage/DepartmentAdminProjectLayoutPage";
import SingleDepartmentHODPage from "../components/DepartmentHODPage/SingleDepartmentHODPage";
import DepartmentHODProjectLayoutPage from "../components/DepartmentHODPage/DepartmentHODProjectLayoutPage";
import SingleDepartmentHOSPage from "../components/DepartmentHOSPage/SingleDepartmentHOSPage";
import DepartmentHOProjectLayoutPage from "../components/DepartmentHOSPage/DepartmentHOProjectLayoutPage";
import SingleMailWHPage from "../components/MailWHPage/SingleMailWHPage";
import MailWHProjectLayoutPage from "../components/MailWHPage/MailWHProjectLayoutPage";
import SingleInboxPage from "../components/InboxPage/SingleInboxPage";
import InboxProjectLayoutPage from "../components/InboxPage/InboxProjectLayoutPage";
import SingleNotificationsPage from "../components/NotificationsPage/SingleNotificationsPage";
import NotificationProjectLayoutPage from "../components/NotificationsPage/NotificationProjectLayoutPage";
import SingleErrorsPage from "../components/ErrorsPage/SingleErrorsPage";
import ErrorProjectLayoutPage from "../components/ErrorsPage/ErrorProjectLayoutPage";
import SingleErrorsWHPage from "../components/ErrorsWHPage/SingleErrorsWHPage";
import ErrorsWHProjectLayoutPage from "../components/ErrorsWHPage/ErrorsWHProjectLayoutPage";
import SingleUserLoginPage from "../components/UserLoginPage/SingleUserLoginPage";
import UserLoginProjectLayoutPage from "../components/UserLoginPage/UserLoginProjectLayoutPage";
import SingleUserChangePasswordPage from "../components/UserChangePasswordPage/SingleUserChangePasswordPage";
import UserChangePasswordProjectLayoutPage from "../components/UserChangePasswordPage/UserChangePasswordProjectLayoutPage";

import SingleCbRefPackagesPage from "../components/CbRefPackagesPage/SingleCbRefPackagesPage";
import CbRefPackageProjectLayoutPage from "../components/CbRefPackagesPage/CbRefPackageProjectLayoutPage";
import SingleCbRefHostingPage from "../components/CbRefHostingPage/SingleCbRefHostingPage";
import CbRefHostingProjectLayoutPage from "../components/CbRefHostingPage/CbRefHostingProjectLayoutPage";
import SingleCbRefSupportPage from "../components/CbRefSupportPage/SingleCbRefSupportPage";
import CbRefSupportProjectLayoutPage from "../components/CbRefSupportPage/CbRefSupportProjectLayoutPage";
import SingleCbRefDomainsPage from "../components/CbRefDomainsPage/SingleCbRefDomainsPage";
import CbRefDomainProjectLayoutPage from "../components/CbRefDomainsPage/CbRefDomainProjectLayoutPage";
import SingleCbRefDiscountCodePage from "../components/CbRefDiscountCodePage/SingleCbRefDiscountCodePage";
import CbRefDiscountCodeProjectLayoutPage from "../components/CbRefDiscountCodePage/CbRefDiscountCodeProjectLayoutPage";
import SingleCbRefGitPrivatePage from "../components/CbRefGitPrivatePage/SingleCbRefGitPrivatePage";
import CbRefGitPrivateProjectLayoutPage from "../components/CbRefGitPrivatePage/CbRefGitPrivateProjectLayoutPage";
import SingleAddonDiscountPage from "../components/AddonDiscountPage/SingleAddonDiscountPage";
import AddonDiscountProjectLayoutPage from "../components/AddonDiscountPage/AddonDiscountProjectLayoutPage";
import SingleAddonPackagePage from "../components/AddonPackagePage/SingleAddonPackagePage";
import AddonPackageProjectLayoutPage from "../components/AddonPackagePage/AddonPackageProjectLayoutPage";
import SingleAddonHostingPage from "../components/AddonHostingPage/SingleAddonHostingPage";
import AddonHostingProjectLayoutPage from "../components/AddonHostingPage/AddonHostingProjectLayoutPage";
import SingleAddonDomainPage from "../components/AddonDomainPage/SingleAddonDomainPage";
import AddonDomainProjectLayoutPage from "../components/AddonDomainPage/AddonDomainProjectLayoutPage";
import SingleAddonPrivacyPage from "../components/AddonPrivacyPage/SingleAddonPrivacyPage";
import AddonPrivacyProjectLayoutPage from "../components/AddonPrivacyPage/AddonPrivacyProjectLayoutPage";
import SingleAddonUsersPage from "../components/AddonUsersPage/SingleAddonUsersPage";
import AddonUserProjectLayoutPage from "../components/AddonUsersPage/AddonUserProjectLayoutPage";
import SingleProjectsPage from "../components/ProjectsPage/SingleProjectsPage";
import ProjectProjectLayoutPage from "../components/ProjectsPage/ProjectProjectLayoutPage";
import SingleAddonSupportPage from "../components/AddonSupportPage/SingleAddonSupportPage";
import AddonSupportProjectLayoutPage from "../components/AddonSupportPage/AddonSupportProjectLayoutPage";
// ~cb-add-import~

const useUserInvite = process.env.REACT_APP_USE_USER_INVITE_SIGNUP;

const MyRouter = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={props.isLoggedIn ? <ProjectLayout /> : <DashboardPreLogin />}
      />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/login" exact element={<LoginPage />} />
      <Route
        path="/reset/:singleChangeForgotPasswordId"
        exact
        element={<ResetPage />}
      />
      <Route
        path="/signup"
        exact
        element={useUserInvite === "true" ? <SignUpByInvitePage /> : <SignUpPage />}
      />

      <Route element={<ProtectedRoute redirectPath={"/login"} />}>
        <Route path="/project" exact element={<ProjectLayout />} />
        <Route path="/account" exact element={<Account />} />
        <Route
          path="/users/:singleUsersId"
          exact
          element={<SingleUsersPage />}
        />
        <Route path="/users" exact element={<UserProjectLayoutPage />} />
        <Route
          path="/userInvites/:singleUserInvitesId"
          exact
          element={<SingleUserInvitesPage />}
        />
        <Route
          path="/userInvites"
          exact
          element={<UserInvitesProjectLayoutPage />}
        />

        <Route
          path="/companies/:singleCompaniesId"
          exact
          element={<SingleCompaniesPage />}
        />
        <Route
          path="/branches/:singleBranchesId"
          exact
          element={<SingleBranchesPage />}
        />
        <Route
          path="/departments/:singleDepartmentsId"
          exact
          element={<SingleDepartmentsPage />}
        />
        <Route
          path="/sections/:singleSectionsId"
          exact
          element={<SingleSectionsPage />}
        />
        <Route
          path="/roles/:singleRolesId"
          exact
          element={<SingleRolesPage />}
        />
        <Route
          path="/positions/:singlePositionsId"
          exact
          element={<SinglePositionsPage />}
        />
        <Route
          path="/profiles/:singleProfilesId"
          exact
          element={<SingleProfilesPage />}
        />
        <Route
          path="/templates/:singleTemplatesId"
          exact
          element={<SingleTemplatesPage />}
        />
        <Route
          path="/mails/:singleMailsId"
          exact
          element={<SingleMailsPage />}
        />
        <Route
          path="/tests/:singleTestsId"
          exact
          element={<SingleTestsPage />}
        />
        <Route
          path="/permissionServices/:singlePermissionServicesId"
          exact
          element={<SinglePermissionServicesPage />}
        />
        <Route
          path="/permissionFields/:singlePermissionFieldsId"
          exact
          element={<SinglePermissionFieldsPage />}
        />
        <Route
          path="/userAddresses/:singleUserAddressesId"
          exact
          element={<SingleUserAddressesPage />}
        />
        <Route
          path="/companyAddresses/:singleCompanyAddressesId"
          exact
          element={<SingleCompanyAddressesPage />}
        />
        <Route
          path="/companyPhones/:singleCompanyPhonesId"
          exact
          element={<SingleCompanyPhonesPage />}
        />
        <Route
          path="/userPhones/:singleUserPhonesId"
          exact
          element={<SingleUserPhonesPage />}
        />

        <Route path="/companies" exact element={<CompanyProjectLayoutPage />} />
        <Route path="/branches" exact element={<BranchProjectLayoutPage />} />
        <Route
          path="/departments"
          exact
          element={<DepartmentProjectLayoutPage />}
        />
        <Route path="/sections" exact element={<SectionProjectLayoutPage />} />
        <Route path="/roles" exact element={<RoleProjectLayoutPage />} />
        <Route
          path="/positions"
          exact
          element={<PositionProjectLayoutPage />}
        />
        <Route path="/profiles" exact element={<ProfileProjectLayoutPage />} />
        <Route
          path="/templates"
          exact
          element={<TemplateProjectLayoutPage />}
        />
        <Route path="/mails" exact element={<MailProjectLayoutPage />} />
        <Route path="/tests" exact element={<TestProjectLayoutPage />} />
        <Route
          path="/permissionServices"
          exact
          element={<PermissionServiceProjectLayoutPage />}
        />
        <Route
          path="/permissionFields"
          exact
          element={<PermissionFieldProjectLayoutPage />}
        />
        <Route
          path="/userAddresses"
          exact
          element={<UserAddressProjectLayoutPage />}
        />
        <Route
          path="/companyAddresses"
          exact
          element={<CompanyAddressProjectLayoutPage />}
        />
        <Route
          path="/companyPhones"
          exact
          element={<CompanyPhoneProjectLayoutPage />}
        />
        <Route
          path="/userPhones"
          exact
          element={<UserPhoneProjectLayoutPage />}
        />
        <Route
          path="/dynaLoader"
          exact
          element={<DynaLoaderProjectLayoutPage />}
        />
        <Route
          path="/dynaFields"
          exact
          element={<DynaFieldsProjectLayoutPage />}
        />
        <Route
          path="/staffinfo"
          exact
          element={<StaffinfoProjectLayoutPage />}
        />
        <Route
          path="/dynaLoader/:singleDynaLoaderId"
          exact
          element={<SingleDynaLoaderPage />}
        />
        <Route
          path="/dynaFields/:singleDynaFieldsId"
          exact
          element={<SingleDynaFieldsPage />}
        />
        <Route
          path="/staffinfo/:singleStaffinfoId"
          exact
          element={<SingleStaffinfoPage />}
        />
        <Route path="/jobQues" exact element={<JobQueProjectLayoutPage />} />
        <Route
          path="/jobQues/:singleJobQuesId"
          exact
          element={<SingleJobQuesPage />}
        />
        <Route
          path="/employees/:singleEmployeesId"
          exact
          element={<SingleEmployeesPage />}
        />
        <Route
          path="/mailQues/:singleMailQuesId"
          exact
          element={<SingleMailQuesPage />}
        />
        <Route path="/jobQues" exact element={<JobQueProjectLayoutPage />} />
        <Route
          path="/employees"
          exact
          element={<EmployeeProjectLayoutPage />}
        />
        <Route path="/mailQues" exact element={<MailQueProjectLayoutPage />} />
        <Route
          path="/superior/:singleSuperiorId"
          exact
          element={<SingleSuperiorPage />}
        />
        <Route path="/superior" exact element={<SuperiorProjectLayoutPage />} />
        <Route path="/chataiProject" element={<ChataiProjectLayoutPage />} />
        <Route
          path="/chataiProject/:promptId"
          element={<ChataiProjectLayoutPage />}
        />
        <Route path="/chatai" exact element={<ChataiUserLayoutPage />} />
        <Route
          path="/chatai/:singleChataiId"
          exact
          element={<SingleChataiPage />}
        />
        <Route path="/prompts" exact element={<PromptsUserLayoutPage />} />
        <Route
          path="/prompts/:singlePromptsId"
          exact
          element={<SinglePromptsPage />}
        />
        <Route
          path="/jobQues/:singleJobQuesId"
          exact
          element={<SingleJobQuesPage />}
        />
        <Route
          path="/mailQues/:singleMailQuesId"
          exact
          element={<SingleMailQuesPage />}
        />
        <Route
          path="/superior/:singleSuperiorId"
          exact
          element={<SingleSuperiorPage />}
        />
        <Route
          path="/departmentAdmin/:singleDepartmentAdminId"
          exact
          element={<SingleDepartmentAdminPage />}
        />
        <Route
          path="/departmentAdmin"
          exact
          element={<DepartmentAdminProjectLayoutPage />}
        />
        <Route
          path="/departmentHOD/:singleDepartmentHODId"
          exact
          element={<SingleDepartmentHODPage />}
        />
        <Route
          path="/departmentHOD"
          exact
          element={<DepartmentHODProjectLayoutPage />}
        />
        <Route
          path="/departmentHOS/:singleDepartmentHOSId"
          exact
          element={<SingleDepartmentHOSPage />}
        />
        <Route
          path="/departmentHOS"
          exact
          element={<DepartmentHOProjectLayoutPage />}
        />
        <Route
          path="/mailWH/:singleMailWHId"
          exact
          element={<SingleMailWHPage />}
        />
        <Route path="/mailWH" exact element={<MailWHProjectLayoutPage />} />
        <Route
          path="/inbox/:singleInboxId"
          exact
          element={<SingleInboxPage />}
        />
        <Route path="/inbox" exact element={<InboxProjectLayoutPage />} />
        <Route
          path="/notifications/:singleNotificationsId"
          exact
          element={<SingleNotificationsPage />}
        />
        <Route
          path="/notifications"
          exact
          element={<NotificationProjectLayoutPage />}
        />
        <Route
          path="/errors/:singleErrorsId"
          exact
          element={<SingleErrorsPage />}
        />
        <Route path="/errors" exact element={<ErrorProjectLayoutPage />} />
        <Route
          path="/errorsWH/:singleErrorsWHId"
          exact
          element={<SingleErrorsWHPage />}
        />
        <Route path="/errorsWH" exact element={<ErrorsWHProjectLayoutPage />} />
        <Route
          path="/permissionFields/:singlePermissionFieldsId"
          exact
          element={<SinglePermissionFieldsPage />}
        />
        <Route
          path="/permissionFields"
          exact
          element={<PermissionFieldProjectLayoutPage />}
        />
        <Route
          path="/permissionServices/:singlePermissionServicesId"
          exact
          element={<SinglePermissionServicesPage />}
        />
        <Route
          path="/permissionServices"
          exact
          element={<PermissionServiceProjectLayoutPage />}
        />
        <Route
          path="/userInvites/:singleUserInvitesId"
          exact
          element={<SingleUserInvitesPage />}
        />
        <Route
          path="/userInvites"
          exact
          element={<UserInvitesProjectLayoutPage />}
        />
        <Route
          path="/userLogin/:singleUserLoginId"
          exact
          element={<SingleUserLoginPage />}
        />
        <Route
          path="/userLogin"
          exact
          element={<UserLoginProjectLayoutPage />}
        />
        <Route
          path="/employees/:singleEmployeesId"
          exact
          element={<SingleEmployeesPage />}
        />
        <Route
          path="/employees"
          exact
          element={<EmployeeProjectLayoutPage />}
        />
        <Route
          path="/userChangePassword/:singleUserChangePasswordId"
          exact
          element={<SingleUserChangePasswordPage />}
        />
        <Route
          path="/userChangePassword"
          exact
          element={<UserChangePasswordProjectLayoutPage />}
        />

<Route path="/deployJobs/:singleDeployJobsId" exact element={<SingleDeployJobsPage />} />
<Route path="/deployJobs" exact element={<DeployJobProjectLayoutPage />} />
<Route path="/deployWorkers/:singleDeployWorkersId" exact element={<SingleDeployWorkersPage />} />
<Route path="/deployWorkers" exact element={<DeployWorkerProjectLayoutPage />} />
<Route path="/tickets/:singleTicketsId" exact element={<SingleTicketsPage />} />
<Route path="/tickets" exact element={<TicketProjectLayoutPage />} />
<Route path="/cbRefPackages/:singleCbRefPackagesId" exact element={<SingleCbRefPackagesPage />} />
<Route path="/cbRefPackages" exact element={<CbRefPackageProjectLayoutPage />} />
<Route path="/cbRefHosting/:singleCbRefHostingId" exact element={<SingleCbRefHostingPage />} />
<Route path="/cbRefHosting" exact element={<CbRefHostingProjectLayoutPage />} />
<Route path="/cbRefSupport/:singleCbRefSupportId" exact element={<SingleCbRefSupportPage />} />
<Route path="/cbRefSupport" exact element={<CbRefSupportProjectLayoutPage />} />
<Route path="/cbRefDomains/:singleCbRefDomainsId" exact element={<SingleCbRefDomainsPage />} />
<Route path="/cbRefDomains" exact element={<CbRefDomainProjectLayoutPage />} />
<Route path="/cbRefDiscountCode/:singleCbRefDiscountCodeId" exact element={<SingleCbRefDiscountCodePage />} />
<Route path="/cbRefDiscountCode" exact element={<CbRefDiscountCodeProjectLayoutPage />} />
<Route path="/cbRefGitPrivate/:singleCbRefGitPrivateId" exact element={<SingleCbRefGitPrivatePage />} />
<Route path="/cbRefGitPrivate" exact element={<CbRefGitPrivateProjectLayoutPage />} />
<Route path="/addonDiscount/:singleAddonDiscountId" exact element={<SingleAddonDiscountPage />} />
<Route path="/addonDiscount" exact element={<AddonDiscountProjectLayoutPage />} />
<Route path="/addonPackage/:singleAddonPackageId" exact element={<SingleAddonPackagePage />} />
<Route path="/addonPackage" exact element={<AddonPackageProjectLayoutPage />} />
<Route path="/addonHosting/:singleAddonHostingId" exact element={<SingleAddonHostingPage />} />
<Route path="/addonHosting" exact element={<AddonHostingProjectLayoutPage />} />
<Route path="/addonDomain/:singleAddonDomainId" exact element={<SingleAddonDomainPage />} />
<Route path="/addonDomain" exact element={<AddonDomainProjectLayoutPage />} />
<Route path="/addonPrivacy/:singleAddonPrivacyId" exact element={<SingleAddonPrivacyPage />} />
<Route path="/addonPrivacy" exact element={<AddonPrivacyProjectLayoutPage />} />
<Route path="/addonUsers/:singleAddonUsersId" exact element={<SingleAddonUsersPage />} />
<Route path="/addonUsers" exact element={<AddonUserProjectLayoutPage />} />
<Route path="/projects/:singleProjectsId" exact element={<SingleProjectsPage />} />
<Route path="/projects" exact element={<ProjectProjectLayoutPage />} />
<Route path="/addonSupport/:singleAddonSupportId" exact element={<SingleAddonSupportPage />} />
<Route path="/addonSupport" exact element={<AddonSupportProjectLayoutPage />} />
        {/* ~cb-add-protected-route~ */}
      </Route>
      {/* ~cb-add-route~ */}

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(MyRouter);
