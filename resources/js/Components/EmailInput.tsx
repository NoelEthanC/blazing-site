"use client";

export default function EmailInput({ value, onChange, isValid, error }: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const showValidation = value.length > 0;
    const isValidFormat = emailRegex.test(value);

    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                Email Address
            </label>
            <div className="relative">
                <input
                    type="email"
                    autoFocus
                    id="email"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${
                        error
                            ? "border-red-300 focus:border-red-500"
                            : showValidation
                            ? isValidFormat
                                ? "border-green-300 focus:border-green-500"
                                : "border-red-300 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                    }`}
                    placeholder="Enter your email address"
                />

                {/* Validation Icon */}
                {showValidation && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        {isValidFormat ? (
                            <svg
                                className="h-5 w-5 text-green-500"
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
                        ) : (
                            <svg
                                className="h-5 w-5 text-red-500"
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
                        )}
                    </div>
                )}
            </div>

            {/* Validation Message */}
            {showValidation && !isValidFormat && !error && (
                <p className="mt-1 text-sm text-red-600">
                    Please enter a valid email address
                </p>
            )}

            {/* Server Error */}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
