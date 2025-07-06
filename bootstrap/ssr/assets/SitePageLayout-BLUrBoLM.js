import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { G as GuestLayout } from "./GuestLayout-CH4uyFw4.js";
function SitePageLayout({
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-midnight-blue", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Blazing Automations" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@noelethan" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: "https://blazingautomations.com/"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://blazingautomations.com/images/og-default.jpg"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://blazingautomations.com/images/og-default.jpg"
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Blazing Automations",
        url: "https://blazingautomations.com",
        logo: "https://blazingautomations.com/public/images/logo.png",
        description: "We build AI automation systems and web solutions to help you achieve your business goals."
      }) })
    ] }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
SitePageLayout.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  SitePageLayout as S
};
