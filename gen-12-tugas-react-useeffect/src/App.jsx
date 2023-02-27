import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <div className="Card">
        <div className="Exit">
          <button onClick={() => setIsShow(!isShow)}>{!isShow ? "+" : "X"}</button>
        </div>
        <div>
          <h1>To-Do List</h1>
          <hr />
        </div>
        <div>{isShow ? <TodoList /> : null}</div>
      </div>
    </>
  );
}

function TodoList() {
  const [item, setItem] = useState([
    {
      toDo: "Things To Do",
      time: "00.00",
    },
  ]);

  const [toDo, setToDo] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("My Tasks");
  const [totalTask, setTotalTask] = useState(0);

  const addItem = (event) => {
    event.preventDefault();
    const inputItem = { toDo, time };
    const copyItem = [...item];
    copyItem.push(inputItem);

    setItem(copyItem);
    setToDo("");
    setTime("");
  };

  const removeItem = (removeId) => {
    const itemIndex = item.findIndex((item) => item.toDo === removeId);
    const copyItem = [...item];
    copyItem.splice(itemIndex, 1);
    setItem(copyItem);
  };

  useEffect(() => {
    document.title = title + " (" + totalTask + ")";
  });

  useEffect(() => {
    console.log("Start");

    return () => {
      console.log("Exit");
      alert("Close To-Do List");
    };
  }, []);

  useEffect(() => {
    if (item.length > totalTask) {
      setTotalTask(totalTask + 1);
    } else {
      setTotalTask(totalTask - 1);
    }

    return () => {
      console.log("didUpdate succeed");
    };
  }, [item]);

  return (
    <>
      <div className="Card">
        <div className="CardHeader">
          <div className="total">
            <p>Today ({totalTask})</p>
          </div>
          <div className="Wrapper">
            <div className="inputWrapper">
              <input id="inputThings" type="text" value={toDo} onChange={(event) => setToDo(event.target.value)} />
              <input id="inputTime" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
              <button type="submit" onClick={(event) => addItem(event)}>
                Add
              </button>
            </div>
            <div className="thingsToDoTotal"></div>
            <div className="ListItem">
              {item.map((item) => (
                <p key={item.toDo}>
                  {item.time} | {item.toDo}
                  <button onClick={() => removeItem(item.toDo)}>x</button>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
