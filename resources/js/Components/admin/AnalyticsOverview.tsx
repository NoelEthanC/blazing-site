"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Download, Users, FileText, Eye } from "lucide-react";

interface AnalyticsData {
    totalDownloads: number;
    totalEmails: number;
    totalPosts: number;
    totalViews: number;
    recentDownloads: Array<{
        resource_title: string;
        email: string;
        submitted_at: string;
    }>;
}

export function AnalyticsOverview() {
    const [analytics, setAnalytics] = useState<AnalyticsData>({
        totalDownloads: 0,
        totalEmails: 0,
        totalPosts: 0,
        totalViews: 0,
        recentDownloads: [],
    });

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const response = await fetch("/api/admin/analytics");
            if (response.ok) {
                const data = await response.json();
                setAnalytics(data);
            }
        } catch (error) {
            console.error("Error fetching analytics:", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/5 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white">
                            Total Downloads
                        </CardTitle>
                        <Download className="h-4 w-4 text-[#3f79ff]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {analytics.totalDownloads}
                        </div>
                        <p className="text-xs text-[#cbd5e1]">
                            Resource downloads
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white">
                            Email Submissions
                        </CardTitle>
                        <Users className="h-4 w-4 text-[#3f79ff]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {analytics.totalEmails}
                        </div>
                        <p className="text-xs text-[#cbd5e1]">
                            Unique email addresses
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white">
                            Blog Posts
                        </CardTitle>
                        <FileText className="h-4 w-4 text-[#3f79ff]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {analytics.totalPosts}
                        </div>
                        <p className="text-xs text-[#cbd5e1]">
                            Published articles
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white">
                            Page Views
                        </CardTitle>
                        <Eye className="h-4 w-4 text-[#3f79ff]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {analytics.totalViews}
                        </div>
                        <p className="text-xs text-[#cbd5e1]">This month</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white/5 border-white/10">
                <CardHeader>
                    <CardTitle className="text-white">
                        Recent Downloads
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {analytics.recentDownloads.map((download, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                            >
                                <div>
                                    <p className="text-white font-medium">
                                        {download.resource_title}
                                    </p>
                                    <p className="text-[#cbd5e1] text-sm">
                                        {download.email}
                                    </p>
                                </div>
                                <div className="text-[#cbd5e1] text-sm">
                                    {new Date(
                                        download.submitted_at
                                    ).toLocaleDateString()}
                                </div>
                            </div>
                        ))}
                        {analytics.recentDownloads.length === 0 && (
                            <p className="text-[#cbd5e1] text-center py-4">
                                No recent downloads
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
