import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/landing-page/Navbar";
import Hero from "@/Components/landing-page/Hero";
import ToolsSection from "@/Components/landing-page/ToolsSection";
import BenefitsSection from "@/Components/landing-page/BenefitsSection";
import ProcessSection from "@/Components/landing-page/ProcessSection";
import ContactSection from "@/Components/landing-page/ContactSection";
import Footer from "@/Components/landing-page/Footer";
import ToolsMarquee from "@/Components/landing-page/ToolsMarquee";
import { Watch } from "lucide-react";
import WatchUsBuildSection from "@/Components/landing-page/WatchUsBuild";
import ResourcesSection from "@/Components/landing-page/ResourcesSection";
import Guest from "@/Layouts/GuestLayout";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Home({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-midnight-blue overflow-hidden">
                <Hero />
                <ToolsMarquee />
                <ToolsSection /> {/*this is services section */}
                <WatchUsBuildSection videoUrl="https://www.youtube.com/embed?v=dQw4w9WgXcQ" />
                <ResourcesSection />
                <BenefitsSection />
                <ProcessSection />
                <ContactSection />
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
