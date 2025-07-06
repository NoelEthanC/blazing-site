import { jsx, jsxs } from "react/jsx-runtime";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { N as Navbar } from "./Navbar-D2514n6l.js";
const Footer = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/blazingautomations",
      label: "Twitter"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/blazingautomations",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/blazingautomations",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:hello@blazingautomations.com",
      label: "Email"
    }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "py-12 px-4 border-t bg-midnight-blue border-gray-text/20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-sora font-bold text-2xl text-white mb-2", children: "Blazing Automations" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-text", children: "Transforming businesses with AI automation and no-code solutions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-6", children: socialLinks.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-10 h-10 bg-light-blue/25 rounded-lg flex items-center justify-center text-light-blue hover:text-sunray hover:bg-light-blue/20 transition-all duration-300",
          "aria-label": link.label,
          children: /* @__PURE__ */ jsx(link.icon, { className: "w-5 h-5" })
        },
        link.label
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 border-t border-gray-text/20 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-text text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Blazing Automations. All rights reserved.",
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "•" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "text-light-blue hover:text-sunray transition-colors",
          children: "Privacy Policy"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "•" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "text-light-blue hover:text-sunray transition-colors",
          children: "Terms of Service"
        }
      )
    ] }) })
  ] }) });
};
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: " w-full overflow-hidden bg-midnight-blue dark:bg-gray-800", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    children,
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
export {
  GuestLayout as G
};
