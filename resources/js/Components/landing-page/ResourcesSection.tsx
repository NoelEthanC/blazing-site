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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResourcesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState<any>(null);
    const [email, setEmail] = useState("");
    const { toast } = useToast();

    const featuredResource = {
        title: "Complete CRM Automation Suite",
        category: "CRM Integration",
        description:
            "Full customer relationship management automation with lead scoring, email sequences, and pipeline management. Includes 15+ pre-built workflows and AI-powered lead qualification.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        isPaid: false,
        isNew: true,
        fileUrl: "#",
    };

    const resources = [
        {
            title: "Lead Generation Bot",
            category: "Lead Generation",
            description: "Automated lead capture and qualification system",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
            icon: <Bot className="w-6 h-6 text-light-blue" />,
            isPaid: false,
            fileUrl: "#",
        },
        {
            title: "Customer Onboarding Flow",
            category: "Customer Success",
            description: "Complete welcome series with progress tracking",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop",
            icon: <Workflow className="w-6 h-6 text-sunray" />,
            isPaid: true,
            fileUrl: "#",
        },
        {
            title: "Social Media Scheduler",
            category: "Marketing",
            description: "Multi-platform content automation",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
            icon: <Calendar className="w-6 h-6 text-light-blue" />,
            isPaid: false,
            fileUrl: "#",
        },
        {
            title: "Invoice Automation",
            category: "Finance",
            description: "Complete billing and payment reminders",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
            icon: <Zap className="w-6 h-6 text-sunray" />,
            isPaid: true,
            fileUrl: "#",
        },
        {
            title: "Email Marketing Automation",
            category: "Marketing",
            description: "Advanced email sequences with triggers",
            image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=400&fit=crop",
            icon: <Mail className="w-6 h-6 text-light-blue" />,
            isPaid: false,
            fileUrl: "#",
        },
        {
            title: "Data Sync Workflow",
            category: "Integration",
            description: "Seamless data synchronization",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=400&fit=crop",
            icon: <FileText className="w-6 h-6 text-sunray" />,
            isPaid: true,
            fileUrl: "#",
        },
    ];

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play none none reverse",
    //             },
    //         });

    //         tl.from(titleRef.current, {
    //             opacity: 0,
    //             y: 50,
    //             duration: 0.8,
    //             ease: "power3.out",
    //         })
    //             .from(
    //                 featuredRef.current,
    //                 {
    //                     opacity: 0,
    //                     y: 30,
    //                     duration: 0.6,
    //                     ease: "power3.out",
    //                 },
    //                 "-=0.4"
    //             )
    //             .from(
    //                 ".resource-card",
    //                 {
    //                     opacity: 10,
    //                     y: 30,
    //                     duration: 0.6,
    //                     ease: "power3.out",
    //                     stagger: 0.1,
    //                 },
    //                 "-=0.2"
    //             )
    //             .from(
    //                 ctaRef.current,
    //                 {
    //                     opacity: 0,
    //                     y: 20,
    //                     duration: 0.6,
    //                     ease: "power3.out",
    //                 },
    //                 "-=0.3"
    //             );
    //     }, sectionRef);

    //     return () => ctx.revert();
    // }, []);

    const handleDownloadClick = (resource: any) => {
        setSelectedResource(resource);
        setIsModalOpen(true);
    };

    const handleDownloadNow = () => {
        console.log("Downloading:", selectedResource.title);
        toast({
            title: "Download Started",
            description: `${selectedResource.title} is being downloaded.`,
        });
        setIsModalOpen(false);
        setEmail("");
    };

    const handleSendEmail = () => {
        if (!email) {
            toast({
                title: "Email Required",
                description: "Please enter your email address.",
                variant: "destructive",
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
            description: `${selectedResource.title} has been sent to ${email}`,
        });
        setIsModalOpen(false);
        setEmail("");
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
                                        {featuredResource.category}
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
                                            handleDownloadClick(
                                                featuredResource
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
                                        <ExternalLink className="mr-2 w-4 h-4" />
                                        View Details
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={featuredResource.image}
                                        alt={featuredResource.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Resource Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
                >
                    {resources.map((resource, index) => (
                        <Card
                            key={resource.title}
                            className="resource-card relative bg-light-blue/25 backdrop-blur-sm border border-gray-text/20 overflow-hidden hover:border-light-blue/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-square relative overflow-hidden">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <Badge
                                        variant="outline"
                                        className="text-xs bg-black/50 border-white/20 text-white backdrop-blur-sm"
                                    >
                                        {resource.category}
                                    </Badge>
                                    <Badge
                                        className={`text-xs ${
                                            resource.isPaid
                                                ? "bg-sunray/20 text-sunray border-sunray/30"
                                                : "bg-green-500/20 text-green-400 border-green-500/30"
                                        }`}
                                    >
                                        {resource.isPaid ? "Pro" : "Free"}
                                    </Badge>
                                </div>

                                {/* Download Button Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button
                                        size="sm"
                                        onClick={() =>
                                            handleDownloadClick(resource)
                                        }
                                        className="bg-light-blue hover:bg-light-blue/80 text-white font-work-sans"
                                    >
                                        <Download className="mr-2 w-3 h-3" />
                                        Download
                                    </Button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-space-grotesk font-semibold text-white text-sm mb-2 line-clamp-2">
                                    {resource.title}
                                </h3>
                                <p className="text-slate-text text-xs mb-3 line-clamp-2">
                                    {resource.description}
                                </p>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        onClick={() =>
                                            handleDownloadClick(resource)
                                        }
                                        className="flex-1 bg-light-blue/20 hover:bg-light-blue text-light-blue hover:text-white text-xs border border-light-blue/30"
                                    >
                                        Download
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="text-slate-text hover:gradient-upstream text-xs"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* View More CTA */}
                <div ref={ctaRef} className="text-center">
                    <Button className="gradient-upstream text-white font-work-sans font-semibold px-8 py-4 rounded-full hover-glow">
                        View More Templates
                        <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-card border-gray-text/20">
                    <DialogHeader>
                        <DialogTitle className="text-white font-sora">
                            Download {selectedResource?.title}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-text font-work-sans mb-2">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="bg-background/50 border-gray-text/30 text-white"
                            />
                        </div>
                        <div className="flex gap-3">
                            <Button
                                onClick={handleDownloadNow}
                                className="flex-1 gradient-upstream text-white font-work-sans font-semibold"
                            >
                                <Check className="mr-2 w-4 h-4" />
                                Download Now
                            </Button>
                            <Button
                                onClick={handleSendEmail}
                                variant="outline"
                                className="flex-1 border-light-blue text-light-blue hover:bg-light-blue hover:text-white"
                            >
                                <Mail className="mr-2 w-4 h-4" />
                                Send to Email
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default ResourcesSection;
