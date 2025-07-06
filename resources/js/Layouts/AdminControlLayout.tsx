"use client";
import { AnalyticsOverview } from "@/Components/admin/AnalyticsOverview";
import { BlogManager } from "@/Components/admin/BlogManager";
import { ContentManager } from "@/Components/admin/ContentManager";
import { LeadsManager } from "@/Components/admin/LaedsManager";
import ResourcesManager from "@/Components/admin/ResourceManager";
import { ToolsManager } from "@/Components/admin/ToolsManager";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { router, Deferred, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export function AdminControlLayout({
    overview,
    resources,
    leads,
    tools,
    blogPosts,
    reloadTab,
    children,
}: any) {
    // const { auth, flash } = usePage().props;
    const { props, url }: any = usePage();
    const { auth, flash } = props;
    const { toast } = useToast();
    const defaultTab = url.split("/").pop() || "overview";

    useEffect(() => {
        if (flash.success) {
            toast({
                title: `${flash?.success}`,
            });
            flash.success = null; // Clear flash after showing
        }
    }, [flash, toast]);

    const [value, setValue] = useState<any>("overview");
    return (
        <>
            <Toaster />
            <div className="min-h-screen bg-[#09111f] p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Admin Dashboard
                        </h1>
                        <p className="text-[#cbd5e1]">
                            Manage your website content and settings
                        </p>
                    </div>

                    <Tabs
                        defaultValue={defaultTab}
                        onValueChange={(tab: string) => {
                            // Reload the page when switching tabs
                            setValue(tab);
                            if (tab === "overview") {
                                router.visit(route("admin.overview"), {
                                    preserveState: true,
                                });
                                return;
                            }
                            router.visit(route(`admin.${tab}.index`), {
                                preserveState: true,
                            });
                        }}
                        className="space-y-6"
                    >
                        <TabsList className="bg-white/5 border-white/10">
                            <TabsTrigger
                                value="overview"
                                className="text-white data-[state=active]:bg-[#469cf3]"
                            >
                                Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="content"
                                className="text-white data-[state=active]:bg-[#3f79ff]"
                            >
                                Content
                            </TabsTrigger>
                            <TabsTrigger
                                value="leads"
                                className="text-white data-[state=active]:bg-[#3f79ff]"
                            >
                                Leads
                            </TabsTrigger>
                            {/* <TabsTrigger
                                value="tools"
                                className="text-white data-[state=active]:bg-[#3f79ff]"
                            >
                                Tools
                            </TabsTrigger> */}
                            <TabsTrigger
                                value="resources"
                                className="text-white data-[state=active]:bg-[#3f79ff]"
                            >
                                Resources
                            </TabsTrigger>
                            <TabsTrigger
                                value="blog"
                                className="text-white data-[state=active]:bg-[#3f79ff]"
                            >
                                Blog
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value={value}>{children}</TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
