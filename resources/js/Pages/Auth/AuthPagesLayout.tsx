import React from "react";

const AuthPagesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-md mx-auto mt-0 bg-midnight-blue py-28 md:py-44  h-auto">
            {children}
        </div>
    );
};

export default AuthPagesLayout;
