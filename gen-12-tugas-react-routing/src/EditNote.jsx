import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const defaultInput = {
  title: "",
  description: "",
  category: "",
  date: "",
  time: "",
};

export default function EditNote() {
  const [note, setNote] = useState([]);
  const [noteInput, setNoteInput] = useState({ ...defaultInput });

  const handleFormInput = (type, value) => setNoteInput({ ...noteInput, [type]: value });

  const handleEditSubmit = async (evt) => {
    evt.preventDefault();

    const isEdit = !!noteInput.id;

    if (isEdit) await axios.put("http://localhost:3000/note/" + noteInput.id, noteInput);
    else await axios.post("http://localhost:3000/note", noteInput);

    setNoteInput({ ...defaultInput });
    alert("Success");
  };

  const getAllNotes = async () => {
    const res = await axios.get("http://localhost:3000/note");
    setNote(res.data);
  };

  const deleteNotes = async (id) => {
    await axios.delete("http://localhost:3000/note/" + id);
    getAllNotes();
  };

  const editNotes = async (id) => {
    const res = await axios.get("http://localhost:3000/note/" + id);
    setNoteInput(res.data);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <Link to="/" className="text-primary">
        <i class="bi bi-arrow-left-short"></i>Back to Home Page
      </Link>
      <div className="d-flex flex-wrap justify-content-between py-3">
        {note.map((note) => (
          <div className="DataNotes mx-2">
            <div className="card bg-light text-primary mb-3" key={note.id} style={{ maxWidth: "18rem" }}>
              <div className="card-header">
                {note.date} | {note.time} | {note.category}
              </div>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <a onClick={() => editNotes(note.id)} className="mx-2">
                  edit
                </a>
                <a onClick={() => deleteNotes(note.id)} className="mx-2">
                  delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="FormNotes">
        <form onSubmit={handleEditSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" aria-label="Title" value={noteInput.title} onChange={(evt) => handleFormInput("title", evt.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" aria-label="description" value={noteInput.description} onChange={(evt) => handleFormInput("description", evt.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" value={noteInput.category} onChange={(evt) => handleFormInput("category", evt.target.value)} required>
              <option value="" selected>
                Select Category
              </option>
              <option value="Daily">Daily</option>
              <option value="Important">Important</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" value={noteInput.date} onChange={(evt) => handleFormInput("date", evt.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input type="time" className="form-control" value={noteInput.time} onChange={(evt) => handleFormInput("time", evt.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      </div>
    </>
  );
}
