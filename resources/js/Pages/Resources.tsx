"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Badge } from "@/Components/ui/badge";
import { Download, Mail, Play, FileText } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/Components/landing-page/Navbar";
import { resourcesData } from "@/lib/data";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface Resource {
    id: string;
    title: string;
    description: string;
    file_url: string;
    category: string;
    tags: string[];
    download_count: number;
    tool_used: string;
    guide_url: string;
    video_url: string;
    thumbnail_url: string;
    resource_type: string;
}

export default function ResourcesPage() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [selectedResource, setSelectedResource] = useState<Resource | null>(
        null
    );
    const [email, setEmail] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // fetchResources();
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
                                y: 50,
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
                                    toggleActions: "play none none reverse",
                                },
                            }
                        );
                    }
                });
            });

            return () => ctx.revert();
        }
    }, [resources]);

    const fetchResources = async () => {
        try {
            const response = await fetch("/api/resources");
            if (response.ok) {
                // const data = await response.json();
                setResources(resourcesData); // Use static data for now
            }
        } catch (error) {
            console.error("Error fetching resources:", error);
        }
    };

    const handleDownloadClick = (resource: Resource) => {
        setSelectedResource(resource);
        setIsDialogOpen(true);
        setIsSubmitted(false);
        setEmail("");
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedResource) return;

        try {
            const response = await fetch("/api/resources/download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    resourceId: selectedResource.id,
                    email: email,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error("Error submitting email:", error);
        }
    };

    const handleDirectDownload = () => {
        if (selectedResource?.file_url) {
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
                    email: email,
                }),
            });

            setIsDialogOpen(false);
            alert("Resource sent to your email!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div className="min-h-screen bg-[#09111f]">
            <Navbar />

            <div className="pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Free{" "}
                            <span className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent">
                                Resources
                            </span>
                        </h1>
                        <p className="text-xl text-[#cbd5e1] max-w-2xl mx-auto">
                            Download our automation workflows, AI agents, and
                            templates to supercharge your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <Card
                                key={resource.id}
                                ref={addToRefs}
                                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                            >
                                {/* Resource Image/Thumbnail */}
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={
                                            resource.thumbnail_url ||
                                            "/placeholder.svg?height=200&width=400"
                                        }
                                        alt={resource.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <Badge
                                            variant={
                                                resource.resource_type ===
                                                "Free"
                                                    ? "secondary"
                                                    : "default"
                                            }
                                            className={
                                                resource.resource_type ===
                                                "Free"
                                                    ? "bg-green-500/80 text-white"
                                                    : "bg-yellow-500/80 text-black"
                                            }
                                        >
                                            {resource.resource_type}
                                        </Badge>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <Badge
                                            variant="secondary"
                                            className="bg-[#3f79ff]/80 text-white"
                                        >
                                            {resource.tool_used}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge
                                            variant="outline"
                                            className="border-white/20 text-[#cbd5e1]"
                                        >
                                            {resource.category}
                                        </Badge>
                                        <div className="flex items-center text-[#cbd5e1] text-sm">
                                            <Download className="h-4 w-4 mr-1" />
                                            {resource.download_count}
                                        </div>
                                    </div>
                                    <CardTitle className="text-white group-hover:text-[#3f79ff] transition-colors">
                                        {resource.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#cbd5e1] mb-4 line-clamp-3">
                                        {resource.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {resource.tags
                                            .slice(0, 3)
                                            .map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="border-white/20 text-[#cbd5e1] text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-2">
                                        <Button
                                            onClick={() =>
                                                handleDownloadClick(resource)
                                            }
                                            className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            Download
                                        </Button>

                                        <div className="flex gap-2">
                                            {resource.video_url && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        window.open(
                                                            resource.video_url,
                                                            "_blank"
                                                        )
                                                    }
                                                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                                                >
                                                    <Play className="h-4 w-4 mr-1" />
                                                    Video
                                                </Button>
                                            )}
                                            {resource.guide_url && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        window.open(
                                                            resource.guide_url,
                                                            "_blank"
                                                        )
                                                    }
                                                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                                                >
                                                    <FileText className="h-4 w-4 mr-1" />
                                                    Guide
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {resources.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-[#cbd5e1] text-lg">
                                No resources available yet.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Download Modal */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-[#09111f] border-white/10">
                    <DialogHeader>
                        <DialogTitle className="text-white">
                            {isSubmitted
                                ? "Choose Download Option"
                                : "Get Your Free Resource"}
                        </DialogTitle>
                    </DialogHeader>

                    {!isSubmitted ? (
                        <form
                            onSubmit={handleEmailSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {selectedResource?.title}
                                </h3>
                                <p className="text-[#cbd5e1] mb-4">
                                    Enter your email to download this resource
                                </p>
                            </div>

                            <div>
                                <Label htmlFor="email" className="text-white">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                Continue
                            </Button>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <p className="text-[#cbd5e1]">
                                How would you like to receive your resource?
                            </p>

                            <div className="grid grid-cols-1 gap-3">
                                <Button
                                    onClick={handleDirectDownload}
                                    className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Now
                                </Button>

                                <Button
                                    onClick={handleEmailDownload}
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10"
                                >
                                    <Mail className="h-4 w-4 mr-2" />
                                    Send to Email
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
