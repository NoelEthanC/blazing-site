import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BvNVYuhQ.js";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./DeleteUserForm-B8sxIPbT.js";
import UpdatePasswordForm from "./UpdatePasswordForm-fRaGwjAh.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-DKMfiuO5.js";
import "@headlessui/react";
import "react";
import "./TextInput-D1yy7HiT.js";
import "./InputLabel-3sCNhFCz.js";
import "./PrimaryButton-DDF1xnxF.js";
function Edit({
  mustVerifyEmail,
  status
}) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
