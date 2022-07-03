import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import Calendar from "../pages/calender/calendar";

import Export from "../pages/exportData/exportData";
import CallManager from "../pages/callManager/callmanager";
import ExtendSearch from "../pages/extendSearch/index";
import ImportManager from "../pages/importManager/importManger";
import AssignData from "../pages/importManager/assignData/assignData";
import AssignedData from "../pages/importManager/assignedTable/assignedTable";
import Rider from "../pages/Riders/rider";
import Telecaller from "../pages/Telecaller/telecaller";
import Setup from "../pages/Setup/PolicyS";
import SecuirtyP from "../pages/Setup/PolicyS";
import DataP from "../pages/Setup/PolicyD";
import NewP from "../pages/Setup/fristPolicy";
// import UserProfile from "../pages/userProfile/userprofile";

export const publicRoutes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },

  {
    path: "/export-data",
    component: Export,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/call-manager",
    component: CallManager,
    exact: true,
  },
  // call-manager
  {
    path: "/extend-search",
    component: ExtendSearch,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/calendar",
    component: Calendar,
    exact: true,
  },

  {
    path: "/import-data",
    component: ImportManager,
    exact: true,
  },
  {
    path: "/assign-data",
    component: AssignData,
    exact: true,
  },
  {
    path: "/assigned-data",
    component: AssignedData,
    exact: true,
  },
  {
    path: "/rider",
    component: Rider,
    exact: true,
  },

  {
    path: "/telecaller",
    component: Telecaller,
    exact: true,
  },
  {
    path: "/setup",
    component: Setup,
    exact: true,
  },
  {
    path: "/setup/securitypolicy",
    component: SecuirtyP,
    exact: true,
  },
  {
    path: "/setup/datapolicy",
    component: DataP,
    exact: true,
  },
  {
    path: "/setup/newpolicy",
    component: NewP,
    exact: true,
  },
  // {
  //   path: "/userprofile",
  //   component: UserProfile,
  //   exact: true,
  // },

  {
    path: "*",
    component: Login,
    exact: true,
  },
];

export const AuthenticationRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "*",
    component: Login,
    exact: true,
  },
];
