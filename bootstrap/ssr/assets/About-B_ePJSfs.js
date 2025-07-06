import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, a as CardContent } from "./card-DU6vEFA_.js";
import { N as Navbar } from "./Navbar-D2514n6l.js";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "./button-wnFVC-UW.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "@inertiajs/react";
function AboutPage() {
  const [content, setContent] = useState({
    mission_title: "Our Mission",
    mission_content: "At Blazing Automations, we believe every business deserves to operate at peak efficiency.",
    team_title: "Meet the Team",
    team_content: "Our team of automation experts combines technical expertise with business acumen.",
    team_image_url: ""
  });
  useEffect(() => {
    fetchContent();
  }, []);
  const fetchContent = async () => {
    try {
      const response = await fetch("/api/content/about");
      if (response.ok) {
        const data = await response.json();
        setContent(data.content);
      }
    } catch (error) {
      console.error("Error fetching about content:", error);
    }
  };
  const tools = [
    { name: "n8n", icon: "🔗" },
    { name: "Make.com", icon: "⚡" },
    { name: "Zapier", icon: "🔄" },
    { name: "Airtable", icon: "📊" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Anthropic", icon: "🧠" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#09111f]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: [
          "About",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent", children: "Us" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-[#cbd5e1] max-w-2xl mx-auto", children: "We're passionate about helping businesses unlock their potential through intelligent automation" })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "bg-white/5 border-white/10 mb-16", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 md:p-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: content.mission_title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#cbd5e1] leading-relaxed", children: content.mission_content })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: content.team_title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#cbd5e1] leading-relaxed mb-6", children: content.team_content }),
          /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1]", children: "With years of experience in automation, AI, and business process optimization, we're here to transform how you work and help you achieve more with less effort." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative", children: content.team_image_url ? /* @__PURE__ */ jsx(
          "img",
          {
            src: content.team_image_url || "/placeholder.svg",
            alt: "Our Team",
            width: 500,
            height: 400,
            className: "rounded-lg"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "aspect-[5/4] bg-gradient-to-br from-[#ca6678]/20 to-[#fcbf5b]/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1]", children: "Team photo coming soon" }) }) })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "bg-white/5 border-white/10", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 md:p-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 text-center", children: [
          "Tools We",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent", children: "Master" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6", children: tools.map((tool) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl mb-2", children: tool.icon }),
              /* @__PURE__ */ jsx("p", { className: "text-[#3f79ff] font-medium", children: tool.name })
            ]
          },
          tool.name
        )) })
      ] }) })
    ] }) })
  ] });
}
export {
  AboutPage as default
};
