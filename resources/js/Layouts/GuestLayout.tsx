import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/landing-page/Footer";
import Navbar from "@/Components/landing-page/Navbar";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div className=" w-full overflow-hidden bg-midnight-blue dark:bg-gray-800">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}
