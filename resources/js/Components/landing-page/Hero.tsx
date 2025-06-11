import { useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import { ArrowRight, Play, PlayCircle, Star, Video } from "lucide-react";
import { gsap } from "gsap";
import { cn, handleLinkClick } from "@/lib/utils";
import ToolsMarquee from "./ToolsMarquee";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const trustpilotRef = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLDivElement>(null);
    const rightImageRef = useRef<HTMLDivElement>(null);
    const leftArrowRef = useRef<HTMLDivElement>(null);
    const rightArrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(
                [
                    titleRef.current,
                    subtitleRef.current,
                    buttonsRef.current,
                    statsRef.current,
                    trustpilotRef.current,
                ],
                {
                    opacity: 0,
                    y: 50,
                }
            );

            gsap.set([leftImageRef.current, rightImageRef.current], {
                opacity: 0,
                scale: 0.8,
                y: 20,
            });

            gsap.set([leftArrowRef.current, rightArrowRef.current], {
                opacity: 0,
                x: 0,
            });

            // Create timeline
            const tl = gsap.timeline({ delay: 0.5 });

            tl.to(trustpilotRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
                .to(
                    titleRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .to(
                    [leftImageRef.current, rightImageRef.current],
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.2,
                    },
                    "-=0.6"
                )
                .to(
                    [leftArrowRef.current, rightArrowRef.current],
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.1,
                    },
                    "-=0.4"
                )
                .to(
                    subtitleRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6"
                )
                .to(
                    buttonsRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .to(
                    statsRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );

            // Floating animation for decorative elements and images
            gsap.to(".floating-dot", {
                y: -10,
                duration: 2,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.2,
            });

            // Arrow pulsing animation
            gsap.to([leftArrowRef.current, rightArrowRef.current], {
                scale: 1.1,
                duration: 1.5,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.3,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleBookConsultation = () => {
        console.log("Book consultation clicked");
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden"
        >
            <div
                className={cn(
                    "absolute inset-0  z-0 opacity-5",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-midnight-blue [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] "></div>
            {/* Decorative floating dots */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="floating-dot absolute  top-10 -left-60 w-full rotate-45  h-40 bg-gradient-to-r blur-3xl from-white/70 to-midnight-blue rounded-full opacity-70"></div>
                <div className="floating-dot absolute  top-20 left-10 w-2 h-2 bg-sunray rounded-full opacity-70"></div>
                <div className="floating-dot absolute top-40 right-20 w-3 h-3 bg-light-blue rounded-full opacity-20"></div>
                <div className="floating-dot absolute bottom-40 left-20 w-2 h-2 bg-sunray rounded-full opacity-25"></div>
                <div className="floating-dot absolute top-60 left-1/2 w-1 h-1 bg-light-blue rounded-full opacity-40"></div>
                <div className="floating-dot absolute bottom-60 right-10 w-2 h-2 bg-sunray rounded-full opacity-30"></div>
            </div>

            {/* Left suspended image with arrow */}
            <div className="absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div ref={leftImageRef} className="relative">
                    <div className="w-48 h-32 bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-lg p-4 shadow-lg">
                        <div className="w-full h-full bg-gradient-to-br from-light-blue/35 to-sunray/35 rounded flex items-center justify-center">
                            <img
                                src="/images/workflow-1.png"
                                className="w-[60%] h-[60%] opacity-80 object-contain  absolute  transform "
                            />
                        </div>
                    </div>
                </div>
                <div
                    ref={leftArrowRef}
                    className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                >
                    <ArrowRight className="w-6 h-6 text-sunray" />
                </div>
            </div>

            {/* Right suspended image with arrow */}
            <div className="absolute right-8 lg:right-8 top-52 transform -translate-y-1/2 hidden lg:block">
                <div
                    ref={rightArrowRef}
                    className="absolute -left-8 top-1/2 transform -translate-y-1/2 rotate-180"
                >
                    <ArrowRight className="w-6 h-6 text-sunray" />
                </div>
                <div ref={rightImageRef} className="relative">
                    <div className="w-48 h-32 bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-lg p-4 shadow-lg">
                        <div className="w-full h-full bg-gradient-to-br from-sunray/20 to-light-blue/20 rounded flex items-center justify-center">
                            {/* <div className="text-4xl">⚡</div> */}
                            <img
                                src="/images/bot-1.png"
                                className="w-[50%] h-[50%] opacity-40 object-contain  absolute  transform "
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-30">
                {/* Trustpilot-style rating */}
                <div
                    ref={trustpilotRef}
                    className="flex items-center justify-center mb-3"
                >
                    <div className="bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-full px-6 py-2 flex items-center space-x-3">
                        <span className="text-xs font-work-sans font-semibold text-white">
                            AI
                        </span>
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-2.5 h-2.5 fill-sunray text-sunray"
                                />
                            ))}
                        </div>
                        <span className="text-xs font-work-sans text-slate-text">
                            AUTOMATIONS EXPERT
                        </span>
                    </div>
                </div>

                {/* Main headline */}
                <h1
                    ref={titleRef}
                    className="font-sora font-bold text-4xl lg:w-2/3 text-center  mx-auto md:text-balance md:text-6xl lg:text-7xl leading-tight mb-6"
                >
                    <span className="gradient-text">Blazing</span>{" "}
                    <span className="text-white">Fast Automations </span>
                    {/* <br /> */}
                    <span className="text-white">For your </span> <br />
                    {/* <span className="text-white">Blaze with</span>{" "} */}
                    <span className="gradient-text">Business</span>
                </h1>

                {/* Subtitle */}
                <div ref={subtitleRef} className="space-y-4 mb-12">
                    {/* <p className="font-inter text-xl md:text-2xl text-slate-text max-w-4xl mx-auto">
                        From Manual to Magical – With AI & No-Code
                    </p> */}
                    <p className="font-inter text-lg text-gray-text max-w-2xl mx-auto">
                        Let's turn your repetitive tasks into smart AI-driven
                        workflows using no-code tools like{" "}
                        <span className="font-bold">
                            n8n, Make, and Zapier!
                        </span>
                    </p>
                </div>

                {/* CTA Buttons */}
                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <Button
                        onClick={() => handleLinkClick("contact")}
                        className="gradient-upstream text-white font-work-sans font-bold text-lg px-12 py-6 rounded-full hover-glow group transition-all duration-300 text-center"
                    >
                        Book Consultation Now
                    </Button>
                    <Button
                        onClick={() => handleLinkClick("watch-us-build")}
                        className=" text-light-blue bg-transparent hover:bg-light-blue/25 font-work-sans font-bold text-lg px-12 py-6 rounded-full hover-glow group transition-all duration-300 text-center"
                    >
                        <PlayCircle className="mr-2 w-5 h-5" />
                        Watch Us Build
                    </Button>
                    {/* <div className="flex items-center space-x-4">
                        <div className="text-left">
                            <p className="text-white font-work-sans font-semibold">
                                Book a Consultation Call
                            </p>
                            <p className="text-slate-text text-sm">Its Free!</p>
                        </div>
                        <ArrowRight className="text-sunray w-6 h-6" />
                    </div> */}
                </div>

                {/* Stats */}
                <div
                    ref={statsRef}
                    className=" hidden lg:flex  bottom-14 lg:absolute lg:right-0 justify-center"
                >
                    <div className="text-center mx-6">
                        <div className="text-4xl font-sora font-bold text-white">
                            50+
                        </div>
                        <div className="text-slate-text font-work-sans">
                            Automations & Chatbots
                        </div>
                    </div>
                </div>
                {/* <ToolsMarquee /> */}
            </div>
        </section>
    );
};

export default Hero;
