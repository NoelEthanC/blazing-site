import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { router, usePage, Head } from "@inertiajs/react";
import { useRef, useEffect, useState } from "react";
import { B as Button } from "./button-wnFVC-UW.js";
import { ArrowRight, Star, PlayCircle, Brain, BadgeDollarSign, MonitorCog, Workflow, Database, ShieldAlert, Clock, Zap, TrendingUp, Shield, MessageSquare, Wrench, Rocket, Calendar, Mail, Youtube, FileText, Download, ExternalLink, Check } from "lucide-react";
import { gsap } from "gsap";
import { c as cn, h as handleLinkClick } from "./utils-CYs7COny.js";
import { C as Card } from "./card-DU6vEFA_.js";
import { I as Input } from "./input-zTnVlpte.js";
import { T as Textarea } from "./textarea-BEb2aoRb.js";
import { u as useToast } from "./use-toast-DdRhLTSk.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import YouTube from "react-youtube";
import { B as Badge } from "./badge-CGZGM-oT.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-D3zzmToV.js";
import { G as GuestLayout } from "./GuestLayout-DSwAePEQ.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "./Navbar-D2514n6l.js";
const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const trustpilotRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          buttonsRef.current,
          statsRef.current,
          trustpilotRef.current
        ],
        {
          opacity: 0,
          y: 50
        }
      );
      gsap.set([leftImageRef.current, rightImageRef.current], {
        opacity: 0,
        scale: 0.8,
        y: 20
      });
      gsap.set([leftArrowRef.current, rightArrowRef.current], {
        opacity: 0,
        x: 0
      });
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(trustpilotRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }).to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.4"
      ).to(
        [leftImageRef.current, rightImageRef.current],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2
        },
        "-=0.6"
      ).to(
        [leftArrowRef.current, rightArrowRef.current],
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1
        },
        "-=0.4"
      ).to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.6"
      ).to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      ).to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      );
      gsap.to(".floating-dot", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
      gsap.to([leftArrowRef.current, rightArrowRef.current], {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: heroRef,
      className: "min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute inset-0  z-0 opacity-5",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-midnight-blue [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] " }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "floating-dot absolute  top-10 -left-60 w-full rotate-45  h-40 bg-gradient-to-r blur-3xl from-white/70 to-midnight-blue rounded-full opacity-70" }),
          /* @__PURE__ */ jsx("div", { className: "floating-dot absolute  top-20 left-10 w-2 h-2 bg-sunray rounded-full opacity-70" }),
          /* @__PURE__ */ jsx("div", { className: "floating-dot absolute top-40 right-20 w-3 h-3 bg-light-blue rounded-full opacity-20" }),
          /* @__PURE__ */ jsx("div", { className: "floating-dot absolute bottom-40 left-20 w-2 h-2 bg-sunray rounded-full opacity-25" }),
          /* @__PURE__ */ jsx("div", { className: "floating-dot absolute top-60 left-1/2 w-1 h-1 bg-light-blue rounded-full opacity-40" }),
          /* @__PURE__ */ jsx("div", { className: "floating-dot absolute bottom-60 right-10 w-2 h-2 bg-sunray rounded-full opacity-30" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 hidden lg:block", children: [
          /* @__PURE__ */ jsx("div", { ref: leftImageRef, className: "relative", children: /* @__PURE__ */ jsx("div", { className: "w-48 h-32 bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-lg p-4 shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-light-blue/35 to-sunray/35 rounded flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/workflow-1.png",
              className: "w-[60%] h-[60%] opacity-80 object-contain  absolute  transform "
            }
          ) }) }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: leftArrowRef,
              className: "absolute -right-8 top-1/2 transform -translate-y-1/2",
              children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 text-sunray" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute right-8 lg:right-8 top-52 transform -translate-y-1/2 hidden lg:block", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: rightArrowRef,
              className: "absolute -left-8 top-1/2 transform -translate-y-1/2 rotate-180",
              children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 text-sunray" })
            }
          ),
          /* @__PURE__ */ jsx("div", { ref: rightImageRef, className: "relative", children: /* @__PURE__ */ jsx("div", { className: "w-48 h-32 bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-lg p-4 shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-sunray/20 to-light-blue/20 rounded flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/bot-1.png",
              className: "w-[50%] h-[50%] opacity-40 object-contain  absolute  transform "
            }
          ) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center relative z-30", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: trustpilotRef,
              className: "flex items-center justify-center mb-3",
              children: /* @__PURE__ */ jsxs("div", { className: "bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-full px-6 py-2 flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-work-sans font-semibold text-white", children: "AI" }),
                /* @__PURE__ */ jsx("div", { className: "flex space-x-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                  Star,
                  {
                    className: "w-2.5 h-2.5 fill-sunray text-sunray"
                  },
                  i
                )) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-work-sans text-slate-text", children: "AUTOMATIONS EXPERT" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            "h1",
            {
              ref: titleRef,
              className: "font-sora font-bold text-4xl lg:w-2/3 text-center  mx-auto md:text-balance md:text-6xl lg:text-7xl leading-tight mb-6",
              children: [
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Blazing" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Fast Automations " }),
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "For your " }),
                " ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Business" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { ref: subtitleRef, className: "space-y-4 mb-12", children: /* @__PURE__ */ jsxs("p", { className: "font-inter text-lg text-gray-text max-w-2xl mx-auto", children: [
            "Let's turn your repetitive tasks into smart AI-driven workflows using no-code tools like",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "n8n, Make, and Zapier!" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: buttonsRef,
              className: "flex flex-col sm:flex-row gap-6 justify-center items-center mb-16",
              children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => handleLinkClick("contact"),
                    className: "gradient-upstream text-white font-work-sans font-bold text-lg px-12 py-6 rounded-full hover-glow group transition-all duration-300 text-center",
                    children: "Book Consultation Now"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleLinkClick("watch-us-build"),
                    className: " text-light-blue bg-transparent hover:bg-light-blue/25 font-work-sans font-bold text-lg px-12 py-6 rounded-full hover-glow group transition-all duration-300 text-center",
                    children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 w-5 h-5" }),
                      "Watch Us Build"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: statsRef,
              className: " hidden lg:flex  bottom-14 lg:absolute lg:right-0 justify-center",
              children: /* @__PURE__ */ jsxs("div", { className: "text-center mx-6", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-sora font-bold text-white", children: "50+" }),
                /* @__PURE__ */ jsx("div", { className: "text-slate-text font-work-sans", children: "Automations & Chatbots" })
              ] })
            }
          )
        ] })
      ]
    }
  );
};
const ToolsSection = () => {
  const tools = [
    {
      name: "Chatbots & AI Agents",
      description: "We build chatbots and AI agents that that integrates well with your systems",
      icon: Brain
    },
    {
      name: "CRM & Sales Automation",
      description: "We automate your sales pipeline so you focus on closing, not chasing.",
      icon: BadgeDollarSign
    },
    {
      name: "AI-Powered Business Systems",
      description: "Inject AI into your processes to automate decisions, replies, and insights.",
      icon: MonitorCog
    },
    {
      name: "Custom Workflow Automation",
      description: "We design and build no-code automation workflows that save you hours every week.",
      icon: Workflow
    },
    {
      name: "Airtable System Architecture",
      description: "Turn Airtable into a powerful backend with smart automations",
      icon: Database
    },
    {
      name: " Audits & Strategy Calls",
      description: "We audit your processes and identify the best places to save time with automation",
      icon: ShieldAlert
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-28 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-sora font-bold text-4xl md:text-5xl text-white mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "What We" }),
        " Automate"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-xl text-slate-text max-w-3xl mx-auto", children: "We're experts with the world's most powerful automation tools. Let us build your custom workflow ecosystem." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: tools.map((tool, index) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: "relative bg-midnight-blue/50 border border-light-blue/20 p-6 hover:border-light-blue/60 transition-all duration-300 hover:scale-105 group animate-fade-in-up overflow-hidden",
        style: { animationDelay: `${index * 0.1}s` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -right-10 w-44 h-44 bg-light-blue/20 rounded-full blur-xl opacity-0 opacity-60 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxs("div", { className: "text-center relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl  mx-auto mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(tool.icon, { className: "w-8 h-8 mx-auto text-light-blue/70 group-hover:text-light-blue" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-space-grotesk font-bold text-xl text-white mb-2", children: tool.name }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-text", children: tool.description }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 w-full h-1 bg-gray-text/20 rounded", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full bg-light-blue/70 rounded transition-all duration-1000 group-hover:w-full",
                style: { width: "100%" }
              }
            ) })
          ] })
        ]
      },
      tool.name
    )) })
  ] }) });
};
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours Per Week",
      description: "Eliminate repetitive tasks and focus on growing your business instead of managing it."
    },
    {
      icon: Zap,
      title: "AI-Powered Intelligence",
      description: "Smart automations that learn and adapt, making decisions just like your best employee."
    },
    {
      icon: TrendingUp,
      title: "Infinitely Scalable",
      description: "Systems that grow with you - from startup to enterprise without breaking a sweat."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security and compliance built into every automation we create."
    }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "benefits",
      className: "py-20 px-4 bg-gradient-to-b from-background to-card",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-sora font-bold text-4xl md:text-5xl text-white mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Why Choose" }),
            " ",
            "Blazing Automations?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-xl text-slate-text max-w-3xl mx-auto", children: "We don't just build automations - we transform businesses. Here's how we make the magic happen." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-start space-x-6 p-6 rounded-xl hover:bg-light-blue/10 transition-all duration-300 animate-fade-in-up",
            style: { animationDelay: `${index * 0.2}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-light-blue/20 rounded-lg flex items-center justify-center group-hover:bg-light-blue/30 transition-colors", children: /* @__PURE__ */ jsx(benefit.icon, { className: "w-6 h-6 text-light-blue" }) }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-space-grotesk font-bold text-xl text-white mb-3", children: benefit.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-text leading-relaxed", children: benefit.description })
              ] })
            ]
          },
          benefit.title
        )) }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-8 p-6 bg-sunray/20 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-sunray", children: "50+" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-text text-sm", children: "Automations Built" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-gray-text/30" }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-sunray", children: "98%" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-text text-sm", children: "Client Satisfaction" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-gray-text/30" }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-sunray", children: "24/7" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-text text-sm", children: "Automation Uptime" })
          ] })
        ] }) })
      ] })
    }
  );
};
const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Tell Us Your Vision",
      description: "Share your biggest time-wasters and business goals. We'll identify the perfect automation opportunities."
    },
    {
      icon: Wrench,
      number: "02",
      title: "We Build Your System",
      description: "Our experts craft custom automations tailored to your exact needs. No templates, no shortcuts - just results."
    },
    {
      icon: Rocket,
      number: "03",
      title: "You Scale Effortlessly",
      description: "Watch your business run itself while you focus on strategy, growth, and the work only you can do."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-20 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-sora font-bold text-4xl md:text-5xl text-white mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "How It" }),
        " Works"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-xl text-slate-text max-w-3xl mx-auto", children: "From discovery to deployment - we make automation simple and stress-free." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "text-center relative animate-fade-in-up",
        style: { animationDelay: `${index * 0.3}s` },
        children: [
          index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-light-blue/50 to-transparent transform -translate-x-1/2 z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-20 h-20 mx-auto mb-6 bg-light-blue/20 rounded-full flex items-center justify-center relative animate-pulse-glow", children: [
              /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8 text-light-blue" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 bg-sunray rounded-full flex items-center justify-center text-midnight-blue font-bold text-sm", children: step.number })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-space-grotesk font-bold text-2xl text-white mb-4", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-text leading-relaxed max-w-sm mx-auto", children: step.description })
          ] })
        ]
      },
      step.number
    )) })
  ] }) });
};
gsap.registerPlugin(ScrollTrigger);
const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const calendlyRef = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      }).from(
        formRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      ).from(
        calendlyRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.6"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    console.log("Form submitted:", { name, email, message });
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you within 24 hours with your custom automation strategy."
    });
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/noelethan-ch/30min", "_blank");
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      id: "contact",
      className: "py-28 px-4 bg-gradient-to-t from-card/50 to-background",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs(
            "h2",
            {
              ref: titleRef,
              className: "font-sora font-bold text-4xl md:text-6xl text-white mb-6",
              children: [
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Ready to" }),
                " ",
                "Transform Your Business?"
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-xl text-slate-text max-w-3xl mx-auto mb-8", children: "Book a free consultation and discover how automation can 10x your productivity. No commitment, no sales pitch - just pure value." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: calendlyRef,
              className: "bg-light-blue/40 backdrop-blur-sm border border-gray-text/20 rounded-2xl p-8",
              children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Calendar, { className: "w-8 h-8 text-light-blue" }) }),
                /* @__PURE__ */ jsx("h3", { className: "font-sora font-bold text-2xl text-white mb-4", children: "📆 Book a 1-on-1 Automation Strategy Call" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-slate-text mb-8", children: "Choose a time that works for you and let's plan your automation journey." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center text-slate-text", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mr-2" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "30-minute strategy session" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-slate-text", children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "✅ Free consultation" }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-slate-text", children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "🎯 Personalized automation roadmap" }) })
                ] }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: handleCalendlyClick,
                    className: "gradient-upstream text-white font-work-sans font-bold text-lg px-8 py-4 rounded-full hover-glow group transition-all duration-300 w-full",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 w-5 h-5" }),
                      "Schedule Your Call",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-gray-text text-sm mt-4", children: "No sales pitch - just valuable insights for your business" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: formRef,
              className: "bg- backdrop-blur-sm  border-gray-text/20 rounded-2xl p-8",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-sora font-bold text-2xl text-white mb-6", children: "Send us a message" }),
                /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "name",
                          className: "block text-white font-work-sans font-medium mb-2",
                          children: "Your Name *"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Input,
                        {
                          id: "name",
                          type: "text",
                          value: name,
                          onChange: (e) => setName(e.target.value),
                          required: true,
                          className: "bg-background/50 border-gray-text/30 text-white placeholder:text-gray-text focus:border-light-blue",
                          placeholder: "John Smith"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "email",
                          className: "block text-white font-work-sans font-medium mb-2",
                          children: "Business Email *"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Input,
                        {
                          id: "email",
                          type: "email",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          required: true,
                          className: "bg-background/50 border-gray-text/30 text-white placeholder:text-gray-text focus:border-light-blue",
                          placeholder: "john@company.com"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "label",
                      {
                        htmlFor: "message",
                        className: "block text-white font-work-sans font-medium mb-2",
                        children: "What would you like to automate? *"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Textarea,
                      {
                        id: "message",
                        value: message,
                        onChange: (e) => setMessage(e.target.value),
                        required: true,
                        rows: 4,
                        className: "bg-background/50 border-gray-text/30 text-white placeholder:text-gray-text focus:border-light-blue resize-none",
                        placeholder: "Tell us about your biggest time-wasters, manual processes, or automation goals..."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "border border-light-blue/50 hover:border-light-blue hover:bg-midnight-blue bg-midnight-blue  text-white font-work-sans font-semibold text-lg px-8 py-4 rounded-full hover-glow group transition-all duration-300 w-full",
                      children: isSubmitting ? "Sending..." : /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(Mail, { className: "mr-2 w-5 h-5" }),
                        "Send Message",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
                      ] })
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-text text-sm mb-4", children: "Prefer to email us directly?" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              className: "text-light-blue hover:text-sunray transition-colors",
              onClick: () => window.open(
                "mailto:hello@blazingautomations.com",
                "_blank"
              ),
              children: "hello@blazingautomations.com →"
            }
          )
        ] })
      ] })
    }
  );
};
const ToolsMarquee = () => {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const tools = [
    {
      name: "OpenAI",
      url: "https://openai.com",
      logo: "/images/logos/open-ai.png"
    },
    {
      name: "Make.com",
      url: "https://www.make.com",
      logo: "/images/logos/Make-Logo-RGB.svg"
    },
    {
      name: "Zapier",
      url: "https://www.zapier.com",
      logo: "/images/logos/zapier.png"
    },
    {
      name: "N8nLogo",
      url: "https://www.zapier.com",
      logo: "/images/logos/n8n-logo.png"
    },
    {
      name: "Airtable",
      url: "https://airtable.com",
      logo: "/images/logos/airtable.png"
    },
    {
      name: "Chatbots",
      url: "https://chatbots.com",
      logo: "/images/bot-1.png"
    },
    {
      name: "AI Agents",
      url: "https://aiagents.com",
      logo: "/images/workflow-1.png"
    },
    {
      name: "OpenAI",
      url: "https://openai.com",
      logo: "/images/logos/open-ai.png"
    },
    {
      name: "Make.com",
      url: "https://www.make.com",
      logo: "/images/logos/Make-Logo-RGB.svg"
    },
    {
      name: "Zapier",
      url: "https://www.zapier.com",
      logo: "/images/logos/zapier.png"
    },
    {
      name: "N8nLogo",
      url: "https://www.zapier.com",
      logo: "/images/logos/n8n-logo.png"
    },
    {
      name: "Airtable",
      url: "https://airtable.com",
      logo: "/images/logos/airtable.png"
    },
    {
      name: "Chatbots",
      url: "https://chatbots.com",
      logo: "/images/bot-1.png"
    },
    {
      name: "AI Agents",
      url: "https://aiagents.com",
      logo: "/images/workflow-1.png"
    }
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeInnerRef.current) {
        const marqueeWidth = marqueeInnerRef.current.scrollWidth / 2;
        gsap.to(marqueeInnerRef.current, {
          x: -marqueeWidth,
          duration: 30,
          ease: "none",
          repeat: -1
        });
      }
    }, marqueeRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "py-12 overflow-hidden border-x border-gray-text/10 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-72 h-full bg-gradient-to-r from-midnight-blue to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-72 h-full bg-gradient-to-l from-midnight-blue to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { ref: marqueeRef, className: "relative", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref: marqueeInnerRef,
        className: "flex items-center gap-x-10 whitespace-nowrap",
        children: tools.map((tool, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-white/60 font-space-grotesk font-medium text-lg hover:text-light-blue transition-colors duration-300 cursor-default",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: tool.logo,
                className: "w-16 h-16 md:w-32 md:h-32 object-contain  filter  hover:grayscale-0 transition-all duration-300",
                alt: `${tool.name} logo`
              }
            )
          },
          index
        ))
      }
    ) })
  ] });
};
gsap.registerPlugin(ScrollTrigger);
const WatchUsBuildSection = ({ videoUrl }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);
  const getYouTubeEmbedUrl = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : "";
  };
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "watch-us-build",
      ref: sectionRef,
      className: "py-28 px-4 bg-gradient-to-b from-background to-card/30",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs(
          "h2",
          {
            ref: titleRef,
            className: "font-sora font-bold text-4xl md:text-5xl text-white mb-4",
            children: [
              /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Watch Us" }),
              " Build"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { ref: textRef, className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-inter text-lg text-slate-text mb-4", children: "See how we build powerful automations — join 100+ other smart subscribers." }),
              /* @__PURE__ */ jsxs("p", { className: "font-inter text-slate-text", children: [
                "We show our real automation projects step-by-step on our",
                /* @__PURE__ */ jsxs("span", { className: "text-light-blue font-semibold", children: [
                  " ",
                  "Blazing Automations YouTube channel",
                  " "
                ] }),
                "so you can learn and trust our process."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { ref: buttonRef, children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.youtube.com/@BlazingAutomations",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "gradient-upstream text-center text-white font-work-sans flex font-semibold px-8 py-4 rounded-full hover-glow group transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx(Youtube, { className: "mr-2 w-5 h-5" }),
                  "Subscribe To Our Channel",
                  /* @__PURE__ */ jsx("span", { className: "ml-2 bg-white/20 px-3 py-1 rounded-full text-sm", children: "Free" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { ref: videoRef, className: "relative", children: !playVideo ? (
            //  <iframe
            //         src={embedUrl}
            //         className="w-full h-full"
            //         title="YouTube Video"
            //         frameBorder="0"
            //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //         allowFullScreen
            //     ></iframe>
            /* @__PURE__ */ jsx(
              "div",
              {
                onClick: () => setPlayVideo(true),
                className: "relative bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-xl overflow-hidden group cursor-pointer hover:border-light-blue/50 transition-all duration-300",
                children: /* @__PURE__ */ jsx(
                  YouTube,
                  {
                    videoId: "GAtrG74sl1E",
                    options: {
                      height: "400",
                      width: "640",
                      playerVars: { autoplay: 1, volume: 50 }
                    }
                  }
                )
              }
            )
          ) : /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl overflow-hidden border border-gray-text/20", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: embedUrl,
              className: "w-full h-full",
              title: "YouTube Video",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          ) }) })
        ] })
      ] })
    }
  );
};
gsap.registerPlugin(ScrollTrigger);
const ResourcesSection = ({
  latest_resources
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const featuredResource = latest_resources[0];
  const resources = latest_resources.slice(1).map((resource) => ({
    slug: resource.slug,
    title: resource.title,
    category: resource.category,
    description: resource.description,
    image: resource.thumbnail_path,
    icon: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-light-blue" }),
    // Placeholder icon
    isPaid: resource.resource_type === "pro",
    fileUrl: resource.file_url
  }));
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      }).from(
        featuredRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out"
        },
        "-=0.4"
      ).from(
        ".resource-card",
        {
          opacity: 10,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1
        },
        "-=0.2"
      ).from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out"
        },
        "-=0.3"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleDownloadNow = () => {
    console.log("Downloading:", selectedResource.title);
    toast({
      title: "Download Started",
      description: `${selectedResource.title} is being downloaded.`
    });
    setIsModalOpen(false);
    setEmail("");
  };
  const handleSendEmail = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    console.log(
      "Sending to email:",
      email,
      "Resource:",
      selectedResource.title
    );
    toast({
      title: "Sent to Email",
      description: `${selectedResource.title} has been sent to ${email}`
    });
    setIsModalOpen(false);
    setEmail("");
  };
  return /* @__PURE__ */ jsxs("section", { id: "resources", ref: sectionRef, className: "py-28 px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            ref: titleRef,
            className: "font-sora font-bold text-4xl md:text-5xl text-white mb-6",
            children: [
              "Download Our Latest",
              " ",
              /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "AI Workflows" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "font-inter text-xl text-slate-text max-w-3xl mx-auto", children: "Get instant access to our proven automation templates and start building today." })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: featuredRef, className: "mb-16", children: /* @__PURE__ */ jsxs(Card, { className: "relative bg-light-blue/50 backdrop-blur-sm border border-light-blue/30 overflow-hidden group hover:border-light-blue/60 transition-all duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 bg-light-blue/10 rounded-full blur-xl opacity-60" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs(Badge, { className: "bg-sunray/20 text-sunray border-sunray/30", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 mr-1" }),
                "Featured"
              ] }),
              /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "border-gray-text/30 text-slate-text",
                  children: featuredResource.category.name
                }
              ),
              /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-400 border-green-500/30", children: "Free" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-space-grotesk font-bold text-2xl text-white mb-3", children: featuredResource.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-text leading-relaxed", children: featuredResource.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => router.visit(
                    route(
                      "resources.show",
                      featuredResource.slug
                    )
                  ),
                  className: "gradient-upstream text-white font-work-sans font-semibold",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-2 w-4 h-4" }),
                    "Download Free"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "outline",
                  className: "border-light-blue text-light-blue hover:bg-light-blue hover:text-white",
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "mr-2 w-4 h-4" }),
                    "View Details"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${featuredResource.thumbnail_path}`,
              alt: featuredResource.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: cardsRef,
          className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12",
          children: resources.map((resource, index) => /* @__PURE__ */ jsxs(
            Card,
            {
              className: "resource-card relative bg-light-blue/25 backdrop-blur-sm border border-gray-text/20 overflow-hidden hover:border-light-blue/50 transition-all duration-300 hover:scale-105 group cursor-pointer",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "aspect-square relative overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${resource.image}`,
                      alt: resource.title,
                      className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs bg-black/50 border-white/20 text-white backdrop-blur-sm",
                        children: resource.category.name
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        className: `text-xs ${resource.isPaid ? "bg-sunray/20 text-sunray border-sunray/30" : "bg-green-500/20 text-green-400 border-green-500/30"}`,
                        children: resource.isPaid ? "Pro" : "Free"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "sm",
                      onClick: () => router.visit(
                        route("resources.show", {
                          resource: resource.slug
                        })
                      ),
                      className: "bg-light-blue hover:bg-light-blue/80 text-white font-work-sans",
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 w-3 h-3" }),
                        "Download"
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-space-grotesk font-semibold text-white text-sm mb-2 line-clamp-2", children: resource.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-text text-xs mb-3 line-clamp-2", children: resource.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "sm",
                        onClick: () => router.visit(
                          route(
                            "resources.show",
                            resource.slug
                          )
                        ),
                        className: "flex-1 bg-light-blue/20 hover:bg-light-blue text-light-blue hover:text-white text-xs border border-light-blue/30",
                        children: "Download"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        className: "text-slate-text hover:gradient-upstream text-xs",
                        children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] })
              ]
            },
            resource.title
          ))
        }
      ),
      /* @__PURE__ */ jsx("div", { ref: ctaRef, className: "text-center", children: /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => router.visit(route("resources.index")),
          className: "gradient-upstream text-white font-work-sans font-semibold px-8 py-4 rounded-full hover-glow",
          children: [
            "View More Templates",
            /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 w-4 h-4" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: isModalOpen, onOpenChange: setIsModalOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "bg-card border-gray-text/20", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "text-white font-sora", children: [
        "Download ",
        selectedResource == null ? void 0 : selectedResource.title
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-slate-text font-work-sans mb-2", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "your@email.com",
              className: "bg-background/50 border-gray-text/30 text-midnight-blue"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleDownloadNow,
              className: "flex-1 gradient-upstream text-white font-work-sans font-semibold",
              children: [
                /* @__PURE__ */ jsx(Check, { className: "mr-2 w-4 h-4" }),
                "Download Now"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleSendEmail,
              variant: "outline",
              className: "flex-1 border-light-blue text-light-blue hover:bg-light-blue hover:text-white",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "mr-2 w-4 h-4" }),
                "Send to Email"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};
function Home({
  auth,
  laravelVersion,
  phpVersion
}) {
  const { props } = usePage();
  console.log("props", props);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-midnight-blue overflow-hidden", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(ToolsMarquee, {}),
      /* @__PURE__ */ jsx(ToolsSection, {}),
      " ",
      /* @__PURE__ */ jsx(WatchUsBuildSection, { videoUrl: "https://www.youtube.com/embed?v=dQw4w9WgXcQ" }),
      /* @__PURE__ */ jsx(
        ResourcesSection,
        {
          latest_resources: props.resources
        }
      ),
      /* @__PURE__ */ jsx(BenefitsSection, {}),
      /* @__PURE__ */ jsx(ProcessSection, {}),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { children: page });
export {
  Home as default
};
