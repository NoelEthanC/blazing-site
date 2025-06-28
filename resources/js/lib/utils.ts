import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const handleLinkClick = (link: string) => {
    // console.log(link, "Book consultation clicked");
    document.getElementById(`${link}`)?.scrollIntoView({ behavior: "smooth" });
    // change the url to the new # link
    // window.history.pushState(null, "", `#${link}`);
};

export function formatDateTime(utcDateString: string): string {
    const date = new Date(utcDateString);
    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
}
