import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [color, setColor] = useState("true");

  const changeColor = () => {
    setColor(!color);
  };

  const shareValue = {
    color,
    setColor,
    changeColor,
  };

  return <ThemeContext.Provider value={shareValue}>{children}</ThemeContext.Provider>;
}
