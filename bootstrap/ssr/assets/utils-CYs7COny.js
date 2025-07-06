import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const handleLinkClick = (link) => {
  var _a;
  (_a = document.getElementById(`${link}`)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
};
function formatDateTime(utcDateString) {
  const date = new Date(utcDateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}
export {
  cn as c,
  formatDateTime as f,
  handleLinkClick as h
};
