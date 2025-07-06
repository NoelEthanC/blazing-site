import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DU6vEFA_.js";
import { B as Button } from "./button-wnFVC-UW.js";
import { I as Input } from "./input-zTnVlpte.js";
import { L as Label } from "./label-CkIVNrf1.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-D3zzmToV.js";
import { B as Badge } from "./badge-CGZGM-oT.js";
import { Download, Play, FileText, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { N as Navbar } from "./Navbar-D2514n6l.js";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-dialog";
import "@inertiajs/react";
const resourcesData = [
  {
    id: "1",
    title: "AI-Powered Resume Builder",
    description: "A Notion-based resume template powered by AI for quick customization.",
    file_url: "https://example.com/files/resume-builder.pdf",
    category: "Career",
    tags: ["resume", "notion", "ai", "productivity"],
    download_count: 1243,
    tool_used: "Notion",
    guide_url: "https://example.com/guides/resume-builder",
    video_url: "https://www.youtube.com/watch?v=xyz123abc",
    thumbnail_url: "/images/workflow-2.png",
    resource_type: "Template"
  },
  {
    id: "2",
    title: "Social Media Content Calendar",
    description: "Plan your weekly content with this customizable calendar in Google Sheets.",
    file_url: "https://example.com/files/content-calendar.xlsx",
    category: "Marketing",
    tags: ["calendar", "social media", "content", "google sheets"],
    download_count: 875,
    tool_used: "Google Sheets",
    guide_url: "https://example.com/guides/content-calendar",
    video_url: "https://www.youtube.com/watch?v=abcd9876",
    thumbnail_url: "https://example.com/thumbs/calendar-thumb.jpg",
    resource_type: "Spreadsheet"
  },
  {
    id: "3",
    title: "Automated Invoice Generator",
    description: "Generate invoices instantly using this Google Docs template and Zapier integration.",
    file_url: "https://example.com/files/invoice-generator.docx",
    category: "Finance",
    tags: ["invoice", "automation", "zapier", "template"],
    download_count: 432,
    tool_used: "Zapier",
    guide_url: "https://example.com/guides/invoice-generator",
    video_url: "https://www.youtube.com/watch?v=zapier101",
    thumbnail_url: "https://example.com/thumbs/invoice-thumb.jpg",
    resource_type: "Document"
  },
  {
    id: "4",
    title: "Beginner's Guide to ChatGPT Prompts",
    description: "A downloadable PDF guide to help you get started with crafting effective ChatGPT prompts.",
    file_url: "https://example.com/files/chatgpt-prompts-guide.pdf",
    category: "AI Tools",
    tags: ["chatgpt", "prompt", "guide", "pdf"],
    download_count: 2091,
    tool_used: "ChatGPT",
    guide_url: "https://example.com/guides/chatgpt-prompts",
    video_url: "https://www.youtube.com/watch?v=promptMastery",
    thumbnail_url: "https://example.com/thumbs/chatgpt-guide.png",
    resource_type: "Guide"
  },
  {
    id: "5",
    title: "Startup Landing Page Template",
    description: "A responsive HTML template for early-stage startups to showcase their product.",
    file_url: "https://example.com/files/landing-page-template.zip",
    category: "Web Development",
    tags: ["html", "template", "landing page", "startup"],
    download_count: 319,
    tool_used: "HTML/CSS",
    guide_url: "https://example.com/guides/landing-page-template",
    video_url: "https://www.youtube.com/watch?v=launchfast",
    thumbnail_url: "https://example.com/thumbs/startup-template.jpg",
    resource_type: "Code"
  }
];
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(
    null
  );
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cardsRef = useRef([]);
  useEffect(() => {
    setResources(resourcesData);
  }, []);
  useEffect(() => {
    if (resources.length > 0 && typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: 50
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        });
      });
      return () => ctx.revert();
    }
  }, [resources]);
  const handleDownloadClick = (resource) => {
    setSelectedResource(resource);
    setIsDialogOpen(true);
    setIsSubmitted(false);
    setEmail("");
  };
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!selectedResource) return;
    try {
      const response = await fetch("/api/resources/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resourceId: selectedResource.id,
          email
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };
  const handleDirectDownload = () => {
    if (selectedResource == null ? void 0 : selectedResource.file_url) {
      window.open(selectedResource.file_url, "_blank");
      setIsDialogOpen(false);
    }
  };
  const handleEmailDownload = async () => {
    if (!selectedResource) return;
    try {
      await fetch("/api/resources/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resourceId: selectedResource.id,
          email
        })
      });
      setIsDialogOpen(false);
      alert("Resource sent to your email!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#09111f]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: [
          "Free",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent", children: "Resources" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-[#cbd5e1] max-w-2xl mx-auto", children: "Download our automation workflows, AI agents, and templates to supercharge your business" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: resources.map((resource, index) => /* @__PURE__ */ jsxs(
        Card,
        {
          ref: addToRefs,
          className: "bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "aspect-video relative overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: resource.thumbnail_url || "/placeholder.svg?height=200&width=400",
                  alt: resource.title,
                  className: "object-cover group-hover:scale-105 transition-transform duration-300"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: resource.resource_type === "Free" ? "secondary" : "default",
                  className: resource.resource_type === "Free" ? "bg-green-500/80 text-white" : "bg-yellow-500/80 text-black",
                  children: resource.resource_type
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "bg-[#3f79ff]/80 text-white",
                  children: resource.tool_used
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs(CardHeader, { className: "pb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "border-white/20 text-[#cbd5e1]",
                    children: resource.category
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center text-[#cbd5e1] text-sm", children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-1" }),
                  resource.download_count
                ] })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-white group-hover:text-[#3f79ff] transition-colors", children: resource.title })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] mb-4 line-clamp-3", children: resource.description }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: resource.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "border-white/20 text-[#cbd5e1] text-xs",
                  children: tag
                },
                tag
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleDownloadClick(resource),
                    className: "w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "Download"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  resource.video_url && /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => window.open(
                        resource.video_url,
                        "_blank"
                      ),
                      className: "flex-1 border-white/20 text-white hover:bg-white/10",
                      children: [
                        /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 mr-1" }),
                        "Video"
                      ]
                    }
                  ),
                  resource.guide_url && /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => window.open(
                        resource.guide_url,
                        "_blank"
                      ),
                      className: "flex-1 border-white/20 text-white hover:bg-white/10",
                      children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-1" }),
                        "Guide"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ]
        },
        resource.id
      )) }),
      resources.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-16", children: /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] text-lg", children: "No resources available yet." }) })
    ] }) }),
    /* @__PURE__ */ jsx(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "bg-[#09111f] border-white/10", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-white", children: isSubmitted ? "Choose Download Option" : "Get Your Free Resource" }) }),
      !isSubmitted ? /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleEmailSubmit,
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: selectedResource == null ? void 0 : selectedResource.title }),
              /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] mb-4", children: "Enter your email to download this resource" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-white", children: "Email Address" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "email",
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "bg-white/5 border-white/10 text-white",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                className: "w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90",
                children: "Continue"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1]", children: "How would you like to receive your resource?" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleDirectDownload,
              className: "bg-[#3f79ff] hover:bg-[#3f79ff]/80",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                "Download Now"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleEmailDownload,
              variant: "outline",
              className: "border-white/20 text-white hover:bg-white/10",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mr-2" }),
                "Send to Email"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ResourcesPage as default
};
