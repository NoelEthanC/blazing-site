import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MakeLogo from "/images/logos/Make-Logo.svg";
import Airtable from "/images/logos/airtable.png";
import Zapier from "/images/logos/zapier.png";
import Hubsport from "/images/logos/hubsport.png";
import N8nLogo from "/images/logos/n8n-logo.png";
import OpenaiLogo from "/images/logos/open-ai.png";
import Agent from "/images/workflow-1.png";
import Bot from "/images/bot-1.png";
const ToolsMarquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeInnerRef = useRef<HTMLDivElement>(null);

    const tools = [
        {
            name: "OpenAI",
            url: "https://openai.com",
            logo: "/images/logos/open-ai.png",
        },
        {
            name: "Make.com",
            url: "https://www.make.com",
            logo: "/images/logos/Make-Logo-RGB.svg",
        },
        {
            name: "Zapier",
            url: "https://www.zapier.com",
            logo: "/images/logos/zapier.png",
        },
        {
            name: "N8nLogo",
            url: "https://www.zapier.com",
            logo: "/images/logos/n8n-logo.png",
        },

        {
            name: "Airtable",
            url: "https://airtable.com",
            logo: "/images/logos/airtable.png",
        },
        {
            name: "Chatbots",
            url: "https://chatbots.com",
            logo: "/images/bot-1.png",
        },
        {
            name: "AI Agents",
            url: "https://aiagents.com",
            logo: "/images/workflow-1.png",
        },
        {
            name: "OpenAI",
            url: "https://openai.com",
            logo: "/images/logos/open-ai.png",
        },
        {
            name: "Make.com",
            url: "https://www.make.com",
            logo: "/images/logos/Make-Logo-RGB.svg",
        },
        {
            name: "Zapier",
            url: "https://www.zapier.com",
            logo: "/images/logos/zapier.png",
        },
        {
            name: "N8nLogo",
            url: "https://www.zapier.com",
            logo: "/images/logos/n8n-logo.png",
        },

        {
            name: "Airtable",
            url: "https://airtable.com",
            logo: "/images/logos/airtable.png",
        },
        {
            name: "Chatbots",
            url: "https://chatbots.com",
            logo: "/images/bot-1.png",
        },
        {
            name: "AI Agents",
            url: "https://aiagents.com",
            logo: "/images/workflow-1.png",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (marqueeInnerRef.current) {
                const marqueeWidth = marqueeInnerRef.current.scrollWidth / 2;

                gsap.to(marqueeInnerRef.current, {
                    x: -marqueeWidth,
                    duration: 30,
                    ease: "none",
                    repeat: -1,
                });
            }
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-12 overflow-hidden border-x border-gray-text/10 relative">
            {/* Fade overlays for left and right sides */}
            <div className="absolute left-0 top-0 w-72 h-full bg-gradient-to-r from-midnight-blue to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-72 h-full bg-gradient-to-l from-midnight-blue to-transparent z-10 pointer-events-none"></div>

            <div ref={marqueeRef} className="relative">
                <div
                    ref={marqueeInnerRef}
                    className="flex items-center gap-x-10 whitespace-nowrap"
                >
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="text-white/60 font-space-grotesk font-medium text-lg hover:text-light-blue transition-colors duration-300 cursor-default"
                        >
                            <img
                                src={tool.logo}
                                className="w-16 h-16 md:w-32 md:h-32 object-contain  filter  hover:grayscale-0 transition-all duration-300"
                                alt={`${tool.name} logo`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsMarquee;
