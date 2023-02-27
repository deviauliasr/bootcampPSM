import { createContext, useState } from "react";
import axios from "axios";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [note, setNote] = useState([]);
  const [color, setColor] = useState("true");

  const getAllNotes = async () => {
    const res = await axios.get("http://localhost:3000/note");
    setNote(res.data);
  };

  const changeColor = () => {
    setColor(!color);
  };

  const shareValue = {
    note,
    setNote,
    color,
    setColor,
    getAllNotes,
    changeColor,
  };

  return <NotesContext.Provider value={shareValue}>{children}</NotesContext.Provider>;
}
