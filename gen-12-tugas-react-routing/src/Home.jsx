import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const [note, setNote] = useState([]);

  const getAllNotes = async () => {
    const res = await axios.get("http://localhost:3000/note");
    setNote(res.data);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <p className="pl-2 text-center">All notes</p>
      <div className=" d-flex flex-wrap justify-content-between">
        {note.map((note) => (
          <div className="DataNotes mx-2">
            <div className="card bg-light text-primary mb-3" key={note.id} style={{ maxWidth: "18rem" }}>
              <div className="card-header">
                {note.date} | {note.time} | {note.category}
              </div>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
