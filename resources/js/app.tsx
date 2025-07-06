import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import AnalyticsProvider from "./Context/AnalyticsContext";

const appName = import.meta.env.VITE_APP_NAME || "Blazing Automations";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),

    setup({ el, App, props }) {
        const inertiaProps = props.initialPage.props;
        hydrateRoot(
            el,
            <AnalyticsProvider session_id={inertiaProps.session_id}>
                <App {...props} />
            </AnalyticsProvider>
        );
    },
    progress: {
        color: "#fcbf5b",
    },
});

// import './bootstrap';
// import '../css/app.css';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createRoot, hydrateRoot } from 'react-dom/client';

// createInertiaApp({
//   resolve: (name) =>
//     resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
//   setup({ el, App, props }) {
//     if (import.meta.env.PROD) {
//       hydrateRoot(el, <App {...props} />);
//     } else {
//       createRoot(el).render(<App {...props} />);
//     }
//   },
// });
