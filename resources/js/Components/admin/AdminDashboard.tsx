"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { AnalyticsOverview } from "./AnalyticsOverview";
import { ContentManager } from "./ContentManager";
import { ToolsManager } from "./ToolsManager";
import ResourcesManager from "./ResourceManager";
import { BlogManager } from "./BlogManager";
import { LeadsManager } from "./LaedsManager";
import { router, Deferred } from "@inertiajs/react";

export function AdminDashboard({
    overview,
    resources,
    leads,
    tools,
    blogPosts,
    reloadTab,
}: any) {
    return (
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
                    defaultValue="overview"
                    onValueChange={(tab: string) => {
                        router.reload({
                            only: [tab, "categories"],
                            data: { tab },
                        });
                    }}
                    className="space-y-6"
                >
                    <TabsList className="bg-white/5 border-white/10">
                        <TabsTrigger
                            value="overview"
                            className="text-white data-[state=active]:bg-[#3f79ff]"
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
                        <TabsTrigger
                            value="tools"
                            className="text-white data-[state=active]:bg-[#3f79ff]"
                        >
                            Tools
                        </TabsTrigger>
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

                    <TabsContent value="overview">
                        <AnalyticsOverview data={overview} />
                    </TabsContent>

                    <TabsContent value="content">
                        <Deferred
                            data={["content"]}
                            fallback={<div>Loading content...</div>}
                        >
                            <ContentManager />
                        </Deferred>
                    </TabsContent>

                    <TabsContent value="leads">
                        <Deferred
                            data={["leads"]}
                            fallback={<div>Loading leads...</div>}
                        >
                            <LeadsManager />
                        </Deferred>
                    </TabsContent>
                    <TabsContent value="tools">
                        <Deferred
                            data={["tools"]}
                            fallback={<div>Loading tools...</div>}
                        >
                            <ToolsManager />
                        </Deferred>
                    </TabsContent>

                    <TabsContent value="resources">
                        <Deferred
                            data={["resources"]}
                            fallback={<div>Loading resources...</div>}
                        >
                            <ResourcesManager />
                        </Deferred>
                    </TabsContent>

                    <TabsContent value="blog">
                        <Deferred
                            data={["blog"]}
                            fallback={<div>Loading blog...</div>}
                        >
                            <BlogManager />
                        </Deferred>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
