import { jsx } from "react/jsx-runtime";
import { G as GuestLayout } from "./GuestLayout-DSwAePEQ.js";
function SitePageLayout({
  children
}) {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-midnight-blue", children: /* @__PURE__ */ jsx("main", { children }) });
}
SitePageLayout.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  SitePageLayout as S
};
