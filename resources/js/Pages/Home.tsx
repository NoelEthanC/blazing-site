import { PageProps, Resource } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
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
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
    const { props } = usePage<PageProps>();

    // @ts-ignore
    const { auth, flash } = props;
    const { toast } = useToast();

    useEffect(() => {
        if (flash?.message) {
            toast({
                title: `${flash?.message}`,
            });
            flash.message = null; // Clear flash after showing
        }
    }, [flash, toast]);

    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Blazing Automations helps you achieve your goals with smart AI agents, automation workflows, and custom web development solutions. Build the systems your business needs to grow."
                />
            </Head>

            <div className="min-h-screen bg-midnight-blue overflow-hidden">
                <Hero />
                <ToolsMarquee />
                <ToolsSection /> {/*this is services section */}
                <WatchUsBuildSection videoUrl="https://www.youtube.com/embed?v=dQw4w9WgXcQ" />
                <ResourcesSection
                    latest_resources={props.resources as Resource[]}
                />
                <BenefitsSection />
                <ProcessSection />
                <ContactSection />
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
