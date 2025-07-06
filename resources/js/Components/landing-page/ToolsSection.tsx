import { Card } from "@/Components/ui/card";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import {
    ArrowBigDown,
    BadgeDollarSign,
    Brain,
    Database,
    Globe,
    LayoutDashboard,
    MonitorCog,
    Plug,
    ScanSearch,
    ShieldAlert,
    ShieldCheck,
    Workflow,
} from "lucide-react";

const ToolsSection = () => {
    const tools = [
        {
            name: "Chatbots & AI Agents",
            description:
                "We develop task-specific AI agents and conversational chatbots that integrate seamlessly with your tools, APIs, and workflows.",
            icon: Brain,
        },
        {
            name: "Business Websites",
            description:
                "We design and build responsive, fast, and SEO-ready websites that communicate your brand and convert visitors to clients.",
            icon: Globe,
        },
        {
            name: "Automated AI Workflows",
            description:
                "We design end-to-end automations using tools like n8n to streamline repetitive tasks, connect apps, and scale operations efficiently.",
            icon: Workflow,
        },
        {
            name: "AI-Powered Data Systems",
            description:
                "We create intelligent systems that use AI for document processing, contextual search (RAG), classification, and decision support.",
            icon: ScanSearch,
        },
        {
            name: "Custom Web Applications",
            description:
                "We build scalable web apps using Laravel, React, and Supabase — tailored for dashboards, portals, or SaaS platforms.",
            icon: LayoutDashboard,
        },
        {
            name: "API Integrations",
            description:
                "We connect third-party services and internal APIs to your app with secure, well-documented, and scalable integration logic.",
            icon: Plug,
        },
    ];
    return (
        <section id="services" className="py-28 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
                        <span className="gradient-text">What We</span> Build
                    </h2>
                    <p className="font-inter text-xl text-slate-text max-w-3xl mx-auto">
                        We're experts with the world's most powerful automation
                        tools. Let us build your custom workflow ecosystem.
                    </p>
                </div>
                {/* <OrbitingCirclesDemo /> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <Card
                            key={tool.name}
                            className="relative bg-midnight-blue/50 border border-light-blue/20 p-6 hover:border-light-blue/60 transition-all duration-300 hover:scale-105 group animate-fade-in-up overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Blue glow effect from bottom right */}
                            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-light-blue/20 rounded-full blur-xl opacity-0 opacity-60 transition-opacity duration-500"></div>
                            {/* <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-light-blue/30 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div> */}

                            <div className="text-center relative z-10">
                                <div className="text-4xl  mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <tool.icon className="w-8 h-8 mx-auto text-light-blue/70 group-hover:text-light-blue" />
                                </div>
                                <h3 className="font-space-grotesk font-bold text-xl text-white mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-slate-text">
                                    {tool.description}
                                </p>
                                <div className="mt-4 w-full h-1 bg-gray-text/20 rounded">
                                    <div
                                        className="h-full bg-light-blue/70 rounded transition-all duration-1000 group-hover:w-full"
                                        style={{ width: "100%" }}
                                    ></div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
