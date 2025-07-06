import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/landing-page/Footer";
import Navbar from "@/Components/landing-page/Navbar";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <>
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
                            "We build automation systems and web solutions to help you achieve your business goals.",
                    })}
                </script>
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-midnight-blue pt-6 sm:justify-center sm:pt-0 ">
                <div className=" w-full overflow-hidden bg-midnight-blue ">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}
