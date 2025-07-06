import React from "react";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import AnalyticsProvider from "./Context/AnalyticsContext";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        // resolve: (name) => {
        //     const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
        //     //@ts-ignore
        //     const page = pages[`./Pages/${name}.tsx`]?.default;
        //     if (!page) throw new Error(`SSR Page not found: ${name}`);
        //     return page;
        // },
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob("./Pages/**/*.tsx")
            ),
        setup: ({ App, props }) => (
            <AnalyticsProvider session_id={props.initialPage?.props.session_id}>
                <App {...props} />
            </AnalyticsProvider>
        ),
    })
);
