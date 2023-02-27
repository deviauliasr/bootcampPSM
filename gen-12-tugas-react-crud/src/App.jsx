import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const defaultInput = {
  title: "",
  description: "",
  category: "",
  date: "",
  time: "",
};

function App() {
  const [notes, setNotes] = useState([]);
  const [notesInput, setNotesInput] = useState({ ...defaultInput });

  const handleFormInput = (type, value) => setNotesInput({ ...notesInput, [type]: value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const isEdit = !!notesInput.id;

    if (isEdit) await axios.put("http://localhost:3000/notes/" + notesInput.id, notesInput);
    else await axios.post("http://localhost:3000/notes", notesInput);

    setNotesInput({ ...defaultInput });
    getAllNotes();
  };

  const getAllNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    setNotes(res.data);
  };

  const deleteNotes = async (id) => {
    await axios.delete("http://localhost:3000/notes/" + id);
    getAllNotes();
  };

  const editNotes = async (id) => {
    const res = await axios.get("http://localhost:3000/notes/" + id);
    setNotesInput(res.data);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <div className="FormNotes">
        <h1>NOTES</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" value={notesInput.title} onChange={(evt) => handleFormInput("title", evt.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            Description
            <input type="text" value={notesInput.description} onChange={(evt) => handleFormInput("description", evt.target.value)} />
          </label>
          <br />
          <br />
          <label>
            Category
            <select name="category" >
              <option value="">---</option>
              <option value="Daily">Daily</option>
              <option value="Important">Important</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Date
            <input type="date" value={notesInput.date} onChange={(evt) => handleFormInput("date", evt.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            Time: &nbsp;
            <input type="time" value={notesInput.time} onChange={(evt) => handleFormInput("time", evt.target.value)} required />
          </label>
          <br />
          <br />
          <button>SUBMIT</button>
        </form>
      </div>
      <hr />
      <div className="DataNotes">
        {notes.map((note) => (
          <div key={note.id} className="Card">
            <p>
              {note.date} | {note.time} | {note.category}
            </p>
            <h2>{note.title}</h2>
            <h4>{note.description}</h4>
            <a onClick={() => editNotes(note.id)}>edit</a>
            <a onClick={() => deleteNotes(note.id)}>delete</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
