var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React, { forwardRef, useRef, useEffect, useState, createContext, useContext, Fragment as Fragment$1 } from "react";
import { Link, useForm, Head as Head$1, usePage, createInertiaApp } from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha";
import pdfMake from "pdfmake/build/pdfmake.js";
import { format } from "date-fns";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Transition, Dialog } from "@headlessui/react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es/index.js";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("img", { src: "./img/BixerLogo2.webp", className: "mx-auto w-32 h-32", alt: "" }) });
}
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 dark:text-red-400 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 dark:text-gray-300 ` + className, children: value ? value : children });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " + className,
      ref: input
    }
  );
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head$1, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
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
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head$1, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 " + className
    }
  );
}
const css$2 = "";
function Contenedor({ children, className }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "text-center max-w-sm xl:w-2/4 lg:w-full lg:max-w-screen-xl", children: /* @__PURE__ */ jsx("div", { className: "custom-container grid gap-5 rounded-xl py-10 px-3 lg:p-10 sm:mx-2", children }) }) });
}
const css$1 = "";
function Boton({ text, url, type, children, onClick }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("button", { onClick, className: "mt-5", type, children: /* @__PURE__ */ jsxs("a", { href: url, className: "btn-neon mx-auto relative inline-block uppercase rounded-full px-4 py-1 tracking-widest no-underline text-2xl overflow-hidden font-bold", children: [
    /* @__PURE__ */ jsx("span", { className: "rounded-full" }),
    /* @__PURE__ */ jsx("span", { className: "rounded-full" }),
    /* @__PURE__ */ jsx("span", { className: "rounded-full" }),
    /* @__PURE__ */ jsx("span", { className: "rounded-full" }),
    text,
    children
  ] }) }) });
}
function Login$1({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Login" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "menu, menu principa, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Iniciar sesión" }),
      /* @__PURE__ */ jsx("p", { children: "Porfavor, ingresa tus datos" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid gap-4 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "correo", children: "Correo" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("email", e.target.value),
              placeholder: "Ingresa tu correo",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "password", children: "Contraseña" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-10 rounded-md text-black",
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value),
              placeholder: "Ingresa tu contraseña",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center mx-5", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              name: "remember",
              checked: data.remember,
              onChange: (e) => setData("remember", e.target.checked)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "mx-1", children: "Recordarme" })
        ] }),
        /* @__PURE__ */ jsx(Boton, { type: "submit", text: "Iniciar sesion" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "¿No tienes una cuenta? ",
          /* @__PURE__ */ jsx("a", { href: route("register"), children: /* @__PURE__ */ jsx("p", { className: "underline text-[#18ead8]", children: "Registrate aquí" }) })
        ] }),
        /* @__PURE__ */ jsx("a", { href: route("bienvenida"), children: /* @__PURE__ */ jsx("img", { className: "mx-auto w-24 h-24", src: "./img/BixerLogo2.webp", alt: "" }) })
      ] }) })
    ] }) })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login$1
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    telefono: "",
    professional_id: "",
    specialty: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  const key = "6LceOiopAAAAAETuhhN3lD4OLDys4mgmplcNpL6D";
  const [capchatIsDone, setCaptchaDone] = useState(false);
  function onChange() {
    console.log("changed");
    setCaptchaDone(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Registro" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "registro, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx(Head$1, { title: "Registro" }),
    /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center py-5", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Registro" }),
      /* @__PURE__ */ jsx("p", { children: "Porfavor, ingresa tus datos" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid gap-4 text-left mt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "name", children: "Nombre" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              type: "text",
              id: "name",
              name: "name",
              value: data.name,
              autoComplete: "name",
              isFocused: true,
              onChange: (e) => setData("name", e.target.value),
              placeholder: "Ingresa tu nombre",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "lastname", children: "Apellidos" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              type: "text",
              placeholder: "Ingresa tus apellidos",
              id: "lastname",
              name: "lastname",
              value: data.lastname,
              autoComplete: "lastname",
              isFocused: true,
              onChange: (e) => setData("lastname", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.lastname, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "email", children: "Correo electronico" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              type: "email",
              placeholder: "Ingresa tu correo electronico",
              id: "email",
              name: "email",
              value: data.email,
              autoComplete: "username",
              onChange: (e) => setData("email", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "password", children: "Contraseña" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              type: "password",
              placeholder: "Crea una contraseña",
              id: "password",
              name: "password",
              value: data.password,
              autoComplete: "new-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "password_confirmation", children: "Confirma tu contraseña" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              type: "password",
              placeholder: "Confirma tu contraseña",
              id: "password_confirmation",
              name: "password_confirmation",
              value: data.password_confirmation,
              autoComplete: "new-password",
              onChange: (e) => setData("password_confirmation", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "telefono", children: "Ingresa tu telefono" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-10 rounded-md text-black",
              type: "text",
              placeholder: "Numero de telefono",
              id: "telefono",
              name: "telefono",
              value: data.tel,
              onChange: (e) => setData("telefono", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.telefono, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "professional_id", children: "Ingresa tu cedula profesional" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-10 rounded-md text-black",
              type: "text",
              placeholder: "Cedula Profesional",
              id: "professional_id",
              name: "professional_id",
              value: data.professional_id,
              onChange: (e) => setData("professional_id", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.professional_id, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "specialty", children: "Ingresa tu especialidad" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-10 rounded-md text-black",
              type: "text",
              placeholder: "Especialidad",
              id: "specialty",
              name: "specialty",
              value: data.specialty,
              onChange: (e) => setData("specialty", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.specialty, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center justify-center", children: /* @__PURE__ */ jsx(
          ReCAPTCHA,
          {
            sitekey: key,
            onChange
          }
        ) }),
        capchatIsDone && /* @__PURE__ */ jsx(Boton, { type: "submit", text: "Registrate" })
      ] }),
      /* @__PURE__ */ jsx(Boton, { url: route("login"), text: "Regresar" }),
      /* @__PURE__ */ jsx("img", { className: "mx-auto w-24 h-24", src: "./img/BixerLogo2.webp", alt: "Logo Bixer" })
    ] }) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head$1, { title: "Reset Password" }),
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
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Restablecer la contraseña" }) })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head$1, { title: "Verificacion de email" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "Gracias por registrarte! Antes de comenzar, ¿podría verificar su dirección de correo electrónico haciendo clic en el enlace que le acabamos de enviar por correo electrónico? Si no recibió el correo electrónico, con gusto le enviaremos otro." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400", children: "Se ha enviado un nuevo enlace de verificación a la dirección de correo electrónico que proporcionó durante el registro." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between space-x-5", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Reenviar correo electrónico de verificación" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
          children: "Cerrar sesión"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
class PDFGenerator extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "generatePDF", () => {
      const {
        doctorName,
        doctorLastName,
        doctorProfessional_id,
        doctorSpecialty,
        doctorPhone,
        pacienteName,
        pacienteLastName,
        pacienteLastName2,
        pacienteBirth,
        pacienteWeigth,
        pacienteHeigth,
        observations,
        suffering,
        chartImage,
        status
      } = this.props;
      if (status === "paciente") {
        const documentDefinition = {
          header: function(currentPage, pageCount, pageSize) {
            return [
              {
                text: "Morelia, Michoacan",
                fontSize: 14,
                bold: true,
                alignment: "right",
                margin: [0, 5, 20, 0]
              },
              {
                text: format(/* @__PURE__ */ new Date(), "dd/MM/yyyy HH:mm"),
                fontSize: 12,
                alignment: "right",
                margin: [0, 0, 20, 5]
              }
            ];
          },
          content: [
            //Titulo
            {
              text: "CONSULTA MEDICA",
              fontSize: 18,
              bold: true,
              italics: "center",
              margin: [0, 0, 0, 10]
            },
            //Subtitulo especialista
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Especialista",
                italics: true,
                bold: true,
                width: "*",
                fontSize: 14,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Lic. " + doctorLastName + " " + doctorName,
                width: "*",
                fontSize: 12,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              columns: [
                {
                  text: "Cedula profesional: " + doctorProfessional_id,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Especialidad: " + doctorSpecialty,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Telefono: " + doctorPhone,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                }
              ],
              margin: [0, 0, 0, 10]
            },
            //Subtitulo paciente
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Paciente",
                italics: true,
                bold: true,
                width: "*",
                fontSize: 14,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [
                {
                  text: "Nombre(s): " + pacienteName,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Apellido P.: " + pacienteLastName,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Apellido M.: " + pacienteLastName2,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                }
              ],
              margin: [0, 0, 0, 10]
            },
            {
              columns: [
                {
                  text: "Nacimiento: " + pacienteBirth,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Peso: " + pacienteWeigth + " kg",
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Altura: " + pacienteHeigth + " cm",
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                }
              ],
              margin: [0, 0, 0, 10]
            },
            //Subtitulo observaciones y padecimiento
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Observaciones",
                italics: true,
                bold: true,
                width: "*",
                fontSize: 14,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Padecimiento: " + suffering,
                width: "*",
                fontSize: 12,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              columns: [{
                text: "Observaciones: " + observations,
                width: "*",
                fontSize: 12,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            }
            /* GRAFICA - Aun por implementar */
            /*
            {
                canvas: [{
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 515,
                    y2: 0,
                    lineWidth: .75,
                    lineColor: '#000000'
                }],
                margin: [0, 0, 0, 10],
                alignment: 'center'
            },
            {
                columns: [{
                    text: 'Grafica',
                    italics: true,
                    bold: true,
                    width: '*',
                    fontSize: 14,
                    alignment: 'center'
                }],
                margin: [0, 0, 0, 10]
            },
            {
                canvas: [{
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 515,
                    y2: 0,
                    lineWidth: .75,
                    lineColor: '#000000'
                }],
                margin: [0, 0, 0, 10],
                alignment: 'center'
            },
            {
                columns: [{
                    text: 'Grafica',
                    image: chartImage, 
                    width: 500,
                }],
                margin: [0, 0, 0, 10]
            },*/
          ],
          footer: function(currentPage, pageCount) {
            return [
              {
                canvas: [{
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: 515,
                  y2: 0,
                  lineWidth: 0.75,
                  lineColor: "#000000"
                }],
                margin: [0, 0, 0, 10],
                alignment: "center"
              },
              {
                text: "Pagina " + currentPage.toString() + " de " + pageCount,
                alignment: "center",
                fontSize: 10,
                margin: [0, 10]
              }
            ];
          }
        };
        var pdfDoc = pdfMake.createPdf(documentDefinition);
        format(/* @__PURE__ */ new Date(), "dd/MM/yyyy HH:mm").toString() + "_Bixer";
        pdfDoc.open();
      } else if (status === "graficador") {
        const documentDefinition = {
          header: function(currentPage, pageCount, pageSize) {
            return [
              {
                text: "Morelia, Michoacan",
                fontSize: 14,
                bold: true,
                alignment: "right",
                margin: [0, 5, 20, 0]
              },
              {
                text: format(/* @__PURE__ */ new Date(), "dd/MM/yyyy HH:mm"),
                fontSize: 12,
                alignment: "right",
                margin: [0, 0, 20, 5]
              }
            ];
          },
          content: [
            //Titulo
            {
              text: "CONSULTA MEDICA",
              fontSize: 18,
              bold: true,
              italics: "center",
              margin: [0, 0, 0, 10]
            },
            //Subtitulo especialista
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Especialista",
                italics: true,
                bold: true,
                width: "*",
                fontSize: 14,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Lic. " + doctorLastName + " " + doctorName,
                width: "*",
                fontSize: 12,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              columns: [
                {
                  text: "Cedula profesional: " + doctorProfessional_id,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Especialidad: " + doctorSpecialty,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                },
                {
                  text: "Telefono: " + doctorPhone,
                  width: "*",
                  fontSize: 12,
                  alignment: "center"
                }
              ],
              margin: [0, 0, 0, 10]
            },
            //Subtitulo observaciones y padecimiento
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Observaciones",
                italics: true,
                bold: true,
                width: "*",
                fontSize: 14,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              canvas: [{
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 0.75,
                lineColor: "#000000"
              }],
              margin: [0, 0, 0, 10],
              alignment: "center"
            },
            {
              columns: [{
                text: "Padecimiento: " + suffering,
                width: "*",
                fontSize: 12,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            },
            {
              columns: [{
                text: "Observaciones: " + observations,
                width: "*",
                fontSize: 12,
                alignment: "center"
              }],
              margin: [0, 0, 0, 10]
            }
            /* GRAFICA - Aun por implementar */
            /*
            {
                canvas: [{
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 515,
                    y2: 0,
                    lineWidth: .75,
                    lineColor: '#000000'
                }],
                margin: [0, 0, 0, 10],
                alignment: 'center'
            },
            {
                columns: [{
                    text: 'Grafica',
                    italics: true,
                    bold: true,
                    width: '*',
                    fontSize: 14,
                    alignment: 'center'
                }],
                margin: [0, 0, 0, 10]
            },
            {
                canvas: [{
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 515,
                    y2: 0,
                    lineWidth: .75,
                    lineColor: '#000000'
                }],
                margin: [0, 0, 0, 10],
                alignment: 'center'
            },
            {
                columns: [{
                    text: 'Grafica',
                    image: chartImage, 
                    width: 500,
                }],
                margin: [0, 0, 0, 10]
            },*/
          ],
          footer: function(currentPage, pageCount) {
            return [
              {
                canvas: [{
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: 515,
                  y2: 0,
                  lineWidth: 0.75,
                  lineColor: "#000000"
                }],
                margin: [0, 0, 0, 10],
                alignment: "center"
              },
              {
                text: "Pagina " + currentPage.toString() + " de " + pageCount,
                alignment: "center",
                fontSize: 10,
                margin: [0, 10]
              }
            ];
          }
        };
        var pdfDoc = pdfMake.createPdf(documentDefinition);
        format(/* @__PURE__ */ new Date(), "dd/MM/yyyy HH:mm").toString() + "_Bixer";
        pdfDoc.open();
      }
    });
  }
  render() {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Boton, { onClick: this.generatePDF, text: "Generar PDF" }) });
  }
}
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
function LinesChart({ ejex, ejey, onChartImageReady }) {
  const horaActual = () => format(/* @__PURE__ */ new Date(), "HH:mm:ss");
  const midata = {
    labels: ejex.map((_, index) => horaActual()),
    datasets: [
      {
        label: "Eje X",
        data: ejex,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)"
      },
      {
        label: "Eje Y",
        data: ejey,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(54, 162, 235)",
        pointBackgroundColor: "rgba(54, 162, 235)"
      }
    ]
  };
  const mioptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Tiempo"
        }
      },
      y: {
        title: {
          display: true,
          text: "Muestreos"
        },
        // Configuración del eje Y para incluir valores negativos
        beginAtZero: false
      }
    }
  };
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    new Chart(context, {
      type: "line",
      data: midata,
      options: mioptions
    });
    const chartImage = canvas.toDataURL("image/png");
    onChartImageReady(chartImage);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, [ejex, ejey]);
  return /* @__PURE__ */ jsx(Line, { data: midata, options: mioptions });
}
function Graficador({ paciente, auth }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    suffering: "",
    observations: ""
  });
  const [bluetoothConnected, setBluetoothConnected] = useState(false);
  const [device, setDevice] = useState(null);
  const [characteristicBLE, setCharacteristicBLE] = useState(null);
  const conectarBluetooth = async () => {
    try {
      const selectedDevice = await navigator.bluetooth.requestDevice({
        filters: [{ services: ["0000ffe0-0000-1000-8000-00805f9b34fb"] }]
      });
      const server = await selectedDevice.gatt.connect();
      const service = await server.getPrimaryService("0000ffe0-0000-1000-8000-00805f9b34fb");
      const characteristic = await service.getCharacteristic("0000ffe1-0000-1000-8000-00805f9b34fb");
      await characteristic.startNotifications();
      setCharacteristicBLE(characteristic);
      setDevice(selectedDevice);
      setBluetoothConnected(true);
      console.log("Goniometro conectado correctamente");
    } catch (error) {
      console.log("Error bluetooth: ", error);
    }
  };
  const desconectarBluetooth = async () => {
    if (device && device.gatt.connected) {
      await device.gatt.disconnect();
      setBluetoothConnected(false);
      console.log("Dispositivo Bluetooth desconectado");
    } else {
      console.log("El dispositivo ya está desconectado");
    }
  };
  const handleBluetoothBtn = () => {
    if (bluetoothConnected) {
      desconectarBluetooth();
    } else {
      conectarBluetooth();
    }
  };
  const [ejex, setEjex] = useState([]);
  const [ejey, setEjey] = useState([]);
  const [muestreoActivo, setMuestreoActivo] = useState(false);
  const [chartImage, setChartImage] = useState(null);
  const handleChartImageReady = (image) => {
    setChartImage(image);
  };
  const toggleMuestreo = () => {
    setMuestreoActivo((prevMuestreoActivo) => !prevMuestreoActivo);
  };
  const eliminarMuestreo = () => {
    setEjex([]);
    setEjey([]);
    setMuestreoActivo(false);
  };
  useEffect(() => {
    let intervalId;
    const handleCharacteristicValueChanged = (e) => {
      const data2 = new TextDecoder().decode(e.target.value);
      const valores = data2.split(", ");
      const numeros = valores.map(Number);
      if (numeros.length === 2 && numeros.every(Number.isFinite)) {
        setEjex((prevEjex) => [...prevEjex, numeros[0]]);
        setEjey((prevEjey) => [...prevEjey, numeros[1]]);
      }
    };
    if (muestreoActivo) {
      if (characteristicBLE !== null) {
        characteristicBLE.addEventListener("characteristicvaluechanged", handleCharacteristicValueChanged);
      } else {
        console.log("Error al conectar goniometro");
      }
    }
    return () => {
      clearInterval(intervalId);
      if (characteristicBLE !== null) {
        characteristicBLE.removeEventListener("characteristicvaluechanged", handleCharacteristicValueChanged);
      }
    };
  }, [muestreoActivo, characteristicBLE]);
  let contenido;
  let status;
  if (paciente !== null) {
    status = "paciente";
    contenido = /* @__PURE__ */ jsx(
      PDFGenerator,
      {
        doctorName: auth.user.name,
        doctorLastName: auth.user.lastname,
        doctorProfessional_id: auth.user.professional_id,
        doctorSpecialty: auth.user.specialty,
        doctorPhone: auth.user.phone,
        pacienteName: paciente.name,
        pacienteLastName: paciente.lastname,
        pacienteLastName2: paciente.lastname2,
        pacienteBirth: paciente.date_birth,
        pacienteWeigth: paciente.weight,
        pacienteHeigth: paciente.height,
        observations: data.observations,
        suffering: data.suffering,
        chartImage,
        status
      }
    );
  } else {
    status = "graficador";
    contenido = /* @__PURE__ */ jsx(
      PDFGenerator,
      {
        doctorName: auth.user.name,
        doctorLastName: auth.user.lastname,
        doctorProfessional_id: auth.user.professional_id,
        doctorSpecialty: auth.user.specialty,
        doctorPhone: auth.user.phone,
        observations: data.observations,
        suffering: data.suffering,
        chartImage,
        status
      }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "El graficador de la aplicacion web de goniometría de Bixer grafica en tiempo real las medidas generadas y enviadas desde el goniómetro digital Bixer, facilitando asi la precisión del diagnóstico y seguimiento." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex justify-center items-center py-5", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Graficador" }),
      /* @__PURE__ */ jsx(LinesChart, { ejex, ejey, onChartImageReady: handleChartImageReady }),
      /* @__PURE__ */ jsx(Boton, { onClick: handleBluetoothBtn, text: bluetoothConnected ? "desconectar" : "conectar" }),
      bluetoothConnected && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Boton, { onClick: toggleMuestreo, text: muestreoActivo ? "pausar muestreo" : "iniciar muestreo" }),
        /* @__PURE__ */ jsx(Boton, { onClick: eliminarMuestreo, text: "eliminar muestreo" }),
        /* @__PURE__ */ jsxs("form", { action: "", className: "grid gap-4 text-left mt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "suffering", children: "Padecimiento" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.suffering,
                onChange: (e) => setData("suffering", e.target.value),
                className: "mx-5 mb-3 rounded-md text-black",
                type: "text",
                placeholder: "Padecimientos del paciente",
                id: "suffering",
                name: "suffering"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "observations", children: "Observaciones" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                value: data.observations,
                onChange: (e) => setData("observations", e.target.value),
                className: "mx-5 mb-10 rounded-md text-black",
                placeholder: "Ingrese observaciones importantes del paciente",
                name: "observations",
                id: "observations",
                rows: "5"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2" })
          ] })
        ] }),
        contenido
      ] }),
      /* @__PURE__ */ jsx(Boton, { url: route("inicio"), text: "volver" })
    ] }) })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Graficador
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Inicio" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Bixer es una aplicación web de gestión y graficación avanzada en tiempo real de los datos recabados por el goniómetro digital Bixer; con el objetivo de facilitar el seguimiento a los casos clinicos de los fisioterapeutas." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "inicio, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("img", { className: "mx-auto mb-5", src: "./img/BixerLogo.webp", alt: "Logo Bixer" }),
      /* @__PURE__ */ jsx(Boton, { url: route("login"), text: "Inicio" })
    ] }) })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const css = "";
function Card({ img, text, description, url }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsx("div", { className: "face face1", children: /* @__PURE__ */ jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsx("img", { src: img, className: "w-39 h-36", alt: "" }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: text })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "face face2", children: /* @__PURE__ */ jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsx("p", { children: description }),
      /* @__PURE__ */ jsx("a", { href: url, type: "button", className: "rounded-md", children: "Ingresar" })
    ] }) })
  ] }) });
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white dark:bg-gray-700", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300" : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs("nav", { className: "mb-3", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "flex mt-3", children: /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "inicio", children: /* @__PURE__ */ jsx("img", { src: "./img/BixerLogo2.webp", className: "block h-20 mt-3 w-auto fill-current", alt: "" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Perfil" }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Cerrar sesion" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200 dark:border-gray-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800 dark:text-gray-200", children: user.name }),
          /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
        ] })
      ] }) })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Inicio({ auth }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Authenticated, { user: auth.user, children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Menu principal" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicación web de goniometría de Bixer es posible gestionar pacientes y graficar en tiempo real los movimientos realizados durante la sesión de fisioterapia o rehabilitación." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "menu, menu principal, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center xl:py-20", children: /* @__PURE__ */ jsx(Contenedor, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center px-3 items-center lg:flex-row lg:space-x-8", children: [
      /* @__PURE__ */ jsx(Card, { img: "./img/Pacientes.webp", text: "Pacientes", description: "Gestionar pacientes", url: "pacientes" }),
      /* @__PURE__ */ jsx(Card, { img: "./img/Graph.webp", text: "Graficador", description: "Iniciar un muestreo", url: "graficador" })
    ] }) }) })
  ] }) });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Inicio
}, Symbol.toStringTag, { value: "Module" }));
function Login() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Login" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "menu, menu principa, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Iniciar sesión" }),
      /* @__PURE__ */ jsx("p", { children: "Porfavor, ingresa tus datos" }),
      /* @__PURE__ */ jsxs("form", { action: "", className: "grid gap-4 text-left", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "correo", children: "Correo" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", placeholder: "Ingresa tu correo", id: "correo", name: "correo", required: true }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "password", children: "Contraseña" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-10 rounded-md text-black", type: "password", placeholder: "Ingresa tu contraseña", id: "password", name: "password", required: true }),
        /* @__PURE__ */ jsx(Boton, { url: "inicio", text: "Iniciar sesion" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "¿No tienes una cuenta? ",
        /* @__PURE__ */ jsx("a", { href: "registro", className: "underline text-[#18ead8]", children: "Registrate aquí" })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "mx-auto w-24 h-24", src: "./img/BixerLogo2.webp", alt: "" })
    ] }) })
  ] });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const reactDatepicker = "";
registerLocale("es", es);
function Paciente({ paciente }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateString, setDateString] = useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toLocaleDateString() : "";
    setDateString(formattedDate);
    setData("date_birth", formattedDate);
  };
  setDefaultLocale("es");
  const [details, setDetails] = useState(false);
  const [editing, setEditing] = useState(false);
  const { data, setData, patch, processing, reset, errors } = useForm({
    id: paciente.id,
    name: paciente.name,
    lastname: paciente.lastname,
    lastname2: paciente.lastname2,
    CURP: paciente.CURP,
    weight: paciente.weight,
    height: paciente.height,
    date_birth: paciente.date_birth
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    patch(route("pacientes.update", paciente.id), { onSuccess: () => setEditing(false) });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: details ? /* @__PURE__ */ jsx("div", { className: "p-5 flex space-x-2", children: /* @__PURE__ */ jsx("div", { className: "flex-1", children: editing ? /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdate, className: "grid gap-4 text-left", children: [
    /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "name", children: "Nombre" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        value: data.name,
        onChange: (e) => setData("name", e.target.value),
        className: "mx-5 mb-3 rounded-md text-black",
        type: "text",
        placeholder: "Nombre del paciente",
        id: "name",
        name: "name"
      }
    ),
    /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.name }),
    /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "lastname", children: "Apellido Paterno" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: data.lastname,
            onChange: (e) => setData("lastname", e.target.value),
            className: "mx-5 mb-3 rounded-md text-black",
            type: "text",
            placeholder: "Apellido paterno",
            id: "lastname",
            name: "lastname"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.lastname })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "lastname", children: "Apellido Materno" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: data.lastname2,
            onChange: (e) => setData("lastname2", e.target.value),
            className: "mx-5 mb-3 rounded-md text-black",
            type: "text",
            placeholder: "Apellido materno",
            id: "lastname2",
            name: "lastname2"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.lastname2 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
      /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "CURP", children: "CURP" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          value: data.CURP,
          onChange: (e) => setData("CURP", e.target.value),
          className: "mx-5 mb-3 rounded-md text-black",
          type: "text",
          placeholder: "CURP",
          id: "CURP",
          name: "CURP"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.CURP })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "weight", children: "Peso" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: data.weight,
            onChange: (e) => setData("weight", e.target.value),
            className: "mx-5 mb-3 rounded-md text-black",
            type: "text",
            placeholder: "Peso del paciente",
            id: "weight",
            name: "weight"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.weight })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "height", children: "Altura" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: data.height,
            onChange: (e) => setData("height", e.target.value),
            className: "mx-5 mb-3 rounded-md text-black",
            type: "text",
            placeholder: "Altura del paciente",
            id: "height",
            name: "height"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.height })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "", children: "Fecha de nacimiento" }),
        /* @__PURE__ */ jsx(
          DatePicker,
          {
            selected: selectedDate,
            onChange: (date) => {
              handleDateChange(date);
            },
            dateFormat: "dd/MM/yyyy",
            placeholderText: "DD/MM/YYYY",
            showMonthDropdown: true,
            showYearDropdown: true,
            dropdownMode: "select",
            className: "mx-5 mb-3 rounded-md text-black lg:w-[85%] w-[88%]"
          }
        ),
        /* @__PURE__ */ jsx("input", { type: "text", className: "text-black hidden", name: "date_birth", id: "date_birth", onChange: (e) => setDateString(e.target.value), value: dateString }),
        /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.date_birth })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:space-x-3 lg:flex lg:justify-center lg:items-center grid justify-items-stretch", children: [
      /* @__PURE__ */ jsx(Boton, { text: "Guardar", type: "submit" }),
      /* @__PURE__ */ jsx(Boton, { text: "Cancelar", onClick: () => setEditing(false) })
    ] })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
      /* @__PURE__ */ jsxs("h1", { className: "font-bold", children: [
        paciente.lastname,
        " ",
        paciente.lastname2,
        " ",
        paciente.name
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid space-y-1 pt-2", children: [
        /* @__PURE__ */ jsxs("span", { hidden: true, children: [
          "ID: ",
          paciente.id
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "CURP: ",
          paciente.CURP
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Fecha de nacimiento: ",
          paciente.date_birth
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Peso: ",
          paciente.weight,
          " kg"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Altura : ",
          paciente.height,
          " cm"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:flex lg:space-x-5 grid mt-4", children: [
        /* @__PURE__ */ jsx(Boton, { onClick: () => setEditing(true), text: "editar" }),
        /* @__PURE__ */ jsx(Boton, { children: /* @__PURE__ */ jsx(
          Link,
          {
            as: "button",
            href: route("graficador.index", { CURP: paciente.CURP }),
            children: "CONSULTA"
          }
        ) }),
        /* @__PURE__ */ jsx(Boton, { children: /* @__PURE__ */ jsx(
          Link,
          {
            as: "button",
            href: route("pacientes.destroy", paciente.id),
            method: "delete",
            children: "BORRAR"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setDetails(false), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "fill-[#fff] h-7 w-7", viewBox: "0 0 320 512", children: /* @__PURE__ */ jsx("path", { d: "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" }) }) })
  ] }) }) }) : /* @__PURE__ */ jsx("div", { className: "p-5 flex space-x-2", children: /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsxs("h1", { className: "font-bold", children: [
      paciente.lastname,
      " ",
      paciente.lastname2,
      " ",
      paciente.name
    ] }) }),
    /* @__PURE__ */ jsx("button", { onClick: () => setDetails(true), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "fill-[#fff] h-7 w-7", height: "1em", viewBox: "0 0 320 512", children: /* @__PURE__ */ jsx("path", { d: "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" }) }) })
  ] }) }) }) });
}
registerLocale("es", es);
function Pacientes({ pacientes }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateString, setDateString] = useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toLocaleDateString() : "";
    setDateString(formattedDate);
    setData("date_birth", formattedDate);
  };
  setDefaultLocale("es");
  const [adding, setAdding] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    lastname: "",
    lastname2: "",
    CURP: "",
    weight: "",
    height: "",
    date_birth: ""
  });
  const handleAdding = (e) => {
    e.preventDefault();
    post(route("pacientes.store"), { onSuccess: () => reset() });
    setAdding(false);
    setSelectedDate(null);
  };
  const closeAdding = (e) => {
    e.preventDefault();
    setAdding(false);
    setSelectedDate(null);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Pacientes" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicación web de goniometría de Bixer es posible gestionar pacientes; permitiendo registrar, editar y elimanr pacientes para facilitar el proceso de la consulta" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "pacientes, paciente, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex justify-center items-center py-5", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-5", children: adding ? "Agregar paciente" : "Pacientes" }),
      adding === false && /* @__PURE__ */ jsxs("div", { className: "lg:flex text-left grid gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "grid justify-items-strech w-full", children: /* @__PURE__ */ jsx(Boton, { text: "Agregar paciente", onClick: () => setAdding(true) }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5 mb-2", htmlFor: "name", children: "Buscar:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mx-5 mb-3 rounded-md text-black",
              type: "text",
              placeholder: "Nombre del paciente",
              id: "name",
              name: "name"
            }
          )
        ] })
      ] }),
      adding ? /* @__PURE__ */ jsxs("form", { onSubmit: handleAdding, className: "grid gap-4 text-left", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "name", children: "Nombre" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            className: "mx-5 mb-3 rounded-md text-black",
            type: "text",
            placeholder: "Nombre del paciente",
            id: "name",
            name: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.name }),
        /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "lastname", children: "Apellido Paterno" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.lastname,
                onChange: (e) => setData("lastname", e.target.value),
                className: "mx-5 mb-3 rounded-md text-black",
                type: "text",
                placeholder: "Apellido paterno",
                id: "lastname",
                name: "lastname"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.lastname })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "lastname", children: "Apellido Materno" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.lastname2,
                onChange: (e) => setData("lastname2", e.target.value),
                className: "mx-5 mb-3 rounded-md text-black",
                type: "text",
                placeholder: "Apellido materno",
                id: "lastname2",
                name: "lastname2"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.lastname2 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
          /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "CURP", children: "CURP" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              value: data.CURP,
              onChange: (e) => setData("CURP", e.target.value),
              className: "mx-5 mb-3 rounded-md text-black",
              type: "text",
              placeholder: "CURP",
              id: "CURP",
              name: "CURP"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.CURP })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "weight", children: "Peso" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.weight,
                onChange: (e) => setData("weight", e.target.value),
                className: "mx-5 mb-3 rounded-md text-black",
                type: "text",
                placeholder: "Peso del paciente",
                id: "weight",
                name: "weight"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.weight })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "height", children: "Altura" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.height,
                onChange: (e) => setData("height", e.target.value),
                className: "mx-5 mb-3 rounded-md text-black",
                type: "text",
                placeholder: "Altura del paciente",
                id: "height",
                name: "height"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.height })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid justify-items-stretch w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "mx-5 mb-4", htmlFor: "", children: "Fecha de nacimiento" }),
            /* @__PURE__ */ jsx(
              DatePicker,
              {
                selected: selectedDate,
                onChange: (date) => {
                  handleDateChange(date);
                },
                dateFormat: "dd/MM/yyyy",
                placeholderText: "DD/MM/YYYY",
                showMonthDropdown: true,
                showYearDropdown: true,
                dropdownMode: "select",
                className: "mx-5 mb-3 rounded-md text-black lg:w-[85%] w-[88%]"
              }
            ),
            /* @__PURE__ */ jsx("input", { type: "text", className: "text-black hidden", name: "date_birth", id: "date_birth", onChange: (e) => setDateString(e.target.value), value: dateString }),
            /* @__PURE__ */ jsx(InputError, { className: "mb-2", message: errors.date_birth })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:space-x-3 lg:flex lg:justify-center lg:items-center grid justify-items-stretch", children: [
          /* @__PURE__ */ jsx(Boton, { type: "submit", text: "Guardar" }),
          /* @__PURE__ */ jsx(Boton, { text: "Cancelar", onClick: closeAdding })
        ] })
      ] }) : /* @__PURE__ */ jsx(Fragment, {}),
      adding ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsx("div", { className: "mt-6 shadow-sm rounded-lg divide-y-4 border", children: pacientes.map(
        (paciente) => /* @__PURE__ */ jsx(Paciente, { paciente }, paciente.id)
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto space-x-5 pt-5", children: /* @__PURE__ */ jsx(Boton, { url: "inicio", text: "regresar" }) })
    ] }) })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pacientes
}, Symbol.toStringTag, { value: "Module" }));
function Pruebas() {
  const [bluetoothConnected, setBluetoothConnected] = useState(false);
  const [device, setDevice] = useState(null);
  const [characteristicBLE, setCharacteristicBLE] = useState(null);
  const conectarBluetooth = async () => {
    try {
      const selectedDevice = await navigator.bluetooth.requestDevice({
        filters: [{ services: ["0000ffe0-0000-1000-8000-00805f9b34fb"] }]
      });
      const server = await selectedDevice.gatt.connect();
      const service = await server.getPrimaryService("0000ffe0-0000-1000-8000-00805f9b34fb");
      const characteristic = await service.getCharacteristic("0000ffe1-0000-1000-8000-00805f9b34fb");
      await characteristic.startNotifications();
      setCharacteristicBLE(characteristic);
      setDevice(selectedDevice);
      setBluetoothConnected(true);
      console.log("Goniometro conectado correctamente");
    } catch (error) {
      console.log("Error bluetooth: ", error);
    }
  };
  const desconectarBluetooth = async () => {
    if (device && device.gatt.connected) {
      await device.gatt.disconnect();
      setBluetoothConnected(false);
      console.log("Dispositivo Bluetooth desconectado");
    } else {
      console.log("El dispositivo ya está desconectado");
    }
  };
  const handleBluetoothBtn = () => {
    if (bluetoothConnected) {
      desconectarBluetooth();
    } else {
      conectarBluetooth();
    }
  };
  const [ejex, setEjex] = useState([]);
  const [ejey, setEjey] = useState([]);
  const [muestreoActivo, setMuestreoActivo] = useState(false);
  const [chartImage, setChartImage] = useState(null);
  const handleChartImageReady = (image) => {
    setChartImage(image);
  };
  const toggleMuestreo = () => {
    setMuestreoActivo((prevMuestreoActivo) => !prevMuestreoActivo);
  };
  const eliminarMuestreo = () => {
    setEjex([]);
    setEjey([]);
    setMuestreoActivo(false);
  };
  useEffect(() => {
    let intervalId;
    const handleCharacteristicValueChanged = (e) => {
      const data = new TextDecoder().decode(e.target.value);
      const valores = data.split(", ");
      const numeros = valores.map(Number);
      if (numeros.length === 2 && numeros.every(Number.isFinite)) {
        setEjex((prevEjex) => [...prevEjex, numeros[0]]);
        setEjey((prevEjey) => [...prevEjey, numeros[1]]);
      }
    };
    if (muestreoActivo) {
      if (characteristicBLE !== null) {
        characteristicBLE.addEventListener("characteristicvaluechanged", handleCharacteristicValueChanged);
      } else {
        console.log("Error al conectar goniometro");
      }
    }
    return () => {
      clearInterval(intervalId);
      if (characteristicBLE !== null) {
        characteristicBLE.removeEventListener("characteristicvaluechanged", handleCharacteristicValueChanged);
      }
    };
  }, [muestreoActivo, characteristicBLE]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "flex justify-center items-center py-5", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Pruebas" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Esta ventana es privada y de uso exclusivo a usuarios con rol developer." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "pruebas, prueba, desarrollo, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx(LinesChart, { ejex, ejey, onChartImageReady: handleChartImageReady }),
      /* @__PURE__ */ jsx(Boton, { onClick: handleBluetoothBtn, text: bluetoothConnected ? "desconectar" : "conectar" }),
      bluetoothConnected && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Boton, { onClick: toggleMuestreo, text: muestreoActivo ? "pausar muestreo" : "iniciar muestreo" }),
        /* @__PURE__ */ jsx(Boton, { onClick: eliminarMuestreo, text: "eliminar muestreo" })
      ] })
    ] })
  ] }) });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pruebas
}, Symbol.toStringTag, { value: "Module" }));
function Registro() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Registro" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "registro, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "container mx-auto text-center py-5", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Registro" }),
      /* @__PURE__ */ jsx("p", { children: "Porfavor, ingresa tus datos" }),
      /* @__PURE__ */ jsxs("form", { action: "", className: "grid gap-4 text-left mt-3", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "name", children: "Nombre" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", placeholder: "Ingresa tu nombre", id: "name", name: "name" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "lastname", children: "Apellidos" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", placeholder: "Ingresa tus apellidos", id: "lastname", name: "lastname" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "email", children: "Correo electronico" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", placeholder: "Ingresa tu correo electronico", id: "email", name: "email" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "password1", children: "Contraseña" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "password", placeholder: "Crea una contraseña", id: "password1", name: "password1" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "password2", children: "Confirma tu contraseña" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "password", placeholder: "Confirma tu contraseña", id: "password2", name: "password2" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "telefono", children: "Ingresa tu telefono" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-10 rounded-md text-black", type: "text", placeholder: "Numero de telefono", id: "telefono", name: "telefono" }),
        /* @__PURE__ */ jsx(Boton, { url: "sesion", text: "Registrate" })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "mx-auto w-24 h-24", src: "./img/BixerLogo2.webp", alt: "Logo Bixer" })
    ] }) })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Registro
}, Symbol.toStringTag, { value: "Module" }));
function Usuario() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head$1, { children: [
      /* @__PURE__ */ jsx("title", { children: "Software de goniometria: Usuario" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "menu, usuario, perfil, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "byLastLine_" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "container mx-auto text-center py-12", children: /* @__PURE__ */ jsxs(Contenedor, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-5", children: "Usuario" }),
      /* @__PURE__ */ jsxs("form", { action: "", className: "grid gap-4 text-left", children: [
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "name", children: "Nombre" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", id: "name", name: "name" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "lastname", children: "Apellidos" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", id: "lastname", name: "lastname" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "email", children: "Correo electronico" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-3 rounded-md text-black", type: "text", id: "email", name: "email" }),
        /* @__PURE__ */ jsx("label", { className: "mx-5", htmlFor: "phone", children: "Telefono" }),
        /* @__PURE__ */ jsx("input", { className: "mx-5 mb-10 rounded-md text-black", type: "text", id: "phone", name: "phone" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-5", children: [
        /* @__PURE__ */ jsx(Boton, { url: "inicio", text: "Volver" }),
        /* @__PURE__ */ jsx(Boton, { children: /* @__PURE__ */ jsx(Link, { href: route("logout"), className: "uppercase", method: "post", as: "button", children: "Cerrar sesion" }) })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Usuario
}, Symbol.toStringTag, { value: "Module" }));
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head$1, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Eliminar cuenta" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán permanentemente. Por favor ingrese su contraseña para confirmar que desea eliminar permanentemente su cuenta." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Eliminar cuenta" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "¿Estás seguro/a de que quieres eliminar tu cuenta?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán permanentemente. Por favor ingrese su contraseña para confirmar que desea eliminar permanentemente su cuenta." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancelar" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ml-3", disabled: processing, children: "Eliminar cuenta" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Actualizar contraseña" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Asegúrese de que su cuenta utilice una contraseña larga y aleatoria para mantenerse segura." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "current_password", value: "Contraseña actual" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Nueva contraseña" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirmar Contraseña" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Guardar" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600 dark:text-gray-400", children: "Guardado." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    lastname: user.lastname,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Información del perfil" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Actualice la información del perfil y la dirección de correo electrónico de su cuenta." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nombre" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "lastname", value: "Apellidos" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "lastname",
            className: "mt-1 block w-full",
            value: data.lastname,
            onChange: (e) => setData("lastname", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "lastname"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.lastname })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800 dark:text-gray-200", children: [
          "Su dirección de correo electrónico no está verificada.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
              children: "Haga clic aquí para volver a enviar el correo electrónico de verificación."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400", children: "Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Guardar" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600 dark:text-gray-400", children: "Guardado." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      children: [
        /* @__PURE__ */ jsx(Head$1, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Welcome({ auth, laravelVersion, phpVersion }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head$1, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:fixed sm:top-0 sm:right-0 p-6 text-right", children: auth.user ? /* @__PURE__ */ jsx(
        Link,
        {
          href: route("inicio"),
          className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
          children: "Inicio"
        }
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Log in"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("register"),
            className: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Register"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto p-6 lg:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "svg",
          {
            viewBox: "0 0 62 65",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-16 w-auto bg-gray-100 dark:bg-gray-900",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z",
                fill: "#FF2D20"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laravel.com/docs",
              className: "scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      className: "w-7 h-7 stroke-red-500",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-6 text-xl font-semibold text-gray-900 dark:text-white", children: "Documentation" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed", children: "Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "self-center shrink-0 stroke-red-500 w-6 h-6 mx-6",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laracasts.com",
              className: "scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      className: "w-7 h-7 stroke-red-500",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-6 text-xl font-semibold text-gray-900 dark:text-white", children: "Laracasts" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed", children: "Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "self-center shrink-0 stroke-red-500 w-6 h-6 mx-6",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laravel-news.com",
              className: "scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      className: "w-7 h-7 stroke-red-500",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-6 text-xl font-semibold text-gray-900 dark:text-white", children: "Laravel News" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed", children: "Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "self-center shrink-0 stroke-red-500 w-6 h-6 mx-6",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                className: "w-7 h-7 stroke-red-500",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx("h2", { className: "mt-6 text-xl font-semibold text-gray-900 dark:text-white", children: "Vibrant Ecosystem" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed", children: [
              "Laravel's robust library of first-party tools and libraries, such as",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://forge.laravel.com",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Forge"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://vapor.laravel.com",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Vapor"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://nova.laravel.com",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Nova"
                }
              ),
              ", and",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://envoyer.io",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Envoyer"
                }
              ),
              " ",
              "help you take your projects to the next level. Pair them with powerful open source libraries like",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://laravel.com/docs/billing",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Cashier"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://laravel.com/docs/dusk",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Dusk"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://laravel.com/docs/broadcasting",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Echo"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://laravel.com/docs/horizon",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Horizon"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://laravel.com/docs/sanctum",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Sanctum"
                }
              ),
              ",",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://laravel.com/docs/telescope",
                  className: "underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                  children: "Telescope"
                }
              ),
              ", and more."
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center mt-16 px-6 sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/sponsors/taylorotwell",
              className: "group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "-mt-px mr-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      }
                    )
                  }
                ),
                "Sponsor"
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0", children: [
            "Laravel v",
            laravelVersion,
            " (PHP v",
            phpVersion,
            ")"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            ` })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_1, "./Pages/Auth/Login.jsx": __vite_glob_0_2, "./Pages/Auth/Register.jsx": __vite_glob_0_3, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_4, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_5, "./Pages/Bixer/Graficador.jsx": __vite_glob_0_6, "./Pages/Bixer/Index.jsx": __vite_glob_0_7, "./Pages/Bixer/Inicio.jsx": __vite_glob_0_8, "./Pages/Bixer/Login.jsx": __vite_glob_0_9, "./Pages/Bixer/Pacientes.jsx": __vite_glob_0_10, "./Pages/Bixer/Pruebas.jsx": __vite_glob_0_11, "./Pages/Bixer/Registro.jsx": __vite_glob_0_12, "./Pages/Bixer/Usuario.jsx": __vite_glob_0_13, "./Pages/Dashboard.jsx": __vite_glob_0_14, "./Pages/Profile/Edit.jsx": __vite_glob_0_15, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_16, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_17, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_18, "./Pages/Welcome.jsx": __vite_glob_0_19 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
