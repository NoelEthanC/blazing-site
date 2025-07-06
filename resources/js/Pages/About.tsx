"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import Navbar from "@/Components/landing-page/Navbar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

interface AboutContent {
    mission_title: string;
    mission_content: string;
    team_title: string;
    team_content: string;
    team_image_url: string;
}

export default function AboutPage() {
    const [content, setContent] = useState<AboutContent>({
        mission_title: "Our Mission",
        mission_content:
            "At Blazing Automations, we believe every business deserves to operate at peak efficiency.",
        team_title: "Meet the Team",
        team_content:
            "Our team of automation experts combines technical expertise with business acumen.",
        team_image_url: "",
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
        { name: "Anthropic", icon: "🧠" },
    ];

    return (
        <GuestLayout>
            <Head>
                <title>About Blazing Automations – Our Mission and Story</title>
                <meta
                    name="description"
                    content="Blazing Automations was built to help people automate smarter and build faster. Learn about our story, our mission, and the brains behind the systems."
                />
            </Head>

            <div className="min-h-screen bg-[#09111f]">
                <div className="pt-24 pb-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                About{" "}
                                <span className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent">
                                    Us
                                </span>
                            </h1>
                            <p className="text-xl text-[#cbd5e1] max-w-2xl mx-auto">
                                We're passionate about helping businesses unlock
                                their potential through intelligent automation
                            </p>
                        </div>

                        {/* Mission Section */}
                        <Card className="bg-white/5 border-white/10 mb-16">
                            <CardContent className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    {content.mission_title}
                                </h2>
                                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                                    {content.mission_content}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Team Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    {content.team_title}
                                </h2>
                                <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
                                    {content.team_content}
                                </p>
                                <p className="text-[#cbd5e1]">
                                    With years of experience in automation, AI,
                                    and business process optimization, we're
                                    here to transform how you work and help you
                                    achieve more with less effort.
                                </p>
                            </div>
                            <div className="relative">
                                {content.team_image_url ? (
                                    <img
                                        src={
                                            content.team_image_url ||
                                            "/placeholder.svg"
                                        }
                                        alt="Our Team"
                                        width={500}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                ) : (
                                    <div className="aspect-[5/4] bg-gradient-to-br from-[#ca6678]/20 to-[#fcbf5b]/20 rounded-lg flex items-center justify-center">
                                        <p className="text-[#cbd5e1]">
                                            Team photo coming soon
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tools Section */}
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                                    Tools We{" "}
                                    <span className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent">
                                        Master
                                    </span>
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                    {tools.map((tool) => (
                                        <div
                                            key={tool.name}
                                            className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                        >
                                            <div className="text-3xl mb-2">
                                                {tool.icon}
                                            </div>
                                            <p className="text-[#3f79ff] font-medium">
                                                {tool.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
