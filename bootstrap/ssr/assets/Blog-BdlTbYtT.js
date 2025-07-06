import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { C as Card, a as CardContent } from "./card-DU6vEFA_.js";
import { B as Badge } from "./badge-CGZGM-oT.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { Link } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-BssyNonJ.js";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "./button-wnFVC-UW.js";
import "@radix-ui/react-slot";
import "lucide-react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
function BlogPage() {
  const [posts, setPosts] = useState([]);
  const cardsRef = useRef([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    if (posts.length > 0 && typeof window !== "undefined") {
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
  }, [posts]);
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/blog");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
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
          "Our",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent", children: "Blog" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-[#cbd5e1] max-w-2xl mx-auto", children: "Insights, tutorials, and best practices for automation and AI workflows" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ jsx(
        Card,
        {
          ref: addToRefs,
          className: "bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer",
          children: /* @__PURE__ */ jsxs(Link, { href: `/blog/${post.slug}`, children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-video relative overflow-hidden rounded-t-lg", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: post.cover_image_url || "/placeholder.svg?height=200&width=400",
                alt: post.title,
                className: "object-cover group-hover:scale-105 transition-transform duration-300"
              }
            ) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "bg-[#3f79ff]/20 text-[#3f79ff] hover:bg-[#3f79ff]/30",
                  children: tag
                },
                tag
              )) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-3 group-hover:text-[#3f79ff] transition-colors", children: post.title }),
              /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] mb-4 line-clamp-3", children: post.summary }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-[#cbd5e1]", children: new Date(
                  post.created_at
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }) }),
                /* @__PURE__ */ jsx("span", { className: "text-[#3f79ff] group-hover:text-[#fcbf5b] transition-colors", children: "Read more →" })
              ] })
            ] })
          ] })
        },
        post.id
      )) }),
      posts.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-16", children: /* @__PURE__ */ jsx("p", { className: "text-[#cbd5e1] text-lg", children: "No blog posts available yet." }) })
    ] }) })
  ] });
}
export {
  BlogPage as default
};
