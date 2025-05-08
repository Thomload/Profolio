import React, { useEffect, useState } from "react";
import "./timon.css";

const themes = [
  { name: "Light", value: "dark" },
  { name: "Dark", value: "light" },
];

const ThemeSwitcher: React.FC = () => {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      {themes.map((t) => (
        <button
          key={t.value}
          className={`theme-button ${theme === t.value ? "active" : ""}`}
          onClick={() => setTheme(t.value)}
          aria-label={`Switch to ${t.name} mode`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
