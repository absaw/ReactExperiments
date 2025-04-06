import { useState } from "react";

function ToDoList() {
  const [toDoList, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    setList([...toDoList, inputValue]);
  };
  return (
    <>
      <h1>To Do List</h1>
      <input onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addTask}> Add Task</button>
      <br />
      <ul className="list-group">
        {toDoList.map((item, i) => {
          return <li className="list-group-item">{item}</li>;
        })}
      </ul>
    </>
  );
}
export default ToDoList;
