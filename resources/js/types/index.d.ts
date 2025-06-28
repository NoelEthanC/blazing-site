export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export type DashboardProps = {
    overview: any;
    resources: any;
    leads: any;
    tools: any;
    blogPosts: any;
};

export interface Resource {
    id: string;
    title: string;
    description: string;
    file_url: string;
    category: string;
    tags: string[];
    download_count: number;
    tool_used: string;
    guide_url: string;
    video_url: string;
    thumbnail_url: string;
    resource_type: string;
    file_name: string;
}

export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from?: number;
    last_page: number;
    last_page_url: string;
    links: { url: string | null; label: string; active: boolean }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to?: number;
    total: number;
}
export interface ResourceCategory {
    id: string;
    name: string;
    description: string;
    resources: Resource[];
}

interface ResourcesPageProps {
    resources: {
        data: any[];
        current_page: number;
        last_page: number;
        links: { url: string | null; label: string; active: boolean }[];
    };
}
