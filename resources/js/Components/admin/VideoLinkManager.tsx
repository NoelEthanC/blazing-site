"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Plus, Edit, Trash2, Play } from "lucide-react";

interface WatchUsBuildVideo {
    id: string;
    title: string;
    youtube_link: string;
    video_id: string;
    thumbnail_url: string;
    created_at: string;
}

export function WatchUsBuildManager() {
    const [videos, setVideos] = useState<WatchUsBuildVideo[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingVideo, setEditingVideo] = useState<WatchUsBuildVideo | null>(
        null
    );
    const [formData, setFormData] = useState({
        title: "",
        youtube_link: "",
        video_id: "",
        thumbnail_url: "",
    });

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch("/api/admin/watch-us-build");
            if (response.ok) {
                const data = await response.json();
                setVideos(data);
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    const extractVideoId = (url: string) => {
        const regex =
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
        const match = url.match(regex);
        return match ? match[1] : "";
    };

    const handleYoutubeLinkChange = (link: string) => {
        const videoId = extractVideoId(link);
        const thumbnailUrl = videoId
            ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            : "";

        setFormData({
            ...formData,
            youtube_link: link,
            video_id: videoId,
            thumbnail_url: thumbnailUrl,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editingVideo
                ? `/api/admin/watch-us-build/${editingVideo.id}`
                : "/api/admin/watch-us-build";
            const method = editingVideo ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                fetchVideos();
                setIsDialogOpen(false);
                resetForm();
            }
        } catch (error) {
            console.error("Error saving video:", error);
        }
    };

    const handleEdit = (video: WatchUsBuildVideo) => {
        setEditingVideo(video);
        setFormData({
            title: video.title,
            youtube_link: video.youtube_link,
            video_id: video.video_id,
            thumbnail_url: video.thumbnail_url,
        });
        setIsDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this video?")) {
            try {
                const response = await fetch(
                    `/api/admin/watch-us-build/${id}`,
                    {
                        method: "DELETE",
                    }
                );
                if (response.ok) {
                    fetchVideos();
                }
            } catch (error) {
                console.error("Error deleting video:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            youtube_link: "",
            video_id: "",
            thumbnail_url: "",
        });
        setEditingVideo(null);
    };

    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">
                    Watch Us Build Videos
                </CardTitle>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={resetForm}
                            className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Video
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#09111f] border-white/10 max-w-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-white">
                                {editingVideo ? "Edit Video" : "Add New Video"}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="title" className="text-white">
                                    Video Title
                                </Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            title: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    required
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="youtube_link"
                                    className="text-white"
                                >
                                    YouTube Link
                                </Label>
                                <Input
                                    id="youtube_link"
                                    value={formData.youtube_link}
                                    onChange={(e) =>
                                        handleYoutubeLinkChange(e.target.value)
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    required
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="video_id"
                                    className="text-white"
                                >
                                    Video ID (Auto-extracted)
                                </Label>
                                <Input
                                    id="video_id"
                                    value={formData.video_id}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            video_id: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    readOnly
                                />
                            </div>

                            {formData.thumbnail_url && (
                                <div>
                                    <Label className="text-white">
                                        Thumbnail Preview
                                    </Label>
                                    <div className="mt-2">
                                        <img
                                            src={
                                                formData.thumbnail_url ||
                                                "/placeholder.svg"
                                            }
                                            alt="Video thumbnail"
                                            width={320}
                                            height={180}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                {editingVideo ? "Update Video" : "Add Video"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <Card
                            key={video.id}
                            className="bg-white/5 border-white/10"
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={
                                        video.thumbnail_url ||
                                        "/placeholder.svg"
                                    }
                                    alt={video.title}
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Button
                                        size="sm"
                                        className="bg-red-600 hover:bg-red-700 rounded-full p-3"
                                        onClick={() =>
                                            window.open(
                                                video.youtube_link,
                                                "_blank"
                                            )
                                        }
                                    >
                                        <Play className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                                    {video.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#cbd5e1] text-sm">
                                        {new Date(
                                            video.created_at
                                        ).toLocaleDateString()}
                                    </span>
                                    <div className="flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleEdit(video)}
                                            className="text-[#3f79ff] hover:text-[#3f79ff]/80"
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                handleDelete(video.id)
                                            }
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {videos.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[#cbd5e1] text-lg">
                            No videos added yet.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
