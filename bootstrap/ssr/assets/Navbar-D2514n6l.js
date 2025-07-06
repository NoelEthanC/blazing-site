import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { B as Button } from "./button-wnFVC-UW.js";
import { Zap, X, Menu } from "lucide-react";
import { Link } from "@inertiajs/react";
import { h as handleLinkClick } from "./utils-CYs7COny.js";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Resources", href: "/#resources" },
    { label: "Contact", href: "/#contact" }
  ];
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-midnight-blue/70  backdrop-blur-sm border border-gray-text/20 rounded-2xl  lg:rounded-full px-6 py-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 w-fit", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-upstream rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/",
            onClick: closeMobileMenu,
            className: "font-sora font-bold text-lg text-white w-auto",
            children: "Blazing Automations"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center space-x-6 ml-8", children: navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          href: item.href,
          onClick: () => handleLinkClick(item.href),
          className: "text-slate-text hover:text-white transition-colors font-work-sans text-sm",
          children: item.label
        },
        item.label
      )) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block ml-6", children: /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => handleLinkClick("resources"),
          className: "gradient-upstream text-white font-work-sans font-semibold px-4 py-2 rounded-full hover-glow text-sm",
          children: [
            "Get Our Templates",
            /* @__PURE__ */ jsx("span", { className: "ml-2 bg-sunray text-midnight-blue px-2 py-1 rounded-full text-xs font-bold", children: "FREE" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden text-white ml-4",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-4 pt-4 border-t border-gray-text/10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-3", children: [
      navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          href: item.href,
          className: "text-slate-text hover:text-white transition-colors font-work-sans text-sm",
          onClick: () => {
            handleLinkClick(item.href);
            setIsMenuOpen(false);
          },
          children: item.label
        },
        item.label
      )),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => handleLinkClick("resources"),
          className: "gradient-upstream text-white font-work-sans font-semibold px-4 py-2 rounded-full hover-glow w-full text-sm",
          children: [
            "Get Started",
            /* @__PURE__ */ jsx("span", { className: "ml-2 bg-sunray text-midnight-blue px-2 py-1 rounded-full text-xs font-bold", children: "FREE" })
          ]
        }
      )
    ] }) })
  ] }) });
};
export {
  Navbar as N
};
