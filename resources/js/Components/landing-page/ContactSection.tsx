import { useState, useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, ArrowRight, Clock } from "lucide-react";
import { gsap } from "gsap";
import { router } from "@inertiajs/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const calendlyRef = useRef<HTMLDivElement>(null);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

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
                            formRef.current,
                            {
                                opacity: 0,
                                y: 30,
                                duration: 0.8,
                                ease: "power3.out",
                            },
                            "-=0.4"
                        )
                        .from(
                            calendlyRef.current,
                            {
                                opacity: 0,
                                y: 30,
                                duration: 0.8,
                                ease: "power3.out",
                            },
                            "-=0.6"
                        );
                }, sectionRef);

                return () => ctx.revert();
            });
        }
    }, []);

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     await new Promise((resolve) => setTimeout(resolve, 1000));

    //     console.log("Form submitted:", { name, email, message });

    //     toast({
    //         title: "Thanks for reaching out!",
    //         description: "We'll get back to you within 24 hours.",
    //     });

    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //     setIsSubmitting(false);
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        router.post(
            route("home.sendEmail"), // Make sure this matches your named route
            { name, email, message },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                onError: (errors) => {
                    toast({
                        title: "Error",
                        description: "Please check your input and try again.",
                        variant: "destructive",
                    });
                },
                onFinish: () => setIsSubmitting(false),
            }
        );
    };

    const handleCalendlyClick = () => {
        window.open("https://calendly.com/noelethan-ch/30min", "_blank");
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-28 px-4 bg-gradient-to-t from-card/50 to-background"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="font-sora font-bold text-4xl md:text-6xl text-white mb-6"
                    >
                        <span className="gradient-text">Ready to</span>{" "}
                        Transform Your Business?
                    </h2>
                    <p className="font-inter text-xl text-slate-text max-w-3xl mx-auto mb-8">
                        Book a free consultation and discover how automation can
                        10x your productivity. No commitment, no sales pitch -
                        just pure value.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Calendly Booking */}
                    <div
                        ref={calendlyRef}
                        className="bg-light-blue/40 backdrop-blur-sm border border-gray-text/20 rounded-2xl p-8"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Calendar className="w-8 h-8 text-light-blue" />
                            </div>
                            <h3 className="font-sora font-bold text-2xl text-white mb-4">
                                📆 Book a 1-on-1 Automation Strategy Call
                            </h3>
                            <p className="font-inter text-slate-text mb-8">
                                Choose a time that works for you and let's plan
                                your automation journey.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-center text-slate-text">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span className="text-sm">
                                        30-minute strategy session
                                    </span>
                                </div>
                                <div className="flex items-center justify-center text-slate-text">
                                    <span className="text-sm">
                                        ✅ Free consultation
                                    </span>
                                </div>
                                <div className="flex items-center justify-center text-slate-text">
                                    <span className="text-sm">
                                        🎯 Personalized automation roadmap
                                    </span>
                                </div>
                            </div>

                            <Button
                                onClick={handleCalendlyClick}
                                className="gradient-upstream text-white font-work-sans font-bold text-lg px-8 py-4 rounded-full hover-glow group transition-all duration-300 w-full"
                            >
                                <Calendar className="mr-2 w-5 h-5" />
                                Schedule Your Call
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <p className="text-gray-text text-sm mt-4">
                                No sales pitch - just valuable insights for your
                                business
                            </p>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div
                        ref={formRef}
                        className="bg- backdrop-blur-sm  border-gray-text/20 rounded-2xl p-8"
                    >
                        <h3 className="font-sora font-bold text-2xl text-white mb-6">
                            Send us a message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-white font-work-sans font-medium mb-2"
                                    >
                                        Your Name *
                                    </label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                        className="bg-background/50 border-gray-text/30 text-white placeholder:text-gray-text focus:border-light-blue"
                                        placeholder="John Smith"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-white font-work-sans font-medium mb-2"
                                    >
                                        Business Email *
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        className="bg-background/50 border-gray-text/30 text-white placeholder:text-gray-text focus:border-light-blue"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-white font-work-sans font-medium mb-2"
                                >
                                    What would you like to automate? *
                                </label>
                                <Textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={4}
                                    className="bg-background/50 border-gray-text/30 text-white placeholder:text-gray-text focus:border-light-blue resize-none"
                                    placeholder="Tell us about your biggest time-wasters, manual processes, or automation goals..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="border border-light-blue/50 hover:border-light-blue hover:bg-midnight-blue bg-midnight-blue  text-white font-work-sans font-semibold text-lg px-8 py-4 rounded-full hover-glow group transition-all duration-300 w-full"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Mail className="mr-2 w-5 h-5" />
                                        Send Message
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* <div className="mt-12 text-center">
                    <p className="text-slate-text text-sm mb-4">
                        Prefer to email us directly?
                    </p>
                    <Button
                        variant="ghost"
                        className="text-light-blue hover:text-sunray transition-colors"
                        onClick={() =>
                            window.open(
                                "mailto:hello@blazingautomations.com",
                                "_blank"
                            )
                        }
                    >
                        hello@blazingautomations.com →
                    </Button>
                </div> */}
            </div>
        </section>
    );
};

export default ContactSection;
