import ReactGA from "react-ga4";

type TrackedEvent = {
    name: string;
    params: object;
};

const track = (ev: TrackedEvent) => {
    ReactGA.event(ev.name, ev.params);
    console.log("tracked google ecvent:", ev);
};

export const trackResourcesDownload = (res: string) => {
    const ev: TrackedEvent = {
        name: "select_content",
        params: {
            content_type: "resourcec download",
            content_id: `${res}`,
        },
    };
    track(ev);
};
