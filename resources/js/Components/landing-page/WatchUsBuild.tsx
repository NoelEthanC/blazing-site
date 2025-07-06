import { useEffect, useRef, useState } from "react";
import { Button } from "@/Components/ui/button";
import { Youtube, Play } from "lucide-react";
import { gsap } from "gsap";
import YouTube from "react-youtube";
import { Link } from "@inertiajs/react";

interface WatchUsBuildSectionProps {
    videoUrl: string;
}

const WatchUsBuildSection = ({ videoUrl }: WatchUsBuildSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const [playVideo, setPlayVideo] = useState(false);

    const getYouTubeEmbedUrl = (url: string) => {
        const match = url.match(
            /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]{11})/
        );
        return match
            ? `https://www.youtube.com/embed/${match[1]}?autoplay=1`
            : "";
    };

    const embedUrl = getYouTubeEmbedUrl(videoUrl);

    useEffect(() => {
        // Only run on the client
        if (typeof window !== "undefined") {
            // Dynamically import ScrollTrigger for SSR safety
            import("gsap/ScrollTrigger").then((mod) => {
                const ScrollTrigger = mod.default || mod.ScrollTrigger;

                gsap.registerPlugin(ScrollTrigger);

                // You can add your animations here
                gsap.from(titleRef.current, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                });

                ScrollTrigger.refresh();
            });
        }
    }, []);

    return (
        <section
            id="watch-us-build"
            ref={sectionRef}
            className="py-28 px-4 bg-gradient-to-b from-background to-card/30"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="font-sora font-bold text-4xl md:text-5xl text-white mb-4"
                    >
                        <span className="gradient-text">Watch Us</span> Build
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div ref={textRef} className="space-y-6">
                        <div>
                            <p className="font-inter text-lg text-slate-text mb-4">
                                See how we build powerful automations — join
                                100+ other smart subscribers.
                            </p>
                            <p className="font-inter text-slate-text">
                                We show our real automation projects
                                step-by-step on our
                                <span className="text-light-blue font-semibold">
                                    {" "}
                                    Blazing Automations YouTube channel{" "}
                                </span>
                                so you can learn and trust our process.
                            </p>
                        </div>

                        <div ref={buttonRef}>
                            <a
                                href="https://www.youtube.com/@BlazingAutomations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-upstream text-center text-white font-work-sans flex font-semibold px-8 py-4 w-fit text-xl  rounded-full hover-glow group transition-all duration-300 items-center"
                            >
                                <Youtube className="mr-2 w-5 h-5" />
                                Subscribe To Our Channel
                                <span className="ml-2 bg-white/20 px-3 py-1 rounded-full text-sm text-green-700">
                                    FREE
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Video Content */}
                    <div ref={videoRef} className="relative">
                        {!playVideo ? (
                            <div
                                onClick={() => setPlayVideo(true)}
                                className="relative bg-card/20 backdrop-blur-sm border border-gray-text/20 rounded-xl overflow-hidden group cursor-pointer hover:border-light-blue/50 transition-all duration-300"
                            >
                                <YouTube
                                    videoId={"9tvUSxXrKnA"}
                                    options={{
                                        height: "400",
                                        width: "640",
                                        playerVars: { autoplay: 1, volume: 50 },
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="aspect-video rounded-xl overflow-hidden border border-gray-text/20">
                                <iframe
                                    src={embedUrl}
                                    className="w-full h-full"
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WatchUsBuildSection;
