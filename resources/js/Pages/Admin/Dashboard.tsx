import { Deferred, router, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AdminDashboard } from "@/Components/admin/AdminDashboard";
import { AdminControlLayout } from "@/Layouts/AdminControlLayout";

type DashboardProps = {
    overview: any;
    resources: any;
    leads: any;
    tools: any;
    blogPosts: any;
};

export default function Dashboard({
    overview,
    resources,
    leads,
    tools,
    blogPosts,
}: DashboardProps) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <AdminControlLayout />
            {/* <AdminDashboard
                overview={overview}
                resources={resources}
                leads={leads}
                tools={tools}
                blogPosts={blogPosts}
                reloadTab={(tab: string) => {
                    // Use Inertia's router to reload the current page with the new tab
                    router.reload({
                        only: [tab],
                        // preserveState: true,
                        // preserveScroll: true,
                        data: { tab },
                    });
                }}
            /> */}
        </AuthenticatedLayout>
    );
}
