import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { handleLinkClick } from "@/lib/utils";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { url } = usePage();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Services", href: "/#services" },
        { label: "Resources", href: "/resources" },
        { label: "Contact", href: "/#contact" },
    ];

    // Function to close the mobile menu when a link is clicked`
    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };
    // Function to handle click outside the menu
    const handleClickOutside = (event: MouseEvent) => {
        if (isMenuOpen && !event.target) {
            setIsMenuOpen(false);
        }
    };
    // Add event listener for clicks outside the menu

    // TODO: Implement click outside functionality
    //TODO:

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-8">
            <div className="bg-midnight-blue/70  backdrop-blur-sm border border-gray-text/20 rounded-2xl  lg:rounded-full px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 w-fit">
                        <div className="w-8 h-8 bg-gradient-upstream rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="font-sora font-bold text-lg text-white w-auto"
                        >
                            Blazing Automations
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 ml-8">
                        {navItems.map((item) => (
                            <Link
                                href={item.href}
                                onClick={() => handleLinkClick(item.href)}
                                key={item.label}
                                className="text-slate-text hover:text-white transition-colors font-work-sans text-sm"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block ml-6">
                        {url !== "/" && !url.includes("/#") ? (
                            <a
                                href={`https://www.youtube.com/@BlazingAutomations`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-upstream text-white font-work-sans font-semibold px-4 py-2  rounded-full hover-glow text-base"
                            >
                                Watch Us Build
                            </a>
                        ) : (
                            <Button
                                onClick={() => handleLinkClick("resources")}
                                className="gradient-upstream text-white font-work-sans font-semibold px-4 py-2 rounded-full hover-glow text-sm"
                            >
                                Get Our Templates
                                <span className="ml-2 bg-sunray text-midnight-blue px-2 py-1 rounded-full text-xs font-bold">
                                    FREE
                                </span>
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white ml-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-text/10">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-slate-text hover:text-white transition-colors font-work-sans text-sm"
                                    onClick={() => {
                                        handleLinkClick(item.href);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button
                                onClick={() =>
                                    handleLinkClick(
                                        url !== "/" ? "/resources" : "resources"
                                    )
                                }
                                className="gradient-upstream text-white font-work-sans font-semibold px-4 py-2 rounded-full hover-glow w-full text-sm"
                            >
                                Get Templates
                                <span className="ml-2 bg-sunray text-midnight-blue px-2 py-1 rounded-full text-xs font-bold">
                                    FREE
                                </span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
