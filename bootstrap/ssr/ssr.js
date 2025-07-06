import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
import { createInertiaApp } from "@inertiajs/react";
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
      /* @__PURE__ */ Object.assign({ "./Pages/About.tsx": () => import("./assets/About-B_ePJSfs.js"), "./Pages/Admin/AnalyticsOverview.tsx": () => import("./assets/AnalyticsOverview-Bl5C98ja.js"), "./Pages/Admin/Dashboard.tsx": () => import("./assets/Dashboard-vultba0y.js"), "./Pages/Admin/Leads/LeadsManager.tsx": () => import("./assets/LeadsManager-C7xcWVV3.js"), "./Pages/Admin/Resources/ResourceForm.tsx": () => import("./assets/ResourceForm-DEF_utzN.js"), "./Pages/Admin/Resources/ResourcesManager.tsx": () => import("./assets/ResourcesManager-BRLWNUX0.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-ogz9_pQC.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-D6GsksHB.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-CpeHMgCX.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-lg4E1D2u.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-CEzaaQT9.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-B1UU6R-S.js"), "./Pages/Blog.tsx": () => import("./assets/Blog-BPJaRL_Z.js"), "./Pages/Home.tsx": () => import("./assets/Home-DzhQIS37.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-C-szcXOT.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-CRyoRFsl.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-5tiidph4.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-DLc8-kkN.js"), "./Pages/Resources.tsx": () => import("./assets/Resources-Bk2WIYfF.js"), "./Pages/Resources/Index.tsx": () => import("./assets/Index-BeWzyAtk.js"), "./Pages/Resources/Show.tsx": () => import("./assets/Show-CudKoR4d.js") })
    ),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
