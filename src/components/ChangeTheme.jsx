import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

/*
 * Función para gestionar el cambio de tema en una aplicación.
 *
 * Esta función utiliza el estado y el almacenamiento local (localStorage) para
 * mantener el estado del tema seleccionado por el usuario. Si no se ha establecido
 * un tema personalizado, la función utiliza el tema predeterminado basado en el
 * tema del sistema operativo del usuario.
 *
 */

const ChangeTheme = () => {
  // Estado para almacenar el tema actual
  const [theme, setTheme] = useState(() => {
    // Comprueba si el tema se ha establecido en el almacenamiento local
    if (localStorage.theme === undefined) {
      // Si no se ha establecido un tema personalizado, utiliza el tema del SO
      if (
        window.matchMedia("(prefers-color-scheme: dark)")
          .matches
      ) {
        return "dark";
      }
      return "light";
    } else {
      // Si se ha establecido un tema personalizado, se usa el del almacenamiento local
      return localStorage.getItem("theme");
    }
  });

  useEffect(() => {
    const html = document.querySelector("html");
    theme === "dark"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    e.target.value === "light"
      ? setTheme("light")
      : setTheme("dark");
  };
  return (
    <>
      <fieldset className="w-auto flex items-center gap-2 border border-gray-500 rounded-2xl px-2 cursor-pointer absolute top-6 right-6">
        <div>
          <label htmlFor="light">
            <SunIcon
              className={`w-8 h-8 ease-in-out duration-200 ${
                theme === "light"
                  ? "fill-orange-500"
                  : "fill-gray-500 cursor-pointer"
              }`}
            />
          </label>
          <input
            type="radio"
            id="light"
            name="theme"
            value="light"
            onChange={handleTheme}
            className="hidden"
          />
        </div>

        <div>
          <label htmlFor="dark">
            <MoonIcon
              className={`w-6 h-6 ease-in-out duration-200 ${
                theme === "dark"
                  ? "fill-orange-500"
                  : "fill-gray-500 cursor-pointer"
              }`}
            />
          </label>
          <input
            type="radio"
            id="dark"
            name="theme"
            value="dark"
            onChange={handleTheme}
            className="hidden"
          />
        </div>
      </fieldset>
    </>
  );
};

export default ChangeTheme;
