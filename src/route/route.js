import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import Rider from "../pages/Riders/rider";
import Telecaller from "../pages/Telecaller/telecaller";
import Setup from "../pages/Setup/PolicyS";
import SecuirtyP from "../pages/Setup/PolicyS";
import DataP from "../pages/Setup/PolicyD";
import NewP from "../pages/Setup/fristPolicy";
import UserProfile from "../pages/userProfile/userprofile";

export const publicRoutes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },

  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
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
  {
    path: "/userprofile",
    component: UserProfile,
    exact: true,
  },

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
