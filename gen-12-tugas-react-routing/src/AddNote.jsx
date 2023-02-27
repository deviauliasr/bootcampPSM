import axios from "axios";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const defaultInput = {
  title: "",
  description: "",
  category: "",
  date: "",
  time: "",
};

export default function AddNote() {
  const [note, setNote] = useState([]);
  const [noteInput, setNoteInput] = useState({ ...defaultInput });

  const handleFormInput = (type, value) => setNoteInput({ ...noteInput, [type]: value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const isEdit = !!noteInput.id;

    if (isEdit) await axios.put("http://localhost:3000/note/" + noteInput.id, noteInput);
    else await axios.post("http://localhost:3000/note", noteInput);

    setNoteInput({ ...defaultInput });
    alert("Success");
  };

  return (
    <>
      <Link to="/" className="text-primary">
        <i class="bi bi-arrow-left-short"></i>Back to Home Page
      </Link>
      <div className="FormNotes py-4">
        <form onSubmit={handleSubmit}>
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
