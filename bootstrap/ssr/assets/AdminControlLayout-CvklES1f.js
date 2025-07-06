import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useEffect, useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { c as cn } from "./utils-CYs7COny.js";
import { u as useToast } from "./use-toast-DdRhLTSk.js";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { usePage, router } from "@inertiajs/react";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({
      id,
      title,
      description,
      action,
      ...props
    }) {
      return /* @__PURE__ */ jsxs(
        Toast,
        {
          className: "bg-light-blue text-white border-0 shadow-2xl shadow-black/20 ",
          ...props,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
              title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
              description && /* @__PURE__ */ jsx(ToastDescription, { className: "", children: description })
            ] }),
            action,
            /* @__PURE__ */ jsx(ToastClose, {})
          ]
        },
        id
      );
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
function AdminControlLayout({
  overview,
  resources,
  leads,
  tools,
  blogPosts,
  reloadTab,
  children
}) {
  const { props, url } = usePage();
  const { auth, flash } = props;
  const { toast } = useToast();
  const defaultTab = url.split("/").pop() || "overview";
  useEffect(() => {
    if (flash.success) {
      toast({
        title: `${flash == null ? void 0 : flash.success}`
      });
      flash.success = null;
    }
  }, [flash, toast]);
  const [value, setValue] = useState("overview");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#09111f] p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1]", children: "Manage your website content and settings" })
      ] }),
      /* @__PURE__ */ jsxs(
        Tabs,
        {
          defaultValue: defaultTab,
          onValueChange: (tab) => {
            setValue(tab);
            if (tab === "overview") {
              router.visit(route("admin.overview"), {
                preserveState: true
              });
              return;
            }
            router.visit(route(`admin.${tab}.index`), {
              preserveState: true
            });
          },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxs(TabsList, { className: "bg-white/5 border-white/10", children: [
              /* @__PURE__ */ jsx(
                TabsTrigger,
                {
                  value: "overview",
                  className: "text-white data-[state=active]:bg-[#469cf3]",
                  children: "Overview"
                }
              ),
              /* @__PURE__ */ jsx(
                TabsTrigger,
                {
                  value: "content",
                  className: "text-white data-[state=active]:bg-[#3f79ff]",
                  children: "Content"
                }
              ),
              /* @__PURE__ */ jsx(
                TabsTrigger,
                {
                  value: "leads",
                  className: "text-white data-[state=active]:bg-[#3f79ff]",
                  children: "Leads"
                }
              ),
              /* @__PURE__ */ jsx(
                TabsTrigger,
                {
                  value: "resources",
                  className: "text-white data-[state=active]:bg-[#3f79ff]",
                  children: "Resources"
                }
              ),
              /* @__PURE__ */ jsx(
                TabsTrigger,
                {
                  value: "blog",
                  className: "text-white data-[state=active]:bg-[#3f79ff]",
                  children: "Blog"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(TabsContent, { value, children })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  AdminControlLayout as A
};
