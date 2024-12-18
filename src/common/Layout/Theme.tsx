import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "mytheme"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "mytheme" ? "dark" : "mytheme"); // for toggle
  };

  return (
    // <div className="flex items-center">
    //   <SunIcon className="h-6 mx-1"  />
    //   <input
    //     type="checkbox"
    //     className="toggle"
    //     defaultChecked
    //     checked={theme === "dark"}
    //     onChange={toggleTheme}
    //   />
    //   <MoonIcon className="h-5 mx-1" />
    // </div>
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        defaultChecked
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="swap-on h-6 w-6 fill-current">
        <SunIcon className="text-white" />
      </div>

      <div className="swap-off h-6 w-6 fill-current">
        <MoonIcon className="text-white" />
      </div>
    </label>
  );
};
