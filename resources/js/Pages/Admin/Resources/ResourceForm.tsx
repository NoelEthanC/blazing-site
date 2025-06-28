import React, { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { ArrowBigLeft, Plus, Upload } from "lucide-react";
import { AdminControlLayout } from "@/Layouts/AdminControlLayout";
import { Card, CardHeader, CardTitle } from "@/Components/ui/card";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Resource } from "@/types";
import { log } from "console";

export default function ResourceForm() {
    const { props } = usePage<Props>();
    const [categories, setCategories] = useState(props.categories || []);
    const [formErrors, setFormErrors] = useState<any>();
    const [editingResource, setEditingResource] = useState<Resource | null>(
        props?.resource ? props.resource : null
    );

    const {
        data,
        setData,
        post,
        patch,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        title: editingResource ? editingResource.title : "",
        description: editingResource ? editingResource.description : "",
        file_path: editingResource ? editingResource.file_path : "",
        category_id: editingResource ? editingResource.category_id : "",
        tags: editingResource ? editingResource.tags : "",
        tool: editingResource ? editingResource.tool : "",
        guide_url: editingResource ? editingResource.guide_url : "",
        video_url: editingResource ? editingResource.video_url : "",
        thumbnail_path: editingResource ? editingResource.thumbnail_path : "",
        resource_type: editingResource ? editingResource.resource_type : "free",
        _method: editingResource ? "put" : "post",
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

    // function submitForm(e: React.FormEvent) {
    //     e.preventDefault();
    //     const routeName = editingResource
    //         ? "admin.resources.update"
    //         : "admin.resources.store";

    //     editingResource
    //         ? router.post(route(routeName, editingResource?.id), {
    //               _method: "put",
    //               //   forceFormData: true,
    //               data: {
    //                   ...data,
    //                   file_path:
    //                       data.file_path instanceof File
    //                           ? data.file_path
    //                           : null,
    //                   thumbnail_path:
    //                       data.thumbnail_path instanceof File
    //                           ? data.thumbnail_path
    //                           : null,
    //               },
    //           })
    //         : post(route(routeName), {
    //               forceFormData: true,
    //               // Handle form submission errors

    //               onError: (errors) => {
    //                   // Handle form submission errors
    //                   setFormErrors(errors);
    //               },
    //           });
    // }

    function submitForm(e: React.FormEvent) {
        e.preventDefault();
        const routeName = editingResource
            ? "admin.resources.update"
            : "admin.resources.store";
        // const method = editingResource ? post : post;
        post(route(routeName, editingResource?.id), {
            forceFormData: true,
            onSuccess: () => {
                // Reset form state after successful submission
                reset();
                setEditingResource(null);
                setFormErrors(null);
                // Optionally redirect or show a success message
            },
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
        <>
            <Head
                title={editingResource ? "Edit Resource" : "Create Resource"}
            />

            <Card className="border-0 shadow-lg bg-midnight-blue">
                <CardHeader className="bg-midnight-blue border-0">
                    <CardTitle className="bg-midnight-blue text-white flex items-center justify-between">
                        <Link
                            href={route("admin.resources.index")}
                            as="button"
                            className="bg-white/5 hover:bg-white/10  flex items-center gap-2 px-4 py-2 text-sm text-blue-500 rounded-md"
                        >
                            <ArrowBigLeft className="h-4 w-4" /> Back
                        </Link>
                        <span className="text-lg font-semibold" />
                        {props.editingResource
                            ? "Edit Resource"
                            : "Add New Resource"}
                    </CardTitle>
                </CardHeader>
            </Card>

            <ResourceFormContent
                handleSubmit={submitForm}
                editingResource={editingResource}
                setEditingResource={setEditingResource}
                reset={reset}
                categories={categories}
                formData={data}
                errors={errors}
                setData={setData}
                processing={processing}
                tools={tools}
            />
        </>
    );
}

ResourceForm.layout = (page: React.ReactNode) => (
    <AdminControlLayout>{page}</AdminControlLayout>
);

const ResourceFormContent = ({
    handleSubmit,
    editingResource,
    setEditingResource,
    reset,
    categories,
    formData,
    errors,
    setData,
    processing,
    tools,
}: any) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
            encType="multipart/form-data"
        >
            {/* title & category */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="title" className="text-white">
                        Resource Title *
                    </Label>
                    <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        required
                    />
                    {errors.title && (
                        <p className="text-red-400 text-sm">{errors.title}</p>
                    )}
                </div>
                <div>
                    <Label htmlFor="category_id" className="text-white">
                        Category
                    </Label>
                    <Select
                        value={formData.category_id}
                        onValueChange={(value) => setData("category_id", value)}
                    >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#09111f] border-white/10">
                            {categories.map((category: any) => (
                                <SelectItem
                                    key={category.id}
                                    value={category.id}
                                    className="text-white hover:bg-white/10"
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.category_id && (
                        <p className="text-red-400 text-sm">
                            {errors.category_id}
                        </p>
                    )}
                </div>
            </div>

            {/* description */}
            <div>
                <Label htmlFor="description" className="text-white">
                    Short Description *
                </Label>
                <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setData("description", e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    rows={3}
                    required
                />
                {errors.description && (
                    <p className="text-red-400 text-sm">{errors.description}</p>
                )}
            </div>

            {/* toools & resource type */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="tool" className="text-white">
                        Tool Used
                    </Label>
                    <Select
                        value={formData.tool}
                        onValueChange={(value) => setData("tool", value)}
                    >
                        <SelectTrigger className="bg-white/5 border-white/40 text-white">
                            <SelectValue placeholder="Select a tool" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#09111f] border-white/10">
                            {tools.map((tool: any) => (
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
                    {errors.tool && (
                        <p className="text-red-400 text-sm">{errors.tool}</p>
                    )}
                </div>
                <div>
                    <Label className="text-white">Resource Type</Label>
                    <RadioGroup
                        value={formData.resource_type}
                        onValueChange={(value) =>
                            setData("resource_type", value)
                        }
                        className="flex space-x-4 mt-2"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="free"
                                id="free"
                                className="border-white/20"
                            />
                            <Label htmlFor="free" className="text-white">
                                Free
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="pro"
                                id="pro"
                                className="border-white/20"
                            />
                            <Label htmlFor="pro" className="text-white">
                                Pro
                            </Label>
                        </div>
                    </RadioGroup>
                    {errors.resource_type && (
                        <p className="text-red-400 text-sm">
                            {errors.resource_type}
                        </p>
                    )}
                </div>
            </div>

            {/* template zip/json files */}
            <div>
                <Label htmlFor="file_path" className="text-white">
                    Upload Workflow File
                </Label>

                {/* Existing File Info */}
                {typeof formData.file_path === "string" && (
                    <div className="mb-2 text-sm text-[#cbd5e1]">
                        Current File:{" "}
                        <a
                            href={`/storage/${formData.file_path}`}
                            className="text-blue-400 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View or Download
                        </a>
                    </div>
                )}

                {/* File Upload Input */}
                <div className="flex items-center space-x-2">
                    <Input
                        id="file_path"
                        type="file"
                        accept=".json,.zip,.pdf"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setData("file_path", file);
                            }
                        }}
                        className="bg-white/5 border-white/10 text-white"
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

                {errors.file_path && (
                    <p className="text-red-400 text-sm">{errors.file_path}</p>
                )}
            </div>

            {/* template thumbnail */}
            <div>
                <Label htmlFor="thumbnail_path" className="text-white">
                    Thumbnail Preview
                </Label>
                <div className="flex items-center space-x-2">
                    <Input
                        id="thumbnail_path"
                        type="file"
                        // ❌ DO NOT USE `value` on file input
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setData("thumbnail_path", file);
                            }
                        }}
                        className="bg-white/5 border-white/10 text-white"
                    />
                    <Button
                        type="button"
                        size="sm"
                        className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                    >
                        <Upload className="h-4 w-4" />
                    </Button>
                </div>

                {/* Preview only works if the value is a URL (string) OR you create a temporary blob URL */}
                {formData.thumbnail_path &&
                    typeof formData.thumbnail_path === "string" && (
                        <div className="mt-2">
                            <img
                                src={`/storage/${formData.thumbnail_path}`}
                                alt="Thumbnail preview"
                                width={200}
                                height={120}
                                className="rounded-lg"
                            />
                        </div>
                    )}

                {/* Optional: preview the file just uploaded */}
                {formData.thumbnail_path instanceof File && (
                    <div className="mt-2">
                        <img
                            src={URL.createObjectURL(formData.thumbnail_path)}
                            alt="Thumbnail preview"
                            width={200}
                            height={120}
                            className="rounded-lg"
                        />
                    </div>
                )}

                {errors.thumbnail_path && (
                    <p className="text-red-400 text-sm">
                        {errors.thumbnail_path}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={processing}
                className="w-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90"
            >
                {editingResource ? "Update Resource" : "Add Resource"}
            </Button>
        </form>
    );
};
