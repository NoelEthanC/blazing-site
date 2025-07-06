import { useState, useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Card } from "@/Components/ui/card";
import {
    Download,
    FileText,
    Mail,
    Check,
    Bot,
    Workflow,
    Zap,
    Calendar,
    ExternalLink,
    Star,
    Video,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "gsap";
import { Resource } from "@/types";
import { Link, router } from "@inertiajs/react";
import ResourceGrid from "./ResourceGrid";

const ResourcesSection = ({
    latest_resources,
}: {
    latest_resources: Resource[];
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState<any>(null);
    const [email, setEmail] = useState("");
    const { toast } = useToast();

    // const featuredResource = {
    //     title: "Complete CRM Automation Suite",
    //     category: "CRM Integration",
    //     description:
    //         "Full customer relationship management automation with lead scoring, email sequences, and pipeline management. Includes 15+ pre-built workflows and AI-powered lead qualification.",
    //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    //     isPaid: false,
    //     isNew: true,
    //     fileUrl: "#",
    // };

    const featuredResource = latest_resources[0];
    //  || {
    //     title: "Complete CRM Automation Suite",
    //     category: "CRM Integration",
    //     description:
    //         "Full customer relationship management automation with lead scoring, email sequences, and pipeline management. Includes 15+ pre-built workflows and AI-powered lead qualification.",
    //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    //     isPaid: false,
    //     isNew: true,
    //     fileUrl: "#",
    // };

    const resources = latest_resources.slice(1).map((resource) => ({
        slug: resource.slug,
        title: resource.title,
        category: resource.category,
        description: resource.description,
        image: resource.thumbnail_path,
        icon: <FileText className="w-6 h-6 text-light-blue" />, // Placeholder icon
        isPaid: resource.resource_type === "pro",
        fileUrl: resource.file_url,
    }));

    // const resources = [
    //     {
    //         title: "Lead Generation Bot",
    //         category: "Lead Generation",
    //         description: "Automated lead capture and qualification system",
    //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    //         icon: <Bot className="w-6 h-6 text-light-blue" />,
    //         isPaid: false,
    //         fileUrl: "#",
    //     },
    //     {
    //         title: "Customer Onboarding Flow",
    //         category: "Customer Success",
    //         description: "Complete welcome series with progress tracking",
    //         image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop",
    //         icon: <Workflow className="w-6 h-6 text-sunray" />,
    //         isPaid: true,
    //         fileUrl: "#",
    //     },
    //     {
    //         title: "Social Media Scheduler",
    //         category: "Marketing",
    //         description: "Multi-platform content automation",
    //         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    //         icon: <Calendar className="w-6 h-6 text-light-blue" />,
    //         isPaid: false,
    //         fileUrl: "#",
    //     },
    //     {
    //         title: "Invoice Automation",
    //         category: "Finance",
    //         description: "Complete billing and payment reminders",
    //         image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
    //         icon: <Zap className="w-6 h-6 text-sunray" />,
    //         isPaid: true,
    //         fileUrl: "#",
    //     },
    //     {
    //         title: "Email Marketing Automation",
    //         category: "Marketing",
    //         description: "Advanced email sequences with triggers",
    //         image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=400&fit=crop",
    //         icon: <Mail className="w-6 h-6 text-light-blue" />,
    //         isPaid: false,
    //         fileUrl: "#",
    //     },
    //     {
    //         title: "Data Sync Workflow",
    //         category: "Integration",
    //         description: "Seamless data synchronization",
    //         image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=400&fit=crop",
    //         icon: <FileText className="w-6 h-6 text-sunray" />,
    //         isPaid: true,
    //         fileUrl: "#",
    //     },
    // ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("gsap/ScrollTrigger").then((mod) => {
                const ScrollTrigger = mod.default || mod.ScrollTrigger;
                gsap.registerPlugin(ScrollTrigger);

                const ctx = gsap.context(() => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    });

                    tl.from(titleRef.current, {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: "power3.out",
                    })
                        .from(
                            featuredRef.current,
                            {
                                opacity: 0,
                                y: 30,
                                duration: 0.6,
                                ease: "power3.out",
                            },
                            "-=0.4"
                        )
                        .from(
                            ".resource-card",
                            {
                                opacity: 0,
                                y: 30,
                                duration: 0.6,
                                ease: "power3.out",
                                stagger: 0.1,
                            },
                            "-=0.2"
                        )
                        .from(
                            ctaRef.current,
                            {
                                opacity: 0,
                                y: 20,
                                duration: 0.6,
                                ease: "power3.out",
                            },
                            "-=0.3"
                        );
                }, sectionRef);

                return () => ctx.revert();
            });
        }
    }, []);

    const handleDownloadClick = (resource: any) => {
        setSelectedResource(resource);
        setIsModalOpen(true);
    };

    return (
        <section id="resources" ref={sectionRef} className="py-28 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="font-sora font-bold text-4xl md:text-5xl text-white mb-6"
                    >
                        Download Our Latest{" "}
                        <span className="gradient-text">AI Workflows</span>
                    </h2>
                    <p className="font-inter text-xl text-slate-text max-w-3xl mx-auto">
                        Get instant access to our proven automation templates
                        and start building today.
                    </p>
                </div>

                {/* Featured Resource */}
                <div ref={featuredRef} className="mb-16">
                    <Card className="relative bg-light-blue/50 backdrop-blur-sm border border-light-blue/30 overflow-hidden group hover:border-light-blue/60 transition-all duration-500">
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-light-blue/10 rounded-full blur-xl opacity-60"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-sunray/20 text-sunray border-sunray/30">
                                        <Star className="w-3 h-3 mr-1" />
                                        Featured
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="border-gray-text/30 text-slate-text"
                                    >
                                        {featuredResource.category.name}
                                    </Badge>
                                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                        Free
                                    </Badge>
                                </div>
                                <div>
                                    <h3 className="font-space-grotesk font-bold text-2xl text-white mb-3">
                                        {featuredResource.title}
                                    </h3>
                                    <p className="text-slate-text leading-relaxed">
                                        {featuredResource.description}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <Button
                                        onClick={() =>
                                            router.visit(
                                                route(
                                                    "resources.show",
                                                    featuredResource.slug
                                                )
                                            )
                                        }
                                        className="gradient-upstream text-white font-work-sans font-semibold"
                                    >
                                        <Download className="mr-2 w-4 h-4" />
                                        Download Free
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-light-blue text-light-blue hover:bg-light-blue hover:text-white"
                                    >
                                        <a
                                            href={`#`}
                                            className="flex items-center"
                                        >
                                            <Video className="mr-2 w-4 h-4" />
                                            Watch Setup Guide
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={`/storage/${featuredResource.thumbnail_path}`}
                                        alt={featuredResource.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Resource Grid */}
                {/* <ResourceGrid /> */}

                {/* View More CTA */}
                <div ref={ctaRef} className="text-center">
                    <Button
                        onClick={() => router.visit(route("resources.index"))}
                        className="gradient-upstream text-white font-work-sans font-semibold px-8 py-4 rounded-full hover-glow"
                    >
                        View More Templates...
                        {/* <ExternalLink className="ml-2 w-4 h-4" /> */}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
