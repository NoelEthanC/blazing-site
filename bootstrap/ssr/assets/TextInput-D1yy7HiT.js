import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
function InputError({
  message,
  className = "",
  ...props
}) {
  return message ? /* @__PURE__ */ jsx(
    "p",
    {
      ...props,
      className: "text-sm text-red-600 dark:text-red-400 " + className,
      children: message
    }
  ) : null;
}
const TextInput = forwardRef(function TextInput2({
  type = "text",
  className = "",
  isFocused = false,
  ...props
}, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, [isFocused]);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "rounded-md border-light-blue/35 shadow-sm focus:border-sunray focus:ring-sunray dark:border-gray-700 bg-light-blue/25 text-white dark:bg-gray-900 dark:text-gray-300 dark:focus:border-sunray dark:focus:bg-sunray " + className,
      ref: localRef
    }
  );
});
export {
  InputError as I,
  TextInput as T
};
