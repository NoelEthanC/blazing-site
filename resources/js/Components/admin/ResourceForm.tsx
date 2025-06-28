import React, { useState } from "react";
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
import { Plus, Upload } from "lucide-react";

export default function ResourceForm({
    isOpen,
    setIsOpen,
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
}: any) {
    return (
        <Dialog open={true} onOpenChange={setIsOpen}>
            <DialogContent className="bg-[#09111f] border-white/10 max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-white">
                        {editingResource ? "Edit Resource" : "Add New Resource"}
                    </DialogTitle>
                </DialogHeader>

                <ResourceFormContent
                    handleSubmit={handleSubmit}
                    editingResource={editingResource}
                    setEditingResource={setEditingResource}
                    reset={reset}
                    categories={categories}
                    formData={formData}
                    errors={errors}
                    setData={setData}
                    processing={processing}
                    tools={tools}
                />
            </DialogContent>
        </Dialog>
    );
}

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
        <form onSubmit={handleSubmit} className="space-y-6">
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
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
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
                <div className="flex items-center space-x-2">
                    <Input
                        id="file_path"
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setData("file_path", file);
                            }
                        }}
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
                {errors.file_path && (
                    <p className="text-red-400 text-sm">{errors.file_path}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="guide_url" className="text-white">
                        Guide URL (PDF or Notion)
                    </Label>
                    <Input
                        id="guide_url"
                        value={formData.guide_url}
                        onChange={(e) => setData("guide_url", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        placeholder="https://..."
                    />
                    {errors.guide_url && (
                        <p className="text-red-400 text-sm">
                            {errors.guide_url}
                        </p>
                    )}
                </div>
                <div>
                    <Label htmlFor="video_url" className="text-white">
                        Video URL (Optional)
                    </Label>
                    <Input
                        id="video_url"
                        value={formData.video_url}
                        onChange={(e) => setData("video_url", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        placeholder="YouTube or Vimeo URL"
                    />
                    {errors.video_url && (
                        <p className="text-red-400 text-sm">
                            {errors.video_url}
                        </p>
                    )}
                </div>
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
                                src={formData.thumbnail_path}
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

            <div>
                <Label htmlFor="tags" className="text-white">
                    Tags (comma-separated)
                </Label>
                <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setData("tags", e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="automation, ai, workflow"
                />
                {errors.tags && (
                    <p className="text-red-400 text-sm">{errors.tags}</p>
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
