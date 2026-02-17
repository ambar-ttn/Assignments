import { useContext } from "react";
import { ThemeContext } from "./App";

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "20px"
      }}
     className={`page ${theme}`}>
      <h2>{theme.toUpperCase()} MODE</h2>
      <p>Theme changing dynamically</p>
    </div>
  );
};

export default Page;
