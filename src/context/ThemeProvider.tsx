import { useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`layout-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
