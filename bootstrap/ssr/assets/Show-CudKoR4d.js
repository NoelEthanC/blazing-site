import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm, router, Link, Head } from "@inertiajs/react";
import { S as SitePageLayout } from "./SitePageLayout-Cqa8hkVD.js";
import { G as GuestLayout } from "./GuestLayout-DSwAePEQ.js";
import { PenTool } from "lucide-react";
import "./Navbar-D2514n6l.js";
import "./button-wnFVC-UW.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
function EmailInput({ value, onChange, isValid, error }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const showValidation = value.length > 0;
  const isValidFormat = emailRegex.test(value);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: "email",
        className: "block text-sm font-medium text-gray-700 mb-2",
        children: "Email Address"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          autoFocus: true,
          id: "email",
          value,
          onChange: (e) => onChange(e.target.value),
          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${error ? "border-red-300 focus:border-red-500" : showValidation ? isValidFormat ? "border-green-300 focus:border-green-500" : "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
          placeholder: "Enter your email address"
        }
      ),
      showValidation && /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: isValidFormat ? /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-5 w-5 text-green-500",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 13l4 4L19 7"
            }
          )
        }
      ) : /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-5 w-5 text-red-500",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12"
            }
          )
        }
      ) })
    ] }),
    showValidation && !isValidFormat && !error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: "Please enter a valid email address" }),
    error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: error })
  ] });
}
function DownloadModal({ resource, isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { data, setData, post, patch, processing, errors, reset, setError } = useForm({
    email: "",
    action: "send_email"
    // default action
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  useEffect(() => {
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    setData("email", email);
  }, [email]);
  const handleDownloadNow = () => {
    if (!isEmailValid) return;
    router.visit(route("resources.download", resource.slug), {
      method: "patch",
      data: {
        email,
        action: "download_now"
      },
      onSuccess: (response) => {
        var _a, _b, _c, _d;
        if ((_b = (_a = response.props) == null ? void 0 : _a.flash) == null ? void 0 : _b.success) {
          const link = document.createElement("a");
          link.href = response.props.flash.downloadUrl;
          link.download = resource.file_name || resource.title;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          onClose();
        } else if (!((_d = (_c = response.props) == null ? void 0 : _c.flash) == null ? void 0 : _d.success)) {
          console.log("first", response.props.flash);
          setError(
            "resource",
            response.props.flash.error || "oops! Download failed. Please, Try again!"
          );
        }
      },
      onError: (errors2) => {
        console.error("Download failed:", errors2);
        setError(errors2);
        setShowSuccess(false);
        setSuccessMessage(
          "Failed to download resource. Please try again."
        );
      }
    });
  };
  const handleSendToEmail = () => {
    if (!isEmailValid) return;
    patch(route("resources.download", resource.slug), {
      // onFinish: (visit) => {
      //     // console.log(visit);
      //     setSuccessMessage(
      //         "Sending resource to your email, please wait..."
      //     );
      // },
      onSuccess: (response) => {
        setShowSuccess(true);
        setSuccessMessage(
          "Resource sent to your email successfully! Check your inbox."
        );
        setTimeout(() => {
          onClose();
          setShowSuccess(false);
          setSuccessMessage("");
          reset();
          setEmail("");
        }, 3e3);
      },
      onError: (errors2) => {
        console.error("Email send failed:", errors2);
      }
    });
  };
  const handleClose = () => {
    onClose();
    setShowSuccess(false);
    setSuccessMessage("");
    reset();
    setEmail("");
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#09111f] rounded-2xl max-w-md w-full p-6 shadow-xl border border-[#1a2435] relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white tracking-tight", children: showSuccess ? "✅ Success!" : "Get Your Free Template" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleClose,
          className: "text-gray-400 hover:text-[#3f79ff] transition duration-200",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            }
          )
        }
      )
    ] }),
    showSuccess ? /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-in", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#fcbf5b1a] mb-4", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-6 w-6 text-[#fcbf5b]",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 13l4 4L19 7"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: successMessage })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 animate-fade-in", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: resource.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-sunray", children: "Enter your email address to download this template." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-6 animate-fade-in", children: /* @__PURE__ */ jsx(
        EmailInput,
        {
          value: email,
          onChange: setEmail,
          isValid: isEmailValid,
          error: errors.email
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 animate-fade-in", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleDownloadNow,
            disabled: !isEmailValid || processing,
            className: `w-full py-3 px-4 rounded-xl font-medium transition duration-200 flex items-center justify-center ${isEmailValid && !processing ? "bg-[#3f79ff] hover:bg-[#3468db] text-white" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`,
            children: [
              processing && data.action === "download_now" ? /* @__PURE__ */ jsx(Spinner, {}) : /* @__PURE__ */ jsx(DownloadIcon, {}),
              "Download Now"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleSendToEmail,
            disabled: !isEmailValid || processing,
            className: `w-full py-3 px-4 rounded-xl font-medium transition duration-200 flex items-center justify-center border ${isEmailValid && !processing ? "border-[#3f79ff] text-[#3f79ff] hover:bg-[#3f79ff1a]" : "border-gray-700 text-gray-500 cursor-not-allowed"}`,
            children: [
              processing && data.action === "send_email" ? /* @__PURE__ */ jsx(Spinner, {}) : /* @__PURE__ */ jsx(MailIcon, {}),
              "Send to Email"
            ]
          }
        )
      ] }),
      (errors.email || (errors == null ? void 0 : errors.resource)) && /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-[#ca66781a] border border-[#ca6678] rounded-lg animate-fade-in", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-[#ca6678]", children: errors.email || (errors == null ? void 0 : errors.resource) }) })
    ] })
  ] }) });
}
const Spinner = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-current",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
);
const DownloadIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    className: "w-5 h-5 mr-2",
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
);
const MailIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    className: "w-5 h-5 mr-2",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      }
    )
  }
);
function RelatedResources({ resources }) {
  if (!resources || resources.length === 0) return null;
  return /* @__PURE__ */ jsxs("section", { className: "mt-12 lg:mt-0", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-white text-lg font-semibold mb-4", children: "More Templates You'll Love" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: resources.map((item) => {
      var _a;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          href: `/resources/${item.slug}`,
          className: "flex gap-4 items-start bg-[#0e172a]/45 hover:bg-[#18273e] rounded-xl p-3 transition duration-200 group",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.thumbnail_path}` || "/placeholder-resource.jpg",
                alt: item.title,
                className: "w-16 h-16 object-cover rounded-md flex-shrink-0 border border-[#1f2a3a]"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-white leading-tight line-clamp-2 group-hover:text-sunray", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-1", children: ((_a = item.category) == null ? void 0 : _a.name) || "Template" })
            ] })
          ]
        },
        item.id
      );
    }) })
  ] });
}
function Show({ resource, relatedResources, breadcrumbs }) {
  var _a, _b;
  const [showModal, setShowModal] = useState(false);
  return /* @__PURE__ */ jsxs(SitePageLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: resource.title }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-midnight-blue py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("nav", { className: "flex mb-8", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsx("ol", { className: "flex items-center space-x-4", children: breadcrumbs.map((crumb, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
        index > 0 && /* @__PURE__ */ jsx(
          "svg",
          {
            className: "flex-shrink-0 h-5 w-5 text-gray-400 mx-4",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                clipRule: "evenodd"
              }
            )
          }
        ),
        crumb.url ? /* @__PURE__ */ jsx(
          Link,
          {
            href: crumb.url,
            className: "text-blue-600 hover:text-blue-800 font-medium",
            children: crumb.label
          }
        ) : /* @__PURE__ */ jsx("span", { className: "text-gray-500 font-medium", children: crumb.label })
      ] }, index)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[2.5fr_0.9fr] gap-8", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "bg-[#0e172a] border-[#1a2435] border group rounded-xl shadow-lg overflow-hidden ", children: /* @__PURE__ */ jsxs("div", { className: "md:flex", children: [
          /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${resource.thumbnail_path}` || "/placeholder-resource.jpg",
              alt: resource.title,
              className: "w-full h-64 md:h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 p-8", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] text-[#09111f] shadow-sm ", children: ((_a = resource.category) == null ? void 0 : _a.name) || "Resource" }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-4", children: resource.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: resource.description }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6 space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4 mr-2",
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
                "File Type:",
                " ",
                ((_b = resource.file_type) == null ? void 0 : _b.toUpperCase()) || "PDF"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
                /* @__PURE__ */ jsx(PenTool, { className: "w-4 h-4 mr-2" }),
                "Tool: ",
                resource.tool
              ] })
            ] }),
            resource.tags && resource.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: resource.tags.map(
              (tag, index) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
                  children: tag
                },
                index
              )
            ) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 mt-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setShowModal(true),
                  className: "w-full bg-[#3f79ff] hover:bg-[#3468db] text-white font-semibold py-3 px-5 rounded-lg flex items-center justify-center transition duration-200",
                  children: [
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-5 h-5 mr-2",
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
                    "Download Template"
                  ]
                }
              ),
              !resource.youtube_url && /* @__PURE__ */ jsx(
                "a",
                {
                  href: resource.youtube_url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-full border border-[#3f79ff] text-[#3f79ff] font-medium py-3 px-5 rounded-lg flex items-center justify-center hover:bg-[#3f79ff]/10 transition duration-200",
                  children: "🎥 Watch the Setup Guide"
                }
              )
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsx(
          RelatedResources,
          {
            resources: relatedResources
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden mt-12", children: /* @__PURE__ */ jsx(RelatedResources, { resources: relatedResources }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      DownloadModal,
      {
        resource,
        isOpen: showModal,
        onClose: () => setShowModal(false)
      }
    )
  ] });
}
Show.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  Show as default
};
