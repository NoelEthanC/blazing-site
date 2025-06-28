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

            <main>{children}</main>
        </div>
    );
}

SitePageLayout.layout = (page: React.ReactNode) => (
    <GuestLayout children={page} />
);
