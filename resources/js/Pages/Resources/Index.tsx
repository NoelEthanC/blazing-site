import { Head, Link, router, useForm } from "@inertiajs/react";
import SitePageLayout from "@/Layouts/SitePageLayout";
import ResourceCard from "@/Components/ResourceCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { ResourcesPageProps } from "@/types";
import { Input } from "@/Components/ui/input";
import { Search } from "lucide-react";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Index({ resources }: ResourcesPageProps) {
    const { data, links } = resources;
    const initial =
        new URLSearchParams(window.location.search).get("search") || "";
    const [searchTerm, setSearchTerm] = useState(initial);

    const debounced = useRef(
        debounce((val) => {
            router.get(
                route("resources.index"),
                { search: val },
                { preserveState: true, replace: true }
            );
        }, 500)
    ).current;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchTerm(val);
        debounced(val);
    };

    useEffect(() => {
        return () => {
            debounced.cancel();
        };
    }, []);
    return (
        <SitePageLayout>
            <Head>
                <title>Resources </title>
                <meta
                    name="description"
                    content="Explore guides, tutorials, and tools to help you build automations, web platforms, and AI workflows that move your business forward."
                />
            </Head>

            <div className="min-h-screen bg-midnight-blue py-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
                            Free Resources
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Download templates, guides, and tools to supercharge
                            your business growth.
                        </p>
                    </div>
                    <div className="mb-8 max-w-md mx-auto">
                        <div className="relative">
                            <Input
                                placeholder="Search for templates..."
                                value={searchTerm}
                                onChange={handleChange}
                                className="pl-10 rounded-full text-white  border-light-blue/20"
                            />
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Resources Grid */}
                    {data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                            {data.map((resource) => (
                                <ResourceCard
                                    key={resource.slug}
                                    resource={resource}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 animate-fade-in-up">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-500"
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
                            <h3 className="mt-4 text-base font-medium text-white">
                                No resources available
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                Check back soon for new resources.
                            </p>
                        </div>
                    )}

                    <div className="mt-12 flex justify-center space-x-2">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url || "#"}
                                className={`
                  px-3 py-1 rounded-md text-sm font-medium
                  ${
                      link.active
                          ? "bg-light-blue text-white"
                          : "bg-[#0e172a] text-gray-400 hover:bg-[#18273e]"
                  }
                `}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SitePageLayout>
    );
}

Index.layout = (page: any) => <GuestLayout children={page} />;
