import { jsx, jsxs } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-D1yy7HiT.js";
import { I as InputLabel } from "./InputLabel-3sCNhFCz.js";
import { G as GuestLayout } from "./GuestLayout-CH4uyFw4.js";
import { useForm, Head, Link } from "@inertiajs/react";
import AuthPagesLayout from "./AuthPagesLayout-B7dzccG-.js";
import { B as Button } from "./button-wnFVC-UW.js";
import "react";
import "lucide-react";
import "./Navbar-BssyNonJ.js";
import "./utils-CYs7COny.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Checkbox({
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 " + className
    }
  );
}
function Login({
  status,
  canResetPassword
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsx(GuestLayout, { children: /* @__PURE__ */ jsxs(AuthPagesLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 block", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData(
              "remember",
              e.target.checked || false
            )
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600 dark:text-gray-400", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-end", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "rounded-md text-sm text-gray-400 underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "ms-4 bg-light-blue hover:bg-light-blue/80 font-bold rounded-full px-10 uppercase tracking-wider",
            disabled: processing,
            children: "Log in"
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  Login as default
};
