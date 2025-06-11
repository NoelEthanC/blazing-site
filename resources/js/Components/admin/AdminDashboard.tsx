"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { AnalyticsOverview } from "./AnalyticsOverview";
import { ContentManager } from "./ContentManager";
import { ToolsManager } from "./ToolsManager";
import { ResourcesManager } from "./ResourceManager";
import { BlogManager } from "./BlogManager";
import { LeadsManager } from "./LaedsManager";

export function AdminDashboard() {
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

                <Tabs defaultValue="overview" className="space-y-6">
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
                        <AnalyticsOverview />
                    </TabsContent>

                    <TabsContent value="content">
                        <ContentManager />
                    </TabsContent>

                    <TabsContent value="leads">
                        <LeadsManager />
                    </TabsContent>
                    <TabsContent value="tools">
                        <ToolsManager />
                    </TabsContent>

                    <TabsContent value="resources">
                        <ResourcesManager />
                    </TabsContent>

                    <TabsContent value="blog">
                        <BlogManager />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
