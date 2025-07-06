import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { A as Authenticated } from "./AuthenticatedLayout-BvNVYuhQ.js";
import { A as AdminControlLayout } from "./AdminControlLayout-CvklES1f.js";
import "@headlessui/react";
import "react";
import "@radix-ui/react-tabs";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "./use-toast-DdRhLTSk.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
function Dashboard({
  overview,
  resources,
  leads,
  tools,
  blogPosts
}) {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(AdminControlLayout, {})
  ] });
}
export {
  Dashboard as default
};
