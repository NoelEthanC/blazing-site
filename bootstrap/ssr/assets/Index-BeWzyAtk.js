import { jsxs, jsx } from "react/jsx-runtime";
import { Link, router, Head } from "@inertiajs/react";
import { S as SitePageLayout } from "./SitePageLayout-Cqa8hkVD.js";
import { G as GuestLayout } from "./GuestLayout-DSwAePEQ.js";
import { I as Input } from "./input-zTnVlpte.js";
import { Search } from "lucide-react";
import debounce from "lodash.debounce";
import { useState, useRef, useEffect } from "react";
import "./Navbar-D2514n6l.js";
import "./button-wnFVC-UW.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
function ResourceCard({ resource }) {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#0e172a] rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden border border-[#1a2435]", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-w-16 aspect-h-9", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/storage/${resource.thumbnail_path}` || "/placeholder-resource.jpg",
        alt: resource.title,
        className: "w-full h-48 object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] text-[#09111f] shadow-sm", children: ((_a = resource.category) == null ? void 0 : _a.name) || "Resource" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs text-gray-400", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-4 h-4 mr-1",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }
              )
            }
          ),
          resource.download_count
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2 line-clamp-2", children: resource.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-4 line-clamp-3", children: resource.description }),
      resource.tags && resource.tags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1 mb-4", children: [
        resource.tags.slice(0, 3).map((tag, index) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-block px-2 py-1 text-[11px] font-medium rounded bg-[#1c2535] text-gray-300",
            children: tag
          },
          index
        )),
        resource.tags.length > 3 && /* @__PURE__ */ jsxs("span", { className: "inline-block px-2 py-1 text-[11px] font-medium rounded bg-[#1c2535] text-gray-300", children: [
          "+",
          resource.tags.length - 3
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/resources/${resource.slug}`,
            className: "inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md border border-[#3f79ff] text-[#3f79ff] hover:bg-[#3f79ff]/10 transition duration-200",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-4 h-4 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8"
                    }
                  )
                }
              ),
              "Download"
            ]
          }
        ),
        !resource.youtube_url ? /* @__PURE__ */ jsx(
          "a",
          {
            href: `https://www.youtube.com/watch?v=IeZbk2-2obE`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold rounded-md text-[#09111f] bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90 transition duration-200",
            children: "🎥 Watch Guide"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold rounded-md bg-gray-700 text-gray-400 cursor-not-allowed", children: "No Guide" })
      ] })
    ] })
  ] });
}
function Index({ resources }) {
  const { data, links } = resources;
  const initial = new URLSearchParams(window.location.search).get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initial);
  const debounced = useRef(
    debounce((val) => {
      router.get(
        route("resources.index"),
        { search: val },
        { preserveState: true, replace: true }
      );
    }, 500)
  ).current;
  const handleChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    debounced(val);
  };
  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, []);
  return /* @__PURE__ */ jsxs(SitePageLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Resources" }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-midnight-blue py-36", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-in-up", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-4 tracking-tight", children: "Free Resources" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 max-w-2xl mx-auto", children: "Download templates, guides, and tools to supercharge your business growth." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-8 max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Search for templates...",
            value: searchTerm,
            onChange: handleChange,
            className: "pl-10 rounded-full text-white  border-light-blue/20"
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-gray-400" })
      ] }) }),
      data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up", children: data.map((resource) => /* @__PURE__ */ jsx(
        ResourceCard,
        {
          resource
        },
        resource.slug
      )) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-16 animate-fade-in-up", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "mx-auto h-12 w-12 text-gray-500",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-medium text-white", children: "No resources available" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-400", children: "Check back soon for new resources." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center space-x-2", children: links.map((link, i) => /* @__PURE__ */ jsx(
        Link,
        {
          href: link.url || "#",
          className: `
                  px-3 py-1 rounded-md text-sm font-medium
                  ${link.active ? "bg-light-blue text-white" : "bg-[#0e172a] text-gray-400 hover:bg-[#18273e]"}
                `,
          dangerouslySetInnerHTML: { __html: link.label }
        },
        i
      )) })
    ] }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  Index as default
};
