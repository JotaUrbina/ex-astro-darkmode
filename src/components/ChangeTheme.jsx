import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    theme === "dark"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    setIsChecked((prevChecked) =>
      prevChecked === false ? true : false
    );

    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };
  return (
    <>
      <label
        htmlFor="theme"
        className="w-auto flex items-center gap-2 border border-gray-500 rounded-2xl px-2 cursor-pointer absolute top-6 right-6"
      >
        <input
          type="checkbox"
          role="switch"
          id="theme"
          checked={isChecked}
          onChange={handleTheme}
          className="hidden"
        />
        <SunIcon
          className={`w-8 h-8 ease-in-out duration-200 ${
            !isChecked ? "fill-orange-500" : "fill-gray-500"
          }`}
        />
        <MoonIcon
          className={`w-6 h-6 ease-in-out duration-200 ${
            isChecked ? "fill-orange-500" : "fill-gray-500"
          }`}
        />
      </label>
    </>
  );
};

export default ChangeTheme;
