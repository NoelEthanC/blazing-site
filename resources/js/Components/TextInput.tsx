import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                "rounded-md border-light-blue/35 shadow-sm focus:border-sunray focus:ring-sunray dark:border-gray-700 bg-light-blue/25 text-white dark:bg-gray-900 dark:text-gray-300 dark:focus:border-sunray dark:focus:bg-sunray " +
                className
            }
            ref={localRef}
        />
    );
});
