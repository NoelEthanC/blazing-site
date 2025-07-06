import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { usePage, Head, Link } from "@inertiajs/react";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DU6vEFA_.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-BdnOopEi.js";
import { I as Input } from "./input-zTnVlpte.js";
import { B as Button } from "./button-wnFVC-UW.js";
import { Download, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { A as AdminControlLayout } from "./AdminControlLayout-C8TFqy39.js";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "./use-toast-DdRhLTSk.js";
import "@radix-ui/react-toast";
function LeadsManager() {
  const { leads } = usePage().props;
  const {
    data: leadRows = [],
    links = [],
    prev_page_url,
    next_page_url,
    from,
    to,
    total
  } = leads || {};
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("last_downloaded");
  const [sortDirection, setSortDirection] = useState("desc");
  useEffect(() => {
    console.log("LeadsManager render:", {
      leadRows: leadRows == null ? void 0 : leadRows.length,
      searchTerm,
      sortField,
      sortDirection,
      leads
    });
  }, [leadRows, searchTerm, sortField, sortDirection, leads]);
  const filteredAndSortedLeads = useMemo(() => {
    if (!leadRows || !Array.isArray(leadRows)) {
      console.log("No leadRows or not array:", leadRows);
      return [];
    }
    const filtered = leadRows.filter((l) => {
      var _a, _b;
      if (!l) return false;
      const emailMatch = ((_a = l.email) == null ? void 0 : _a.toLowerCase().includes(searchTerm.toLowerCase())) || false;
      const titleMatch = ((_b = l.resource_title) == null ? void 0 : _b.toLowerCase().includes(searchTerm.toLowerCase())) || false;
      return emailMatch || titleMatch;
    });
    console.log("Filtered leads:", filtered.length);
    const sorted = filtered.sort((a, b) => {
      if (!a || !b) return 0;
      const av = a[sortField];
      const bv = b[sortField];
      if (av === void 0 || bv === void 0) return 0;
      if (typeof av === "number" && typeof bv === "number") {
        return sortDirection === "asc" ? av - bv : bv - av;
      }
      const aStr = String(av);
      const bStr = String(bv);
      return sortDirection === "asc" ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
    console.log("Final sorted leads:", sorted.length);
    return sorted;
  }, [leadRows, searchTerm, sortField, sortDirection]);
  const exportToCSV = () => {
    if (!filteredAndSortedLeads.length) return;
    const rows = filteredAndSortedLeads.map((l) => [
      l.email || "",
      `"${l.resource_title || ""}"`,
      (l.download_count || 0).toString(),
      l.last_downloaded ? new Date(l.last_downloaded).toLocaleDateString() : ""
    ]);
    const csv = [
      ["Email", "Resource", "# Downloads", "Last Downloaded"],
      ...rows
    ].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleSort = (field) => {
    setSortField(field);
    setSortDirection((prev) => prev === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Leads" }),
    /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 border-white/10", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-white", children: "Leads Manager" }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: exportToCSV,
              className: "bg-[#3f79ff] hover:bg-[#3f79ff]/80 text-white",
              disabled: !filteredAndSortedLeads.length,
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Export CSV"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search by email or resource...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, { className: "border-white/10", children: [
            "email",
            "resource_title",
            "last_downloaded"
          ].map((field) => /* @__PURE__ */ jsxs(
            TableHead,
            {
              className: "text-white cursor-pointer hover:text-[#3f79ff]",
              onClick: () => handleSort(field),
              children: [
                {
                  email: "Email Address",
                  resource_title: "Resource Downloaded",
                  last_downloaded: "Last Downloaded"
                }[field],
                sortField === field && (sortDirection === "asc" ? " ↑" : " ↓")
              ]
            },
            field
          )) }) }),
          /* @__PURE__ */ jsx(TableBody, { children: filteredAndSortedLeads.length > 0 ? filteredAndSortedLeads.map((l) => /* @__PURE__ */ jsxs(
            TableRow,
            {
              className: "border-white/10",
              children: [
                /* @__PURE__ */ jsx(TableCell, { className: "text-white", children: l.email || "N/A" }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-[#cbd5e1]", children: l.resource_title || "N/A" }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-[#cbd5e1]", children: l.last_downloaded ? new Date(
                  l.last_downloaded
                ).toLocaleDateString() : "N/A" })
              ]
            },
            l.id
          )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
            TableCell,
            {
              colSpan: 3,
              className: "text-center text-[#cbd5e1] py-8",
              children: (leadRows == null ? void 0 : leadRows.length) === 0 ? "No leads available" : "No leads match your search criteria"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-4 text-[#cbd5e1] text-sm", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Showing ",
            from || 0,
            "–",
            to || 0,
            " of ",
            total || 0
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: prev_page_url || "#",
                preserveState: true,
                preserveScroll: true,
                className: `p-2 rounded-md ${prev_page_url ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`,
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
              }
            ),
            links.map((link, index) => /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url || "#",
                preserveState: true,
                preserveScroll: true,
                className: `px-3 py-1 rounded-md ${link.active ? "bg-[#3f79ff] text-white" : "bg-white/10 text-[#cbd5e1]"}`,
                children: link.label.replace(/\u00AB|\u00BB/g, "")
              },
              `${link.label}-${index}`
            )),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: next_page_url || "#",
                preserveState: true,
                preserveScroll: true,
                className: `p-2 rounded-md ${next_page_url ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`,
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
LeadsManager.layout = (page) => /* @__PURE__ */ jsx(AdminControlLayout, { children: page });
export {
  LeadsManager as default
};
