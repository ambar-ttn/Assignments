import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Page from "./Page";
import { createContext } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggler />
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
