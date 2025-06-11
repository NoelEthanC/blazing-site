"use client";

import { useState, useEffect, useRef } from "react";

import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/landing-page/Navbar";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    summary: string;
    cover_image_url: string;
    tags: string[];
    created_at: string;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        if (posts.length > 0 && typeof window !== "undefined") {
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
    }, [posts]);

    const fetchPosts = async () => {
        try {
            const response = await fetch("/api/blog");
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
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
                            Our{" "}
                            <span className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h1>
                        <p className="text-xl text-[#cbd5e1] max-w-2xl mx-auto">
                            Insights, tutorials, and best practices for
                            automation and AI workflows
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <Card
                                key={post.id}
                                ref={addToRefs}
                                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={
                                                post.cover_image_url ||
                                                "/placeholder.svg?height=200&width=400"
                                            }
                                            alt={post.title}
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {post.tags
                                                .slice(0, 2)
                                                .map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className="bg-[#3f79ff]/20 text-[#3f79ff] hover:bg-[#3f79ff]/30"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3f79ff] transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-[#cbd5e1] mb-4 line-clamp-3">
                                            {post.summary}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#cbd5e1]">
                                                {new Date(
                                                    post.created_at
                                                ).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                            <span className="text-[#3f79ff] group-hover:text-[#fcbf5b] transition-colors">
                                                Read more →
                                            </span>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-[#cbd5e1] text-lg">
                                No blog posts available yet.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
