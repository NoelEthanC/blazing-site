import React from "react";
import { Card } from "../ui/card";
import { Badge, Download, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";

const ResourceGrid = ({ resources }: any) => {
    return (
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
                            src={`/storage/${resource.image}`}
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
                                {resource.category.name}
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
                                    router.visit(
                                        route("resources.show", {
                                            resource: resource.slug,
                                        })
                                    )
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
                                    router.visit(
                                        route("resources.show", resource.slug)
                                    )
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
    );
};

export default ResourceGrid;
