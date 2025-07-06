import { Head } from "@inertiajs/react";
import GuestLayout from "./GuestLayout";

export default function SitePageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-midnight-blue">
            {/* <nav className="bg-white shadow-sm border-b  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="text-xl font-bold text-gray-900"
                            >
                                Your Brand
                            </a>
                        </div>
                        <div className="flex items-center space-x-8">
                            <a
                                href="/resources"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Resources
                            </a>
                        </div>
                    </div>
                </div>
            </nav> */}

            <Head>
                <meta property="og:site_name" content="Blazing Automations" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@noelethan" />
                <meta
                    property="og:url"
                    content="https://blazingautomations.com/"
                />
                <meta
                    property="og:image"
                    content="https://blazingautomations.com/images/og-default.jpg"
                />
                <meta
                    name="twitter:image"
                    content="https://blazingautomations.com/images/og-default.jpg"
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Blazing Automations",
                        url: "https://blazingautomations.com",
                        logo: "https://blazingautomations.com/public/images/logo.png",
                        description:
                            "We build AI automation systems and web solutions to help you achieve your business goals.",
                    })}
                </script>
            </Head>

            <main>{children}</main>
        </div>
    );
}

SitePageLayout.layout = (page: React.ReactNode) => (
    <GuestLayout children={page} />
);
