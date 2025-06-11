"use client";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { WatchUsBuildManager } from "./VideoLinkManager";

interface ContentSection {
    section: string;
    content: any;
}

export function ContentManager() {
    const [heroContent, setHeroContent] = useState({
        headline: "",
        subheadline: "",
        primary_cta: "",
        secondary_cta: "",
        video_url: "",
    });

    const [aboutContent, setAboutContent] = useState({
        mission_title: "",
        mission_content: "",
        team_title: "",
        team_content: "",
        team_image_url: "",
    });

    const [siteSettings, setSiteSettings] = useState({
        calendly_url: "",
        contact_email: "",
        company_name: "",
    });

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            // Fetch hero content
            const heroResponse = await fetch("/api/admin/content/hero");
            if (heroResponse.ok) {
                const heroData = await heroResponse.json();
                setHeroContent(heroData.content);
            }

            // Fetch about content
            const aboutResponse = await fetch("/api/admin/content/about");
            if (aboutResponse.ok) {
                const aboutData = await aboutResponse.json();
                setAboutContent(aboutData.content);
            }

            // Fetch site settings
            const settingsResponse = await fetch("/api/admin/settings");
            if (settingsResponse.ok) {
                const settingsData = await settingsResponse.json();
                setSiteSettings(settingsData);
            }
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    const saveHeroContent = async () => {
        try {
            const response = await fetch("/api/admin/content/hero", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: heroContent }),
            });
            if (response.ok) {
                alert("Hero content saved successfully!");
            }
        } catch (error) {
            console.error("Error saving hero content:", error);
        }
    };

    const saveAboutContent = async () => {
        try {
            const response = await fetch("/api/admin/content/about", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: aboutContent }),
            });
            if (response.ok) {
                alert("About content saved successfully!");
            }
        } catch (error) {
            console.error("Error saving about content:", error);
        }
    };

    const saveSettings = async () => {
        try {
            const response = await fetch("/api/admin/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(siteSettings),
            });
            if (response.ok) {
                alert("Settings saved successfully!");
            }
        } catch (error) {
            console.error("Error saving settings:", error);
        }
    };

    return (
        <div className="space-y-6">
            <Tabs defaultValue="hero" className="space-y-6">
                <TabsList className="bg-white/5 border-white/10">
                    <TabsTrigger
                        value="hero"
                        className="text-white data-[state=active]:bg-[#3f79ff]"
                    >
                        Hero Section
                    </TabsTrigger>
                    <TabsTrigger
                        value="about"
                        className="text-white data-[state=active]:bg-[#3f79ff]"
                    >
                        About Page
                    </TabsTrigger>
                    <TabsTrigger
                        value="watch-us-build"
                        className="text-white data-[state=active]:bg-[#3f79ff]"
                    >
                        Watch Us Build
                    </TabsTrigger>
                    <TabsTrigger
                        value="settings"
                        className="text-white data-[state=active]:bg-[#3f79ff]"
                    >
                        Site Settings
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="hero">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">
                                Hero Section Content
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label
                                    htmlFor="headline"
                                    className="text-white"
                                >
                                    Headline
                                </Label>
                                <Input
                                    id="headline"
                                    value={heroContent.headline}
                                    onChange={(e) =>
                                        setHeroContent({
                                            ...heroContent,
                                            headline: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="subheadline"
                                    className="text-white"
                                >
                                    Subheadline
                                </Label>
                                <Textarea
                                    id="subheadline"
                                    value={heroContent.subheadline}
                                    onChange={(e) =>
                                        setHeroContent({
                                            ...heroContent,
                                            subheadline: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    rows={3}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor="primary_cta"
                                        className="text-white"
                                    >
                                        Primary CTA Text
                                    </Label>
                                    <Input
                                        id="primary_cta"
                                        value={heroContent.primary_cta}
                                        onChange={(e) =>
                                            setHeroContent({
                                                ...heroContent,
                                                primary_cta: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="secondary_cta"
                                        className="text-white"
                                    >
                                        Secondary CTA Text
                                    </Label>
                                    <Input
                                        id="secondary_cta"
                                        value={heroContent.secondary_cta}
                                        onChange={(e) =>
                                            setHeroContent({
                                                ...heroContent,
                                                secondary_cta: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label
                                    htmlFor="video_url"
                                    className="text-white"
                                >
                                    Video URL (YouTube embed)
                                </Label>
                                <Input
                                    id="video_url"
                                    value={heroContent.video_url}
                                    onChange={(e) =>
                                        setHeroContent({
                                            ...heroContent,
                                            video_url: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    placeholder="https://www.youtube.com/embed/..."
                                />
                            </div>

                            <Button
                                onClick={saveHeroContent}
                                className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                Save Hero Content
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="about">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">
                                About Page Content
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label
                                    htmlFor="mission_title"
                                    className="text-white"
                                >
                                    Mission Title
                                </Label>
                                <Input
                                    id="mission_title"
                                    value={aboutContent.mission_title}
                                    onChange={(e) =>
                                        setAboutContent({
                                            ...aboutContent,
                                            mission_title: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="mission_content"
                                    className="text-white"
                                >
                                    Mission Content
                                </Label>
                                <Textarea
                                    id="mission_content"
                                    value={aboutContent.mission_content}
                                    onChange={(e) =>
                                        setAboutContent({
                                            ...aboutContent,
                                            mission_content: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="team_title"
                                    className="text-white"
                                >
                                    Team Section Title
                                </Label>
                                <Input
                                    id="team_title"
                                    value={aboutContent.team_title}
                                    onChange={(e) =>
                                        setAboutContent({
                                            ...aboutContent,
                                            team_title: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="team_content"
                                    className="text-white"
                                >
                                    Team Content
                                </Label>
                                <Textarea
                                    id="team_content"
                                    value={aboutContent.team_content}
                                    onChange={(e) =>
                                        setAboutContent({
                                            ...aboutContent,
                                            team_content: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="team_image_url"
                                    className="text-white"
                                >
                                    Team Image URL
                                </Label>
                                <Input
                                    id="team_image_url"
                                    value={aboutContent.team_image_url}
                                    onChange={(e) =>
                                        setAboutContent({
                                            ...aboutContent,
                                            team_image_url: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <Button
                                onClick={saveAboutContent}
                                className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                Save About Content
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="watch-us-build">
                    <WatchUsBuildManager />
                </TabsContent>

                <TabsContent value="settings">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">
                                Site Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label
                                    htmlFor="company_name"
                                    className="text-white"
                                >
                                    Company Name
                                </Label>
                                <Input
                                    id="company_name"
                                    value={siteSettings.company_name}
                                    onChange={(e) =>
                                        setSiteSettings({
                                            ...siteSettings,
                                            company_name: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="contact_email"
                                    className="text-white"
                                >
                                    Contact Email
                                </Label>
                                <Input
                                    id="contact_email"
                                    type="email"
                                    value={siteSettings.contact_email}
                                    onChange={(e) =>
                                        setSiteSettings({
                                            ...siteSettings,
                                            contact_email: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="calendly_url"
                                    className="text-white"
                                >
                                    Calendly URL
                                </Label>
                                <Input
                                    id="calendly_url"
                                    value={siteSettings.calendly_url}
                                    onChange={(e) =>
                                        setSiteSettings({
                                            ...siteSettings,
                                            calendly_url: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    placeholder="https://calendly.com/your-username"
                                />
                            </div>

                            <Button
                                onClick={saveSettings}
                                className="bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                Save Settings
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
