import { Link } from "@inertiajs/react";

export default function ResourceCard({ resource }: any) {
    console.log("resource", resource);
    return (
        <div className="bg-[#0e172a] rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden border border-[#1a2435]">
            <div className="aspect-w-16 aspect-h-9">
                <img
                    src={
                        `/storage/${resource.thumbnail_path}` ||
                        "/placeholder-resource.jpg"
                    }
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                />
            </div>

            <div className="p-5">
                {/* Category + Downloads */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] text-[#09111f] shadow-sm">
                        {resource.category?.name || "Resource"}
                    </span>

                    <div className="flex items-center text-xs text-gray-400">
                        <svg
                            className="w-4 h-4 mr-1"
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
                        {resource.download_count}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {resource.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {resource.description}
                </p>

                {/* Tags */}
                {resource.tags && resource.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                        {resource.tags
                            .slice(0, 3)
                            .map((tag: any, index: any) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 text-[11px] font-medium rounded bg-[#1c2535] text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        {resource.tags.length > 3 && (
                            <span className="inline-block px-2 py-1 text-[11px] font-medium rounded bg-[#1c2535] text-gray-300">
                                +{resource.tags.length - 3}
                            </span>
                        )}
                    </div>
                )}

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link
                        href={`/resources/${resource.slug}`}
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md border border-[#3f79ff] text-[#3f79ff] hover:bg-[#3f79ff]/10 transition duration-200"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8"
                            />
                        </svg>
                        Download
                    </Link>

                    {resource.video_url ? (
                        <a
                            // href={`https://www.youtube.com/watch?v=IeZbk2-2obE`}
                            href={resource.youtube_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold rounded-md text-[#09111f] bg-gradient-to-r from-[#ca6678] to-[#fcbf5b] hover:opacity-90 transition duration-200"
                        >
                            🎥 Watch Guide
                        </a>
                    ) : (
                        <span className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold rounded-md bg-gray-700 text-gray-400 cursor-not-allowed">
                            No Guide
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
