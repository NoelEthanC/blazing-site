"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Plus, Edit, Trash2 } from "lucide-react";

interface Tool {
    id: string;
    name: string;
    logo_url: string;
    website_url: string;
    sort_order: number;
}

export function ToolsManager() {
    const [tools, setTools] = useState<Tool[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingTool, setEditingTool] = useState<Tool | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        logo_url: "",
        website_url: "",
        sort_order: 0,
    });

    useEffect(() => {
        fetchTools();
    }, []);

    const fetchTools = async () => {
        try {
            const response = await fetch("/api/admin/tools");
            if (response.ok) {
                const data = await response.json();
                setTools(data);
            }
        } catch (error) {
            console.error("Error fetching tools:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editingTool
                ? `/api/admin/tools/${editingTool.id}`
                : "/api/admin/tools";
            const method = editingTool ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                fetchTools();
                setIsDialogOpen(false);
                resetForm();
            }
        } catch (error) {
            console.error("Error saving tool:", error);
        }
    };

    const handleEdit = (tool: Tool) => {
        setEditingTool(tool);
        setFormData({
            name: tool.name,
            logo_url: tool.logo_url,
            website_url: tool.website_url,
            sort_order: tool.sort_order,
        });
        setIsDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this tool?")) {
            try {
                const response = await fetch(`/api/admin/tools/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    fetchTools();
                }
            } catch (error) {
                console.error("Error deleting tool:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({ name: "", logo_url: "", website_url: "", sort_order: 0 });
        setEditingTool(null);
    };

    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Tools Management</CardTitle>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={resetForm}
                            className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Tool
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#09111f] border-white/10">
                        <DialogHeader>
                            <DialogTitle className="text-white">
                                {editingTool ? "Edit Tool" : "Add New Tool"}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="text-white">
                                    Tool Name
                                </Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="logo_url"
                                    className="text-white"
                                >
                                    Logo URL
                                </Label>
                                <Input
                                    id="logo_url"
                                    value={formData.logo_url}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            logo_url: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="website_url"
                                    className="text-white"
                                >
                                    Website URL
                                </Label>
                                <Input
                                    id="website_url"
                                    value={formData.website_url}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            website_url: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="sort_order"
                                    className="text-white"
                                >
                                    Sort Order
                                </Label>
                                <Input
                                    id="sort_order"
                                    type="number"
                                    value={formData.sort_order}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            sort_order: Number.parseInt(
                                                e.target.value
                                            ),
                                        })
                                    }
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
                            >
                                {editingTool ? "Update Tool" : "Add Tool"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10">
                            <TableHead className="text-white">Name</TableHead>
                            <TableHead className="text-white">
                                Website
                            </TableHead>
                            <TableHead className="text-white">
                                Sort Order
                            </TableHead>
                            <TableHead className="text-white">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tools.map((tool) => (
                            <TableRow key={tool.id} className="border-white/10">
                                <TableCell className="text-white">
                                    {tool.name}
                                </TableCell>
                                <TableCell className="text-[#cbd5e1]">
                                    {tool.website_url}
                                </TableCell>
                                <TableCell className="text-[#cbd5e1]">
                                    {tool.sort_order}
                                </TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleEdit(tool)}
                                            className="text-[#3f79ff] hover:text-[#3f79ff]/80"
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                handleDelete(tool.id)
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
