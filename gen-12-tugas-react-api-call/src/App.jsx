import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [toDo, setToDo] = useState("??");
  const [otherToDo, setOtherToDo] = useState("");

  const get = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://dummyjson.com/todos/150");
      setToDo(res.data.todo);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const post = () => {
    const quotesData = {
      todo: "Find a charity and donate to it",
      completed: true,
      userId: 13,
    };
    setIsLoading(true);
    axios
      .post("https://dummyjson.com/todos/add", quotesData)
      .then((res) => {
        setOtherToDo(res.data.todo), console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const update = () => {
    const quotesData = {
      todo: "Learn a new programming language",
      completed: true,
    };
    setIsLoading(true);
    axios
      .put("https://dummyjson.com/todos/150", quotesData)
      .then((res) => {
        setToDo(res.data.todo), console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const deleteQuotes = () => {
    setIsLoading(true);
    axios
      .delete("https://dummyjson.com/todos/31")
      .then((res) => {
        setToDo(res.data.isDeleted), console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return isLoading ? (
    <h1>Wait a minute...</h1>
  ) : (
    <>
      <div className="Card">
        <div className="header">
          <h1>What should i do today?</h1>
          <button onClick={get}>Check</button>
        </div>
        <div className="body">
          <p>{toDo}</p>
          <p>{otherToDo}</p>
          <a onClick={update}>Update</a>
          <a onClick={deleteQuotes}>Delete</a>
          <a onClick={post}>Add More</a>
        </div>
      </div>
    </>
  );
}

export default App;
