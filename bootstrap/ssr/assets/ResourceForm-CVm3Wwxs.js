import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { B as Button } from "./button-wnFVC-UW.js";
import { I as Input } from "./input-zTnVlpte.js";
import { L as Label } from "./label-CkIVNrf1.js";
import { T as Textarea } from "./textarea-BEb2aoRb.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, Circle, ArrowBigLeft, Upload } from "lucide-react";
import { c as cn } from "./utils-CYs7COny.js";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { A as AdminControlLayout } from "./AdminControlLayout-CvklES1f.js";
import { C as Card, b as CardHeader, c as CardTitle } from "./card-DU6vEFA_.js";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "./use-toast-DdRhLTSk.js";
import "@radix-ui/react-toast";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
function ResourceForm() {
  const { props } = usePage();
  const [categories, setCategories] = useState(props.categories || []);
  const [formErrors, setFormErrors] = useState();
  const [editingResource, setEditingResource] = useState(
    (props == null ? void 0 : props.resource) ? props.resource : null
  );
  const {
    data,
    setData,
    post,
    patch,
    put,
    delete: destroy,
    processing,
    errors,
    reset
  } = useForm({
    title: editingResource ? editingResource.title : "",
    description: editingResource ? editingResource.description : "",
    file_path: editingResource ? editingResource.file_path : "",
    category_id: editingResource ? editingResource.category_id : "",
    tags: editingResource ? editingResource.tags : "",
    tool: editingResource ? editingResource.tool : "",
    guide_url: editingResource ? editingResource.guide_url : "",
    video_url: editingResource ? editingResource.video_url : "",
    thumbnail_path: editingResource ? editingResource.thumbnail_path : "",
    resource_type: editingResource ? editingResource.resource_type : "free",
    _method: editingResource ? "put" : "post"
  });
  const tools = [
    "n8n",
    "Zapier",
    "Make.com",
    "Airtable",
    "HubSpot",
    "OpenAI",
    "Anthropic",
    "Other"
  ];
  function submitForm(e) {
    e.preventDefault();
    const routeName = editingResource ? "admin.resources.update" : "admin.resources.store";
    post(route(routeName, editingResource == null ? void 0 : editingResource.slug), {
      forceFormData: true,
      onSuccess: () => {
        reset();
        setEditingResource(null);
        setFormErrors(null);
      },
      onError: (errors2) => {
        console.error("Form submission errors:", errors2);
        setFormErrors(errors2);
      }
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Head,
      {
        title: editingResource ? "Edit Resource" : "Create Resource"
      }
    ),
    /* @__PURE__ */ jsx(Card, { className: "border-0 shadow-lg bg-midnight-blue", children: /* @__PURE__ */ jsx(CardHeader, { className: "bg-midnight-blue border-0", children: /* @__PURE__ */ jsxs(CardTitle, { className: "bg-midnight-blue text-white flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("admin.resources.index"),
          as: "button",
          className: "bg-white/5 hover:bg-white/10  flex items-center gap-2 px-4 py-2 text-sm text-blue-500 rounded-md",
          children: [
            /* @__PURE__ */ jsx(ArrowBigLeft, { className: "h-4 w-4" }),
            " Back"
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold" }),
      props.editingResource ? "Edit Resource" : "Add New Resource"
    ] }) }) }),
    /* @__PURE__ */ jsx(
      ResourceFormContent,
      {
        handleSubmit: submitForm,
        editingResource,
        setEditingResource,
        reset,
        categories,
        formData: data,
        errors,
        setData,
        processing,
        tools
      }
    )
  ] });
}
ResourceForm.layout = (page) => /* @__PURE__ */ jsx(AdminControlLayout, { children: page });
const ResourceFormContent = ({
  handleSubmit,
  editingResource,
  setEditingResource,
  reset,
  categories,
  formData,
  errors,
  setData,
  processing,
  tools
}) => {
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-6",
      encType: "multipart/form-data",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "title", className: "text-white", children: "Resource Title *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "title",
                value: formData.title,
                onChange: (e) => setData("title", e.target.value),
                className: "bg-white/5 border-white/10 text-white",
                required: true
              }
            ),
            errors.title && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.title })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "category_id", className: "text-white", children: "Category" }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: formData.category_id,
                onValueChange: (value) => setData("category_id", value),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "bg-white/5 border-white/10 text-white", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a category" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { className: "bg-[#09111f] border-white/10", children: categories.map((category) => /* @__PURE__ */ jsx(
                    SelectItem,
                    {
                      value: category.id,
                      className: "text-white hover:bg-white/10",
                      children: category.name
                    },
                    category.id
                  )) })
                ]
              }
            ),
            errors.category_id && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.category_id })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", className: "text-white", children: "Short Description *" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              value: formData.description,
              onChange: (e) => setData("description", e.target.value),
              className: "bg-white/5 border-white/10 text-white",
              rows: 3,
              required: true
            }
          ),
          errors.description && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "tool", className: "text-white", children: "Tool Used" }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: formData.tool,
                onValueChange: (value) => setData("tool", value),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "bg-white/5 border-white/40 text-white", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a tool" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { className: "bg-[#09111f] border-white/10", children: tools.map((tool) => /* @__PURE__ */ jsx(
                    SelectItem,
                    {
                      value: tool,
                      className: "text-white hover:bg-white/10",
                      children: tool
                    },
                    tool
                  )) })
                ]
              }
            ),
            errors.tool && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.tool })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { className: "text-white", children: "Resource Type" }),
            /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                value: formData.resource_type,
                onValueChange: (value) => setData("resource_type", value),
                className: "flex space-x-4 mt-2",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(
                      RadioGroupItem,
                      {
                        value: "free",
                        id: "free",
                        className: "border-white/20"
                      }
                    ),
                    /* @__PURE__ */ jsx(Label, { htmlFor: "free", className: "text-white", children: "Free" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(
                      RadioGroupItem,
                      {
                        value: "pro",
                        id: "pro",
                        className: "border-white/20"
                      }
                    ),
                    /* @__PURE__ */ jsx(Label, { htmlFor: "pro", className: "text-white", children: "Pro" })
                  ] })
                ]
              }
            ),
            errors.resource_type && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.resource_type })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "file_path", className: "text-white", children: "Upload Workflow File" }),
          typeof formData.file_path === "string" && /* @__PURE__ */ jsxs("div", { className: "mb-2 text-sm text-[#cbd5e1]", children: [
            "Current File:",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/storage/${formData.file_path}`,
                className: "text-blue-400 underline",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View or Download"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "file_path",
                type: "file",
                accept: ".json,.zip,.pdf",
                onChange: (e) => {
                  var _a;
                  const file = (_a = e.target.files) == null ? void 0 : _a[0];
                  if (file) {
                    setData("file_path", file);
                  }
                },
                className: "bg-white/5 border-white/10 text-white"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                size: "sm",
                className: "bg-[#3f79ff] hover:bg-[#3f79ff]/80",
                children: /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] text-sm mt-1", children: "Accepts .json, .zip, .pdf files" }),
          errors.file_path && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.file_path })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "guide_url", className: "text-white", children: "Guide URL (PDF or Notion)" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "guide_url",
                value: formData.guide_url,
                onChange: (e) => setData("guide_url", e.target.value),
                className: "bg-white/5 border-white/10 text-white",
                placeholder: "https://..."
              }
            ),
            errors.guide_url && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.guide_url })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "video_url", className: "text-white", children: "Video URL (Optional)" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "video_url",
                value: formData.video_url,
                onChange: (e) => setData("video_url", e.target.value),
                className: "bg-white/5 border-white/10 text-white",
                placeholder: "YouTube or Vimeo URL"
              }
            ),
            errors.video_url && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.video_url })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "thumbnail_path", className: "text-white", children: "Thumbnail Preview" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "thumbnail_path",
                type: "file",
                onChange: (e) => {
                  var _a;
                  const file = (_a = e.target.files) == null ? void 0 : _a[0];
                  if (file) {
                    setData("thumbnail_path", file);
                  }
                },
                className: "bg-white/5 border-white/10 text-white"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                size: "sm",
                className: "bg-[#3f79ff] hover:bg-[#3f79ff]/80",
                children: /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" })
              }
            )
          ] }),
          formData.thumbnail_path && typeof formData.thumbnail_path === "string" && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${formData.thumbnail_path}`,
              alt: "Thumbnail preview",
              width: 200,
              height: 120,
              className: "rounded-lg"
            }
          ) }),
          formData.thumbnail_path instanceof File && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: URL.createObjectURL(formData.thumbnail_path),
              alt: "Thumbnail preview",
              width: 200,
              height: 120,
              className: "rounded-lg"
            }
          ) }),
          errors.thumbnail_path && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.thumbnail_path })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            disabled: processing,
            className: "w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90",
            children: editingResource ? "Update Resource" : "Add Resource"
          }
        )
      ]
    }
  );
};
export {
  ResourceForm as default
};
