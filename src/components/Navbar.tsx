import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <Link to="/">My Blog</Link>
      <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
    </nav>
  );
};
