"use client";

import { useEffect, useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import DownloadModal from "@/Components/DownloadModal";
import SitePageLayout from "@/Layouts/SitePageLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { PenTool } from "lucide-react";
import RelatedResources from "@/Components/RelatedResources";
import { trackResourcesDownload } from "@/events";

export default function Show({ resource, relatedResources, breadcrumbs }: any) {
    const [showModal, setShowModal] = useState(false);

    return (
        <SitePageLayout>
            <Head>
                <title>{resource.title} </title>
                <meta
                    name="description"
                    content={
                        resource.excerpt ||
                        "Download thos tempalte and watch this detailed guide on building AI-powered workflows, automations, and web tools that help your business grow."
                    }
                />
            </Head>

            <div className="min-h-screen bg-midnight-blue py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            {breadcrumbs.map((crumb: any, index: any) => (
                                <li key={index} className="flex items-center">
                                    {index > 0 && (
                                        <svg
                                            className="flex-shrink-0 h-5 w-5 text-gray-400 mx-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                    {crumb.url ? (
                                        <Link
                                            href={crumb.url}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-500 font-medium">
                                            {crumb.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* resource card */}

                    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_0.9fr] gap-8">
                        {/* Main Content Left */}
                        <div>
                            {/* resource card section here */}
                            <div className="bg-[#0e172a] border-[#1a2435] border group rounded-xl shadow-lg overflow-hidden ">
                                <div className="md:flex">
                                    {/* Resource Image */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={
                                                `/storage/${resource.thumbnail_path}` ||
                                                "/placeholder-resource.jpg"
                                            }
                                            alt={resource.title}
                                            className="w-full h-64 md:h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Resource Details */}
                                    <div className="md:w-1/2 p-8">
                                        <div className="mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] text-[#09111f] shadow-sm ">
                                                {resource.category?.name ||
                                                    "Resource"}
                                            </span>
                                        </div>

                                        <h1 className="text-3xl font-bold text-white mb-4">
                                            {resource.title}
                                        </h1>

                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {resource.description}
                                        </p>

                                        {/* File Info */}
                                        <div className="mb-6 space-y-2">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                File Type:{" "}
                                                {resource.file_type?.toUpperCase() ||
                                                    "JSON(zipped)"}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <PenTool className="w-4 h-4 mr-2" />
                                                Tool: {resource.tool}
                                            </div>
                                            {/* <div className="flex items-center text-sm text-gray-500">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                            />
                                        </svg>
                                        Downloads:{" "}
                                        {resource.download_count?.toLocaleString()}
                                    </div> */}
                                        </div>

                                        {/* Tags */}
                                        {resource.tags &&
                                            resource.tags.length > 0 && (
                                                <div className="mb-6">
                                                    <div className="flex flex-wrap gap-2">
                                                        {resource.tags.map(
                                                            (
                                                                tag: any,
                                                                index: any
                                                            ) => (
                                                                <span
                                                                    key={index}
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                        {/* Download Button */}
                                        {/* Action Buttons */}
                                        <div className="flex flex-col gap-3 mt-4">
                                            {/* Primary: Download */}
                                            <button
                                                onClick={() => {
                                                    trackResourcesDownload(
                                                        resource.title
                                                    );
                                                    setShowModal(true);
                                                }}
                                                className="w-full bg-[#3f79ff] hover:bg-[#3468db] text-white font-semibold py-3 px-5 rounded-lg flex items-center justify-center transition duration-200"
                                            >
                                                <svg
                                                    className="w-5 h-5 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                Download Template
                                            </button>

                                            {/* Secondary: Watch Guide */}
                                            {!resource.youtube_url && (
                                                <a
                                                    href={resource.video_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full border border-[#3f79ff] text-[#3f79ff] font-medium py-3 px-5 rounded-lg flex items-center justify-center hover:bg-[#3f79ff]/10 transition duration-200"
                                                >
                                                    🎥 Watch the Setup Guide
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Related Resources Right */}
                        <aside className="hidden lg:block">
                            {/* <h2 className="text-lg font-semibold text-white mb-4">
                                More Templates You'll Love
                            </h2> */}
                            <div className="space-y-4">
                                <RelatedResources
                                    resources={relatedResources}
                                />
                            </div>
                        </aside>
                    </div>
                    <div className="lg:hidden mt-12">
                        <RelatedResources resources={relatedResources} />
                    </div>
                </div>
            </div>

            {/* Download Modal */}
            <DownloadModal
                resource={resource}
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </SitePageLayout>
    );
}

Show.layout = (page: any) => <GuestLayout children={page} />;
