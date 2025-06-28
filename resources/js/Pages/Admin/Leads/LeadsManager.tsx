"use client";

import { useState, useMemo, useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, ChevronRight, Download, Search } from "lucide-react";
import { AdminControlLayout } from "@/Layouts/AdminControlLayout";

interface RawLead {
    id: string;
    email: string;
    resource_title: string;
    download_count: number;
    last_downloaded: string;
}

interface PaginatedLeads {
    data: RawLead[];
    links: { url: string | null; label: string; active: boolean }[];
    prev_page_url: string | null;
    next_page_url: string | null;
    from: number | null;
    to: number | null;
    total: number;
}

export default function LeadsManager() {
    const { leads } = usePage<{ leads: PaginatedLeads }>().props;

    // Destructure with fallback values
    const {
        data: leadRows = [],
        links = [],
        prev_page_url,
        next_page_url,
        from,
        to,
        total,
    } = leads || {};

    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] =
        useState<keyof RawLead>("last_downloaded");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    // Debug logging
    useEffect(() => {
        console.log("LeadsManager render:", {
            leadRows: leadRows?.length,
            searchTerm,
            sortField,
            sortDirection,
            leads,
        });
    }, [leadRows, searchTerm, sortField, sortDirection, leads]);

    const filteredAndSortedLeads = useMemo(() => {
        if (!leadRows || !Array.isArray(leadRows)) {
            console.log("No leadRows or not array:", leadRows);
            return [];
        }

        const filtered = leadRows.filter((l) => {
            if (!l) return false;
            const emailMatch =
                l.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                false;
            const titleMatch =
                l.resource_title
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase()) || false;
            return emailMatch || titleMatch;
        });

        console.log("Filtered leads:", filtered.length);

        const sorted = filtered.sort((a, b) => {
            if (!a || !b) return 0;

            const av = a[sortField];
            const bv = b[sortField];

            if (av === undefined || bv === undefined) return 0;

            // Handle different data types
            if (typeof av === "number" && typeof bv === "number") {
                return sortDirection === "asc" ? av - bv : bv - av;
            }

            // Convert to string for comparison
            const aStr = String(av);
            const bStr = String(bv);

            return sortDirection === "asc"
                ? aStr.localeCompare(bStr)
                : bStr.localeCompare(aStr);
        });

        console.log("Final sorted leads:", sorted.length);
        return sorted;
    }, [leadRows, searchTerm, sortField, sortDirection]);

    const exportToCSV = () => {
        if (!filteredAndSortedLeads.length) return;

        const rows = filteredAndSortedLeads.map((l) => [
            l.email || "",
            `"${l.resource_title || ""}"`,
            (l.download_count || 0).toString(),
            l.last_downloaded
                ? new Date(l.last_downloaded).toLocaleDateString()
                : "",
        ]);

        const csv = [
            ["Email", "Resource", "# Downloads", "Last Downloaded"],
            ...rows,
        ]
            .map((r) => r.join(","))
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "leads.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleSort = (field: keyof RawLead) => {
        setSortField(field);
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    return (
        <>
            <Head title="Leads" />

            <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white">
                            Leads Manager
                        </CardTitle>
                        <Button
                            onClick={exportToCSV}
                            className="bg-[#3f79ff] hover:bg-[#3f79ff]/80 text-white"
                            disabled={!filteredAndSortedLeads.length}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Export CSV
                        </Button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Search by email or resource..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                    </div>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/10">
                                {[
                                    "email",
                                    "resource_title",
                                    "last_downloaded",
                                ].map((field) => (
                                    <TableHead
                                        key={field}
                                        className="text-white cursor-pointer hover:text-[#3f79ff]"
                                        onClick={() =>
                                            handleSort(field as keyof RawLead)
                                        }
                                    >
                                        {
                                            {
                                                email: "Email Address",
                                                resource_title:
                                                    "Resource Downloaded",
                                                last_downloaded:
                                                    "Last Downloaded",
                                            }[field as keyof RawLead]
                                        }
                                        {sortField === field &&
                                            (sortDirection === "asc"
                                                ? " ↑"
                                                : " ↓")}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {filteredAndSortedLeads.length > 0 ? (
                                filteredAndSortedLeads.map((l) => (
                                    <TableRow
                                        key={l.id}
                                        className="border-white/10"
                                    >
                                        <TableCell className="text-white">
                                            {l.email || "N/A"}
                                        </TableCell>
                                        <TableCell className="text-[#cbd5e1]">
                                            {l.resource_title || "N/A"}
                                        </TableCell>
                                        <TableCell className="text-[#cbd5e1]">
                                            {l.last_downloaded
                                                ? new Date(
                                                      l.last_downloaded
                                                  ).toLocaleDateString()
                                                : "N/A"}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={3}
                                        className="text-center text-[#cbd5e1] py-8"
                                    >
                                        {leadRows?.length === 0
                                            ? "No leads available"
                                            : "No leads match your search criteria"}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-4 text-[#cbd5e1] text-sm">
                        <span>
                            Showing {from || 0}–{to || 0} of {total || 0}
                        </span>
                        <div className="flex space-x-2">
                            <Link
                                href={prev_page_url || "#"}
                                preserveState
                                preserveScroll
                                className={`p-2 rounded-md ${
                                    prev_page_url
                                        ? "bg-[#3f79ff] text-white hover:bg-[#3f79ff]/80"
                                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Link>

                            {links.map((link, index) => (
                                <Link
                                    key={`${link.label}-${index}`}
                                    href={link.url || "#"}
                                    preserveState
                                    preserveScroll
                                    className={`px-3 py-1 rounded-md ${
                                        link.active
                                            ? "bg-[#3f79ff] text-white"
                                            : "bg-white/10 text-[#cbd5e1]"
                                    }`}
                                >
                                    {link.label.replace(/\u00AB|\u00BB/g, "")}
                                </Link>
                            ))}

                            <Link
                                href={next_page_url || "#"}
                                preserveState
                                preserveScroll
                                className={`p-2 rounded-md ${
                                    next_page_url
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
        </>
    );
}

LeadsManager.layout = (page: React.ReactNode) => (
    <AdminControlLayout>{page}</AdminControlLayout>
);
