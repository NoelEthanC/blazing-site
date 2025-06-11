import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
    const socialLinks = [
        {
            icon: Twitter,
            href: "https://twitter.com/blazingautomations",
            label: "Twitter",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/company/blazingautomations",
            label: "LinkedIn",
        },
        {
            icon: Github,
            href: "https://github.com/blazingautomations",
            label: "GitHub",
        },
        {
            icon: Mail,
            href: "mailto:hello@blazingautomations.com",
            label: "Email",
        },
    ];

    return (
        <footer className="py-12 px-4 border-t bg-midnight-blue border-gray-text/20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h3 className="font-sora font-bold text-2xl text-white mb-2">
                            Blazing Automations
                        </h3>
                        <p className="text-slate-text">
                            Transforming businesses with AI automation and
                            no-code solutions.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-light-blue/25 rounded-lg flex items-center justify-center text-light-blue hover:text-sunray hover:bg-light-blue/20 transition-all duration-300"
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-text/20 text-center">
                    <p className="text-gray-text text-sm">
                        © {new Date().getFullYear()} Blazing Automations. All
                        rights reserved.
                        <span className="mx-2">•</span>
                        <a
                            href="#"
                            className="text-light-blue hover:text-sunray transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <span className="mx-2">•</span>
                        <a
                            href="#"
                            className="text-light-blue hover:text-sunray transition-colors"
                        >
                            Terms of Service
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
