import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [lists, setLists] = useState([
    { title: "List 1", items: ["item one"] },
    { title: "List 2", items: ["item one"] },
  ]);
  const [todoInput, setTodoInput] = useState("");
  const [listInput, setListInput] = useState("");

  const [listIndex, setIndex] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let listsCopy = [...lists];
    listsCopy[listIndex].items.push(`${todoInput}`);
    setLists(listsCopy);
  };

  const handleListSubmit = (e) => {
    e.preventDefault();
    let listsCopy = [...lists];
    listsCopy.push({
      title: `List ${lists.length + 1}`,
      items: ["item one"],
    });
    setLists(listsCopy);
  };

  const handleRadioChange = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>new item input</p>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <input type="submit"></input>
      </form>
      <form onSubmit={handleListSubmit}>
        <p>new list input</p>
        <input
          type="text"
          value={listInput}
          onChange={(e) => setListInput(e.target.value)}
        />
        <input type="submit"></input>
      </form>
      <br></br>
      <div>
        {lists.map((list, index) => {
          return (
            <div key={list.title + index}>
              <input
                type="radio"
                value={index}
                checked={listIndex == index}
                onChange={handleRadioChange}
              />
              {list.title}
            </div>
          );
        })}
      </div>
      <h1>{lists[listIndex].title}</h1>
      {lists[listIndex].items.map((item, index) => {
        return <div key={item + index}> {item} </div>;
      })}
    </div>
  );
}

export default App;
