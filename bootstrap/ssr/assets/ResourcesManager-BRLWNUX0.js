import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { usePage, useForm, Head, router, Link } from "@inertiajs/react";
import { B as Button } from "./button-wnFVC-UW.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DU6vEFA_.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-BdnOopEi.js";
import { B as Badge } from "./badge-CGZGM-oT.js";
import { Plus, Download, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { A as AdminControlLayout } from "./AdminControlLayout-C8TFqy39.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "./use-toast-DdRhLTSk.js";
import "@radix-ui/react-toast";
function ResourcesManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const { props } = usePage();
  const [categories, setCategories] = useState(props.categories || []);
  const [formErrors, setFormErrors] = useState();
  const {
    data,
    setData,
    post,
    put,
    delete: destroy,
    processing,
    errors,
    reset
  } = useForm({
    title: "",
    description: "",
    file_path: "",
    category_id: "",
    tags: "",
    tool: "",
    guide_url: "",
    video_url: "",
    thumbnail_path: "",
    resource_type: "free"
  });
  function remove(id) {
    if (confirm("Are you sure?")) {
      destroy(route("admin.resources.destroy", id));
    }
  }
  return /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
    /* @__PURE__ */ jsx(Head, { title: "Resources" }),
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row w-full items-center justify-between", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-white", children: "Templates Management" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          id: "add-resource-button",
          onClick: () => router.visit(route("admin.resources.create")),
          size: "sm",
          className: "bg-[#3f79ff] hover:bg-[#3f79ff]/80 text-white",
          children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-1" }),
            " Add Resource"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { className: "bg-white/5 border-white/10 text-white", children: /* @__PURE__ */ jsxs(TableRow, { className: "text-white", children: [
          /* @__PURE__ */ jsx(TableHead, { className: "text-white text-lg", children: "Title" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-white text-lg", children: "Tool" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-white text-lg", children: "Type" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-white text-lg", children: "Downloads" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-white text-lg", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: props.resources.data.map((res) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "text-white", children: res.title }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-[#cbd5e1]", children: res.tool }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
            Badge,
            {
              variant: res.resource_type === "free" ? "secondary" : "default",
              className: res.resource_type === "free" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400",
              children: res.resource_type
            }
          ) }),
          /* @__PURE__ */ jsxs(TableCell, { className: "text-[#cbd5e1] flex items-center", children: [
            /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-1" }),
            res.downloads_count
          ] }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: () => router.visit(
                  route(
                    "admin.resources.edit",
                    res.slug
                  )
                ),
                children: /* @__PURE__ */ jsx(Edit, { className: "w-4 h-4 text-[#3f79ff]" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: () => remove(res.slug),
                children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-red-400" })
              }
            )
          ] }) })
        ] }, res.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-[#cbd5e1]", children: [
          "Showing ",
          props.resources.from ?? 0,
          "–",
          props.resources.to ?? 0,
          " of ",
          props.resources.total
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: props.resources.prev_page_url || "#",
              preserveState: true,
              preserveScroll: true,
              className: `p-2 rounded-md ${props.resources.prev_page_url ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`,
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          props.resources.links.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url || "#",
              preserveState: true,
              preserveScroll: true,
              className: `px-3 py-1 rounded-md ${link.active ? "bg-[#3f79ff] text-white" : "bg-white/10 text-[#cbd5e1]"}`,
              children: link.label === "&laquo; Previous" ? "Previous" : link.label === "Next &raquo;" ? "Next " : link.label
            },
            link.label + link.url
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: props.resources.next_page_url || "#",
              preserveState: true,
              preserveScroll: true,
              className: `p-2 rounded-md ${props.resources.next_page_url ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`,
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
ResourcesManager.layout = (page) => /* @__PURE__ */ jsx(AdminControlLayout, { children: page });
export {
  ResourcesManager as default
};
