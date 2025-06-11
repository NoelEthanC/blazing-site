"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Download, Search } from "lucide-react";

interface Lead {
    id: string;
    email: string;
    resource_title: string;
    download_count: number;
    last_downloaded: string;
}

export function LeadsManager() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState<keyof Lead>("last_downloaded");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        try {
            const response = await fetch("/api/admin/leads");
            if (response.ok) {
                const data = await response.json();
                setLeads(data);
            }
        } catch (error) {
            console.error("Error fetching leads:", error);
        }
    };

    const handleSort = (field: keyof Lead) => {
        if (field === sortField) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const exportToCSV = () => {
        const headers = [
            "Email",
            "Resource Downloaded",
            "Download Count",
            "Last Downloaded",
        ];
        const csvContent = [
            headers.join(","),
            ...filteredAndSortedLeads.map((lead) =>
                [
                    lead.email,
                    `"${lead.resource_title}"`,
                    lead.download_count,
                    new Date(lead.last_downloaded).toLocaleDateString(),
                ].join(",")
            ),
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "leads.csv";
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const filteredAndSortedLeads = leads
        .filter(
            (lead) =>
                lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.resource_title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];

            if (typeof aValue === "string" && typeof bValue === "string") {
                return sortDirection === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            if (typeof aValue === "number" && typeof bValue === "number") {
                return sortDirection === "asc"
                    ? aValue - bValue
                    : bValue - aValue;
            }

            return 0;
        });

    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <CardTitle className="text-white">
                        Leads Management
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#cbd5e1] h-4 w-4" />
                            <Input
                                placeholder="Search leads..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-white/5 border-white/10 text-white pl-10 w-full sm:w-64"
                            />
                        </div>
                        <Button
                            onClick={exportToCSV}
                            className="bg-[#3f79ff] hover:bg-[#3f79ff]/80"
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Export CSV
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border border-white/10">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/10">
                                <TableHead
                                    className="text-white cursor-pointer hover:text-[#3f79ff]"
                                    onClick={() => handleSort("email")}
                                >
                                    Email Address{" "}
                                    {sortField === "email" &&
                                        (sortDirection === "asc" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    className="text-white cursor-pointer hover:text-[#3f79ff]"
                                    onClick={() => handleSort("resource_title")}
                                >
                                    Resource Downloaded{" "}
                                    {sortField === "resource_title" &&
                                        (sortDirection === "asc" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    className="text-white cursor-pointer hover:text-[#3f79ff]"
                                    onClick={() => handleSort("download_count")}
                                >
                                    # of Downloads{" "}
                                    {sortField === "download_count" &&
                                        (sortDirection === "asc" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    className="text-white cursor-pointer hover:text-[#3f79ff]"
                                    onClick={() =>
                                        handleSort("last_downloaded")
                                    }
                                >
                                    Last Downloaded{" "}
                                    {sortField === "last_downloaded" &&
                                        (sortDirection === "asc" ? "↑" : "↓")}
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredAndSortedLeads.map((lead) => (
                                <TableRow
                                    key={lead.id}
                                    className="border-white/10"
                                >
                                    <TableCell className="text-white">
                                        {lead.email}
                                    </TableCell>
                                    <TableCell className="text-[#cbd5e1]">
                                        {lead.resource_title}
                                    </TableCell>
                                    <TableCell className="text-[#cbd5e1]">
                                        {lead.download_count}
                                    </TableCell>
                                    <TableCell className="text-[#cbd5e1]">
                                        {new Date(
                                            lead.last_downloaded
                                        ).toLocaleDateString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {filteredAndSortedLeads.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-[#cbd5e1]">No leads found</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
