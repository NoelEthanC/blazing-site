import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
import { createInertiaApp } from "@inertiajs/react";
import { createContext, useEffect } from "react";
import ReactGA from "react-ga4";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const __vite_import_meta_env__ = { "VITE_GOOGLE_MEASUREMENT_ID": "G-X38YW0967L" };
const AnalyticsContext = createContext(null);
const AnalyticsProvider = ({
  children,
  session_id
}) => {
  useEffect(() => {
    const config = __vite_import_meta_env__;
    ReactGA.initialize(config.VITE_GOOGLE_MEASUREMENT_ID, {
      gaOptions: {
        userId: session_id
      }
    });
  }, []);
  return /* @__PURE__ */ jsx(AnalyticsContext.Provider, { value: null, children });
};
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    // resolve: (name) => {
    //     const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
    //     //@ts-ignore
    //     const page = pages[`./Pages/${name}.tsx`]?.default;
    //     if (!page) throw new Error(`SSR Page not found: ${name}`);
    //     return page;
    // },
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/About.tsx": () => import("./assets/About-DdWJI6ry.js"), "./Pages/Admin/AnalyticsOverview.tsx": () => import("./assets/AnalyticsOverview-CTj6MOE2.js"), "./Pages/Admin/Dashboard.tsx": () => import("./assets/Dashboard-CYK-vovN.js"), "./Pages/Admin/Leads/LeadsManager.tsx": () => import("./assets/LeadsManager-Ct31yeSF.js"), "./Pages/Admin/Resources/ResourceForm.tsx": () => import("./assets/ResourceForm-CVm3Wwxs.js"), "./Pages/Admin/Resources/ResourcesManager.tsx": () => import("./assets/ResourcesManager-fJXmm6JW.js"), "./Pages/Auth/AuthPagesLayout.tsx": () => import("./assets/AuthPagesLayout-B7dzccG-.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-CQBPH9Bc.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-BURYOE8W.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-DAbxZLJS.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-_ScN3dOU.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-DrKocGAL.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-CdzTdEKW.js"), "./Pages/Blog.tsx": () => import("./assets/Blog-BdlTbYtT.js"), "./Pages/Home.tsx": () => import("./assets/Home-BvVwCxNW.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-BEbZKDII.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-B8sxIPbT.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-fRaGwjAh.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-DKMfiuO5.js"), "./Pages/Resources.tsx": () => import("./assets/Resources-Wt3PuN3c.js"), "./Pages/Resources/Index.tsx": () => import("./assets/Index-CAS_kOcN.js"), "./Pages/Resources/Show.tsx": () => import("./assets/Show-DAnIZbI_.js") })
    ),
    setup: ({ App, props }) => {
      var _a;
      return /* @__PURE__ */ jsx(AnalyticsProvider, { session_id: (_a = props.initialPage) == null ? void 0 : _a.props.session_id, children: /* @__PURE__ */ jsx(App, { ...props }) });
    }
  })
);
