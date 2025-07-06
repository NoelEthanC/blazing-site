import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DU6vEFA_.js";
import { Download, Users, FileText, Eye } from "lucide-react";
import { f as formatDateTime } from "./utils-CYs7COny.js";
import { A as AdminControlLayout } from "./AdminControlLayout-CvklES1f.js";
import { Head } from "@inertiajs/react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "./use-toast-DdRhLTSk.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
function AnalyticsOverview(props) {
  const [analytics, setAnalytics] = useState({
    totalDownloads: 0,
    emailSubmissions: 0,
    totalPosts: 0,
    totalViews: 0,
    recentDownloads: []
  });
  useEffect(() => {
    setAnalytics(props.overview);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Analytics Overview" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Overview of analytics data" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-white", children: "Total Downloads" }),
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-[#3f79ff]" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: analytics.totalDownloads }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#cbd5e1]", children: "Resource downloads" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-white", children: "Email Submissions" }),
            /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-[#3f79ff]" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: analytics.emailSubmissions }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#cbd5e1]", children: "Unique email addresses" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-white", children: "Total Templates" }),
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-[#3f79ff]" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: analytics.totalResources || 0 }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#cbd5e1]", children: "Published articles" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-white", children: "Bookings" }),
            /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-[#3f79ff]" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: analytics.bookings }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#cbd5e1]", children: "This month" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-white", children: "Recent Downloads" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          analytics.recentDownloads.map(
            (download, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center justify-between p-3 bg-white/5 rounded-lg",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: download.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] text-sm", children: download.email })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-[#cbd5e1] text-sm", children: formatDateTime(
                    download.created_at
                  ) })
                ]
              },
              index
            )
          ),
          analytics.recentDownloads.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] text-center py-4", children: "No recent downloads" })
        ] }) })
      ] })
    ] })
  ] });
}
AnalyticsOverview.layout = (page) => /* @__PURE__ */ jsx(AdminControlLayout, { children: page });
export {
  AnalyticsOverview as default
};
