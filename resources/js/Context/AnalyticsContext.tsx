import React, {
    Context,
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
} from "react";
import ReactGA from "react-ga4";

type Props = {
    session_id: string;
};

export const AnalyticsContext: Context<null> = createContext(null);

//@ts-ignore
const AnalyticsProvider: FC<PropsWithChildren<Props>> = ({
    children,
    session_id,
}: {
    children: React.ReactNode;
    session_id: string;
}) => {
    useEffect(() => {
        const config: any = import.meta.env;
        ReactGA.initialize(config.VITE_GOOGLE_MEASUREMENT_ID, {
            gaOptions: {
                userId: session_id,
            },
        });
    }, []);
    return (
        <AnalyticsContext.Provider value={null}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export default AnalyticsProvider;
