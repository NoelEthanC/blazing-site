import { Card } from "@/Components/ui/card";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import {
    ArrowBigDown,
    BadgeDollarSign,
    Brain,
    Database,
    MonitorCog,
    ShieldAlert,
    ShieldCheck,
    Workflow,
} from "lucide-react";

const ToolsSection = () => {
    const tools = [
        {
            name: "Chatbots & AI Agents",
            description:
                "We build chatbots and AI agents that that integrates well with your systems",
            icon: Brain,
        },
        {
            name: "CRM & Sales Automation",
            description:
                "We automate your sales pipeline so you focus on closing, not chasing.",
            icon: BadgeDollarSign,
        },
        {
            name: "AI-Powered Business Systems",
            description:
                "Inject AI into your processes to automate decisions, replies, and insights.",
            icon: MonitorCog,
        },
        {
            name: "Custom Workflow Automation",
            description:
                "We design and build no-code automation workflows that save you hours every week.",
            icon: Workflow,
        },
        {
            name: "Airtable System Architecture",
            description:
                "Turn Airtable into a powerful backend with smart automations",
            icon: Database,
        },
        {
            name: " Audits & Strategy Calls",
            description:
                "We audit your processes and identify the best places to save time with automation",
            icon: ShieldAlert,
        },
    ];

    return (
        <section id="services" className="py-28 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
                        <span className="gradient-text">What We</span> Automate
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
