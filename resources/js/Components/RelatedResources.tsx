import { Link } from "@inertiajs/react";

export default function RelatedResources({ resources }: { resources: any[] }) {
    if (!resources || resources.length === 0) return null;

    return (
        <section className="mt-12 lg:mt-0">
            <h2 className="text-white text-lg font-semibold mb-4">
                More Templates You'll Love
            </h2>

            <div className="space-y-4">
                {resources.map((item) => (
                    <Link
                        key={item.id}
                        href={`/resources/${item.slug}`}
                        className="flex gap-4 items-start bg-[#0e172a]/45 hover:bg-[#18273e] rounded-xl p-3 transition duration-200 group"
                    >
                        <img
                            src={
                                `/storage/${item.thumbnail_path}` ||
                                "/placeholder-resource.jpg"
                            }
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded-md flex-shrink-0 border border-[#1f2a3a]"
                        />

                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-white leading-tight line-clamp-2 group-hover:text-sunray">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                {item.category?.name || "Template"}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
