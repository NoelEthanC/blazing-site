"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";
import { Switch } from "@/Components/ui/switch";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    cover_image_url: string;
    tags: string[];
    published: boolean;
    created_at: string;
}

export function BlogManager() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        summary: "",
        content: "",
        cover_image_url: "",
        tags: "",
        published: false,
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("/api/admin/blog");
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editingPost
                ? `/api/admin/blog/${editingPost.id}`
                : "/api/admin/blog";
            const method = editingPost ? "PUT" : "POST";

            const payload = {
                ...formData,
                slug: formData.slug || generateSlug(formData.title),
                tags: formData.tags
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean),
            };

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                fetchPosts();
                setIsDialogOpen(false);
                resetForm();
            }
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    const handleEdit = (post: BlogPost) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            slug: post.slug,
            summary: post.summary,
            content: post.content,
            cover_image_url: post.cover_image_url,
            tags: post.tags.join(", "),
            published: post.published,
        });
        setIsDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this post?")) {
            try {
                const response = await fetch(`/api/admin/blog/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    fetchPosts();
                }
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }
    };

    const togglePublished = async (id: string, published: boolean) => {
        try {
            const response = await fetch(`/api/admin/blog/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ published: !published }),
            });
            if (response.ok) {
                fetchPosts();
            }
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            slug: "",
            summary: "",
            content: "",
            cover_image_url: "",
            tags: "",
            published: false,
        });
        setEditingPost(null);
    };

    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Blog Management</CardTitle>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={resetForm}
                            className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            New Post
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#09111f] border-white/10 max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-white">
                                {editingPost ? "Edit Post" : "Create New Post"}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor="title"
                                        className="text-white"
                                    >
                                        Title
                                    </Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={(e) => {
                                            const title = e.target.value;
                                            setFormData({
                                                ...formData,
                                                title,
                                                slug:
                                                    formData.slug ||
                                                    generateSlug(title),
                                            });
                                        }}
                                        className="bg-white/5 border-white/10 text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="slug"
                                        className="text-white"
                                    >
                                        Slug
                                    </Label>
                                    <Input
                                        id="slug"
                                        value={formData.slug}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                slug: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="summary" className="text-white">
                                    Summary
                                </Label>
                                <Textarea
                                    id="summary"
                                    value={formData.summary}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            summary: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    rows={2}
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="cover_image_url"
                                    className="text-white"
                                >
                                    Cover Image URL
                                </Label>
                                <Input
                                    id="cover_image_url"
                                    value={formData.cover_image_url}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            cover_image_url: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <div>
                                <Label htmlFor="content" className="text-white">
                                    Content (Markdown)
                                </Label>
                                <Textarea
                                    id="content"
                                    value={formData.content}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            content: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    rows={10}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="tags" className="text-white">
                                    Tags (comma-separated)
                                </Label>
                                <Input
                                    id="tags"
                                    value={formData.tags}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            tags: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    placeholder="automation, ai, tutorial"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="published"
                                    checked={formData.published}
                                    onCheckedChange={(checked) =>
                                        setFormData({
                                            ...formData,
                                            published: checked,
                                        })
                                    }
                                />
                                <Label
                                    htmlFor="published"
                                    className="text-white"
                                >
                                    Published
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                {editingPost ? "Update Post" : "Create Post"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10">
                            <TableHead className="text-white">Title</TableHead>
                            <TableHead className="text-white">Status</TableHead>
                            <TableHead className="text-white">Tags</TableHead>
                            <TableHead className="text-white">
                                Created
                            </TableHead>
                            <TableHead className="text-white">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id} className="border-white/10">
                                <TableCell className="text-white">
                                    {post.title}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            checked={post.published}
                                            onCheckedChange={() =>
                                                togglePublished(
                                                    post.id,
                                                    post.published
                                                )
                                            }
                                            size="sm"
                                        />
                                        <Badge
                                            variant={
                                                post.published
                                                    ? "default"
                                                    : "secondary"
                                            }
                                            className={
                                                post.published
                                                    ? "bg-green-500"
                                                    : "bg-gray-500"
                                            }
                                        >
                                            {post.published
                                                ? "Published"
                                                : "Draft"}
                                        </Badge>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-[#3f79ff]/20 text-[#3f79ff]"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                        {post.tags.length > 2 && (
                                            <Badge
                                                variant="secondary"
                                                className="bg-gray-500/20 text-gray-400"
                                            >
                                                +{post.tags.length - 2}
                                            </Badge>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-[#cbd5e1]">
                                    {new Date(
                                        post.created_at
                                    ).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                window.open(
                                                    `/blog/${post.slug}`,
                                                    "_blank"
                                                )
                                            }
                                            className="text-[#3f79ff] hover:text-[#3f79ff]/80"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleEdit(post)}
                                            className="text-[#3f79ff] hover:text-[#3f79ff]/80"
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
