import { useEffect, useState } from "react";

export type Theme = "night" | "day";

const STORAGE_KEY = "miyar-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem(STORAGE_KEY) === "day" ? "day" : "night",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("day", theme === "day");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "day" ? "night" : "day"));

  return { theme, toggleTheme };
}
