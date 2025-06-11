"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Plus, Edit, Trash2, Download, Upload } from "lucide-react";

interface Resource {
    id: string;
    title: string;
    description: string;
    file_url: string;
    category: string;
    tags: string[];
    download_count: number;
    tool_used: string;
    guide_url: string;
    video_url: string;
    thumbnail_url: string;
    resource_type: string;
    file_name: string;
}

export function ResourcesManager() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingResource, setEditingResource] = useState<Resource | null>(
        null
    );
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        file_url: "",
        category: "",
        tags: "",
        tool_used: "",
        guide_url: "",
        video_url: "",
        thumbnail_url: "",
        resource_type: "Free",
        file_name: "",
    });

    const tools = [
        "n8n",
        "Zapier",
        "Make.com",
        "Airtable",
        "OpenAI",
        "Anthropic",
        "Other",
    ];

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await fetch("/api/admin/resources");
            if (response.ok) {
                const data = await response.json();
                setResources(data);
            }
        } catch (error) {
            console.error("Error fetching resources:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editingResource
                ? `/api/admin/resources/${editingResource.id}`
                : "/api/admin/resources";
            const method = editingResource ? "PUT" : "POST";

            const payload = {
                ...formData,
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
                fetchResources();
                setIsDialogOpen(false);
                resetForm();
            }
        } catch (error) {
            console.error("Error saving resource:", error);
        }
    };

    const handleEdit = (resource: Resource) => {
        setEditingResource(resource);
        setFormData({
            title: resource.title,
            description: resource.description,
            file_url: resource.file_url,
            category: resource.category,
            tags: resource.tags.join(", "),
            tool_used: resource.tool_used || "",
            guide_url: resource.guide_url || "",
            video_url: resource.video_url || "",
            thumbnail_url: resource.thumbnail_url || "",
            resource_type: resource.resource_type || "Free",
            file_name: resource.file_name || "",
        });
        setIsDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this resource?")) {
            try {
                const response = await fetch(`/api/admin/resources/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    fetchResources();
                }
            } catch (error) {
                console.error("Error deleting resource:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            file_url: "",
            category: "",
            tags: "",
            tool_used: "",
            guide_url: "",
            video_url: "",
            thumbnail_url: "",
            resource_type: "Free",
            file_name: "",
        });
        setEditingResource(null);
    };

    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">
                    Resources Management
                </CardTitle>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={resetForm}
                            className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Resource
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#09111f] border-white/10 max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-white">
                                {editingResource
                                    ? "Edit Resource"
                                    : "Add New Resource"}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor="title"
                                        className="text-white"
                                    >
                                        Resource Title *
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
                                        htmlFor="category"
                                        className="text-white"
                                    >
                                        Category
                                    </Label>
                                    <Input
                                        id="category"
                                        value={formData.category}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                category: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                        placeholder="Workflows, AI Agents, Templates"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label
                                    htmlFor="description"
                                    className="text-white"
                                >
                                    Short Description *
                                </Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor="tool_used"
                                        className="text-white"
                                    >
                                        Tool Used
                                    </Label>
                                    <Select
                                        value={formData.tool_used}
                                        onValueChange={(value) =>
                                            setFormData({
                                                ...formData,
                                                tool_used: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                                            <SelectValue placeholder="Select a tool" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#09111f] border-white/10">
                                            {tools.map((tool) => (
                                                <SelectItem
                                                    key={tool}
                                                    value={tool}
                                                    className="text-white hover:bg-white/10"
                                                >
                                                    {tool}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="text-white">
                                        Resource Type
                                    </Label>
                                    <RadioGroup
                                        value={formData.resource_type}
                                        onValueChange={(value) =>
                                            setFormData({
                                                ...formData,
                                                resource_type: value,
                                            })
                                        }
                                        className="flex space-x-4 mt-2"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="Free"
                                                id="free"
                                                className="border-white/20"
                                            />
                                            <Label
                                                htmlFor="free"
                                                className="text-white"
                                            >
                                                Free
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="Pro"
                                                id="pro"
                                                className="border-white/20"
                                            />
                                            <Label
                                                htmlFor="pro"
                                                className="text-white"
                                            >
                                                Pro
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>

                            <div>
                                <Label
                                    htmlFor="file_url"
                                    className="text-white"
                                >
                                    Upload Workflow File
                                </Label>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        id="file_url"
                                        value={formData.file_url}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                file_url: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                        placeholder="File URL or upload path"
                                    />
                                    <Button
                                        type="button"
                                        size="sm"
                                        className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                                    >
                                        <Upload className="h-4 w-4" />
                                    </Button>
                                </div>
                                <p className="text-[#cbd5e1] text-sm mt-1">
                                    Accepts .json, .zip, .pdf files
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor="guide_url"
                                        className="text-white"
                                    >
                                        Guide URL (PDF or Notion)
                                    </Label>
                                    <Input
                                        id="guide_url"
                                        value={formData.guide_url}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                guide_url: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                        placeholder="https://..."
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="video_url"
                                        className="text-white"
                                    >
                                        Video URL (Optional)
                                    </Label>
                                    <Input
                                        id="video_url"
                                        value={formData.video_url}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                video_url: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                        placeholder="YouTube or Vimeo URL"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label
                                    htmlFor="thumbnail_url"
                                    className="text-white"
                                >
                                    Thumbnail Preview
                                </Label>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        id="thumbnail_url"
                                        value={formData.thumbnail_url}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                thumbnail_url: e.target.value,
                                            })
                                        }
                                        className="bg-white/5 border-white/10 text-white"
                                        placeholder="Image URL"
                                    />
                                    <Button
                                        type="button"
                                        size="sm"
                                        className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                                    >
                                        <Upload className="h-4 w-4" />
                                    </Button>
                                </div>
                                {formData.thumbnail_url && (
                                    <div className="mt-2">
                                        <img
                                            src={
                                                formData.thumbnail_url ||
                                                "/placeholder.svg"
                                            }
                                            alt="Thumbnail preview"
                                            width={200}
                                            height={120}
                                            className="rounded-lg"
                                        />
                                    </div>
                                )}
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
                                    placeholder="automation, ai, workflow"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                {editingResource
                                    ? "Update Resource"
                                    : "Add Resource"}
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
                            <TableHead className="text-white">Tool</TableHead>
                            <TableHead className="text-white">Type</TableHead>
                            <TableHead className="text-white">
                                Downloads
                            </TableHead>
                            <TableHead className="text-white">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resources.map((resource) => (
                            <TableRow
                                key={resource.id}
                                className="border-white/10"
                            >
                                <TableCell className="text-white">
                                    {resource.title}
                                </TableCell>
                                <TableCell className="text-[#cbd5e1]">
                                    {resource.tool_used}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            resource.resource_type === "Free"
                                                ? "secondary"
                                                : "default"
                                        }
                                        className={
                                            resource.resource_type === "Free"
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-yellow-500/20 text-yellow-400"
                                        }
                                    >
                                        {resource.resource_type}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-[#cbd5e1]">
                                    <div className="flex items-center">
                                        <Download className="h-4 w-4 mr-1" />
                                        {resource.download_count}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleEdit(resource)}
                                            className="text-[#3f79ff] hover:text-[#3f79ff]/80"
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                handleDelete(resource.id)
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
