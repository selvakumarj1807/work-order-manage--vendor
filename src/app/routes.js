import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";
import WomUserRoutes from "./views/material-kit/WomUserRoutes";
import Home from "./wom/Home/Home";
import VendorSignin from "./wom/vendor/VendorSignin";
import VendorSignup from "./wom/vendor/VendorSignup";
import DoYou from "./wom/Home/popup/DoYou";
import PartInformation from "./wom/Home/PartInformation";
import VendorDashboard from "./views/dashboard/VendorDashboard";
import WomVendorRoutes from "./views/material-kit/WomVendorRoutes";

// SESSION PAGES
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("app/views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("app/views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

const routes = [
  { path: "/", element: <VendorSignin /> },
  { path: "/partinformation", element: <PartInformation /> },
  { path: "/home/doYou", element: <DoYou /> },
  { path: "/home", element: <Home /> },
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      ...WomUserRoutes,
      ...WomVendorRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      { path: "/vendor/dashboard", element: <VendorDashboard />, auth: authRoles.admin },
      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor }
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  //vendor
  { path: "/vendor/signin", element: <VendorSignin /> },
  { path: "/vendor/signup", element: <VendorSignup /> },

  { path: "/", element: <Navigate to="home" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
