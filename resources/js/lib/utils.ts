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
