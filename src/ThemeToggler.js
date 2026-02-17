import { useContext } from "react";
import { ThemeContext } from "./App";
import "./ThemeToggler.css";

const ThemeToggler = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      className="toggleWrapper"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#222222"
      }}
    >
      <button className="toggler" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
