"use client";

import { useState, useEffect } from "react";
import { router, useForm } from "@inertiajs/react";
import EmailInput from "./EmailInput";

export default function DownloadModal({ resource, isOpen, onClose }: any) {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const { data, setData, post, patch, processing, errors, reset, setError } =
        useForm({
            email: "",
            action: "send_email", // default action
        });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        const isValid = emailRegex.test(email);
        setIsEmailValid(isValid);
        setData("email", email);
    }, [email]);

    const handleDownloadNow = () => {
        if (!isEmailValid) return;

        router.visit(route("resources.download", resource.slug), {
            method: "patch",
            data: {
                email,
                action: "download_now",
            },
            onSuccess: (response) => {
                if (response.props?.flash?.success) {
                    // Trigger download
                    const link = document.createElement("a");
                    link.href = response.props.flash.downloadUrl;
                    link.download = resource.file_name || resource.title;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    onClose();
                } else if (!response.props?.flash?.success) {
                    console.log("first", response.props.flash);
                    setError(
                        "resource",
                        response.props.flash.error ||
                            "oops! Download failed. Please, Try again!"
                    );
                    // display error message
                }
            },
            onError: (errors) => {
                console.error("Download failed:", errors);
                // display error message
                setError(errors);
                setShowSuccess(false);
                setSuccessMessage(
                    "Failed to download resource. Please try again."
                );
            },
        });
    };

    const handleSendToEmail = () => {
        if (!isEmailValid) return;
        patch(route("resources.download", resource.slug), {
            // onFinish: (visit) => {
            //     // console.log(visit);

            //     setSuccessMessage(
            //         "Sending resource to your email, please wait..."
            //     );
            // },
            onSuccess: (response) => {
                // console.log("response", response);
                setShowSuccess(true);
                setSuccessMessage(
                    "Resource sent to your email successfully! Check your inbox."
                );
                setTimeout(() => {
                    onClose();
                    setShowSuccess(false);
                    setSuccessMessage("");
                    reset();
                    setEmail("");
                }, 3000);
            },
            onError: (errors) => {
                console.error("Email send failed:", errors);
            },
        });
    };

    const handleClose = () => {
        onClose();
        setShowSuccess(false);
        setSuccessMessage("");
        reset();
        setEmail("");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#09111f] rounded-2xl max-w-md w-full p-6 shadow-xl border border-[#1a2435] relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                        {showSuccess ? "✅ Success!" : "Get Your Free Template"}
                    </h3>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-[#3f79ff] transition duration-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {showSuccess ? (
                    <div className="text-center animate-fade-in">
                        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#fcbf5b1a] mb-4">
                            <svg
                                className="h-6 w-6 text-[#fcbf5b]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-300">
                            {successMessage}
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Resource Title & Instruction */}
                        <div className="mb-6 animate-fade-in">
                            <h4 className="font-semibold text-white mb-2">
                                {resource.title}
                            </h4>
                            <p className="text-sm text-sunray">
                                Enter your email address to download this
                                template.
                            </p>
                        </div>

                        {/* Email Input */}
                        <div className="mb-6 animate-fade-in">
                            <EmailInput
                                value={email}
                                onChange={setEmail}
                                isValid={isEmailValid}
                                error={errors.email}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 animate-fade-in">
                            <button
                                onClick={handleDownloadNow}
                                disabled={!isEmailValid || processing}
                                className={`w-full py-3 px-4 rounded-xl font-medium transition duration-200 flex items-center justify-center ${
                                    isEmailValid && !processing
                                        ? "bg-[#3f79ff] hover:bg-[#3468db] text-white"
                                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                {/* Icon + Spinner */}
                                {processing &&
                                data.action === "download_now" ? (
                                    <Spinner />
                                ) : (
                                    <DownloadIcon />
                                )}
                                Download Now
                            </button>

                            <button
                                onClick={handleSendToEmail}
                                disabled={!isEmailValid || processing}
                                className={`w-full py-3 px-4 rounded-xl font-medium transition duration-200 flex items-center justify-center border ${
                                    isEmailValid && !processing
                                        ? "border-[#3f79ff] text-[#3f79ff] hover:bg-[#3f79ff1a]"
                                        : "border-gray-700 text-gray-500 cursor-not-allowed"
                                }`}
                            >
                                {processing && data.action === "send_email" ? (
                                    <Spinner />
                                ) : (
                                    <MailIcon />
                                )}
                                Send to Email
                            </button>
                        </div>

                        {/* Errors */}
                        {(errors.email || errors?.resource) && (
                            <div className="mt-4 p-3 bg-[#ca66781a] border border-[#ca6678] rounded-lg animate-fade-in">
                                <p className="text-sm text-[#ca6678]">
                                    {errors.email || errors?.resource}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

const Spinner = () => (
    <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
    </svg>
);

const DownloadIcon = () => (
    <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
    </svg>
);

const MailIcon = () => (
    <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
);
