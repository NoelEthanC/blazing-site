import React, { useState } from "react";
import { useForm, Link, usePrefetch, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

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
    Plus,
    Edit,
    Trash2,
    Download,
    ChevronLeft,
    ChevronRight,
    Upload,
} from "lucide-react";
import ResourceForm from "./ResourceForm";

interface Resource {
    id: string;
    title: string;
    description: string;
    tool: string;
    resource_type: "free" | "pro";
    downloads_count: number;
    file_path: string;
    category_id?: number;
    tags?: string;
    guide_url?: string;
    video_url?: string;
    thumbnail_path?: string;
    created_at: string;
    updated_at: string;
}

interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    from?: number;
    to?: number;
    total: number;
    prev_page_url: string | null;
    next_page_url: string | null;
    links: { url: string | null; label: string; active: boolean }[];
}

interface Props {
    resources: PaginatedResponse<Resource>;
    // categories: { id: number; name: string }[];
}

export default function ResourcesManager() {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState<Resource | null>(null);
    const { props } = usePage<Props>();
    const [categories, setCategories] = useState(props.categories || []);
    const [formErrors, setFormErrors] = useState<any>();

    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        title: "",
        description: "",
        file_path: "",
        category_id: "",
        tags: "",
        tool: "",
        guide_url: "",
        video_url: "",
        thumbnail_path: "",
        resource_type: "free",
    });

    const tools = [
        "n8n",
        "Zapier",
        "Make.com",
        "Airtable",
        "HubSpot",
        "OpenAI",
        "Anthropic",
        "Other",
    ];

    function openForm(isAddResourceButton?: boolean, resource?: Resource) {
        if (resource) {
            setEditing(resource);
            setData({
                title: resource.title,
                description: resource.description,
                file_path: resource.file_path,
                category_id: resource.category_id?.toString() || "",
                tags: resource.tags || "",
                tool: resource.tool,
                guide_url: resource.guide_url || "",
                video_url: resource.video_url || "",
                thumbnail_path: resource.thumbnail_path || "",
                resource_type: resource.resource_type,
            });
        }
        // if its add-resourc-button then clear any other editing that was being done
        if (isAddResourceButton) {
            // TODO: reset the form
            setEditing(null);
            // reset();
            // setData({
            //     title: "",
            //     description: "",
            //     file_path: "",
            //     category_id: "",
            //     tags: "",
            //     tool: "",
            //     guide_url: "",
            //     video_url: "",
            //     thumbnail_path: "",
            //     resource_type: "free",
            // });
        }
        setIsOpen(true);
    }

    function closeForm() {
        setIsOpen(false);
        setEditing(null);
        reset();
    }

    function submitForm(e: React.FormEvent) {
        e.preventDefault();
        const routeName = editing
            ? "admin.dashboard.updateResource"
            : "admin.dashboard.storeResource";
        const method = editing ? put : post;
        method(route(routeName, editing?.id), {
            onSuccess: closeForm,
            forceFormData: true,
            onError: (errors) => {
                console.error("Form submission errors:", errors);
                // Handle form submission errors
                setFormErrors(errors);
            },
        });
    }

    function remove(id: number) {
        if (confirm("Are you sure?")) {
            destroy(route("admin.resources.destroy", id));
        }
    }

    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row w-full items-center justify-between">
                <CardTitle className="text-white">
                    Templates Management
                </CardTitle>
                <Button
                    id="add-resource-button"
                    onClick={() => openForm(true)}
                    size="sm"
                    className="bg-[#3f79ff] hover:bg-[#3f79ff]/80 text-white"
                >
                    <Plus className="w-4 h-4 mr-1" /> Add Resource
                </Button>
            </CardHeader>

            <ResourceForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                formData={data}
                setData={setData}
                categories={categories}
                tools={tools}
                errors={errors}
                processing={processing}
                handleSubmit={submitForm}
                editingResource={editing}
                setEditingResource={setEditing}
            />

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Tool</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Downloads</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.resources.data.map((res: any) => (
                            <TableRow key={res.id}>
                                <TableCell className="text-white">
                                    {res.title}
                                </TableCell>
                                <TableCell className="text-[#cbd5e1]">
                                    {res.tool}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            res.resource_type === "free"
                                                ? "secondary"
                                                : "default"
                                        }
                                        className={
                                            res.resource_type === "free"
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-yellow-500/20 text-yellow-400"
                                        }
                                    >
                                        {res.resource_type}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-[#cbd5e1] flex items-center">
                                    <Download className="w-4 h-4 mr-1" />
                                    {res.downloads_count}
                                </TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => openForm(false, res)}
                                        >
                                            <Edit className="w-4 h-4 text-[#3f79ff]" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => remove(res.id)}
                                        >
                                            <Trash2 className="w-4 h-4 text-red-400" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-[#cbd5e1]">
                        Showing {props.resources.from ?? 0}–
                        {props.resources.to ?? 0} of {props.resources.total}
                    </span>

                    <div className="flex space-x-2">
                        <Link
                            href={props.resources.prev_page_url || "#"}
                            preserveState
                            preserveScroll
                            className={`p-2 rounded-md ${
                                props.resources.prev_page_url
                                    ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80"
                                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Link>
                        {props.resources.links.map((link: any) => (
                            <Link
                                key={link.label + link.url}
                                href={link.url || "#"}
                                preserveState
                                preserveScroll
                                className={`px-3 py-1 rounded-md ${
                                    link.active
                                        ? "bg-[#3f79ff] text-white"
                                        : "bg-white/10 text-[#cbd5e1]"
                                }`}
                            >
                                {link.label === "&laquo; Previous"
                                    ? "Previous"
                                    : link.label === "Next &raquo;"
                                    ? "Next "
                                    : link.label}
                            </Link>
                        ))}
                        <Link
                            href={props.resources.next_page_url || "#"}
                            preserveState
                            preserveScroll
                            className={`p-2 rounded-md ${
                                props.resources.next_page_url
                                    ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80"
                                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
