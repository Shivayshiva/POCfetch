import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./Components/js/Todo.js";
import Users from "./Components/js/Users.js";
import Comments from "./Components/js/Comments.js";

function App() {
  const [valset, setValset] = useState("todos");
  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${valset}`)
      .then((ras) => ras.json())
      .then((data) => {
        setFetchdata(data);
      });
  }, [valset]);

  const renderelement = (fetchdata) => {
    switch (valset) {
      case "todos":
        return <Todo data={fetchdata} />;
      case "users":
        return <Users data={fetchdata} />;
      case "comments":
        return <Comments data={fetchdata} />;
      default:
        return <Todo data={fetchdata} />;
    }
  };
  return (
    <>
      <div class="dropdown">
        <div class="dropbtn">Dropdown</div>
        <div class="dropdown-content">
          <div
            className="navitem"
            onClick={() => {
              setValset("todos");
            }}
          >
            ToDo List
          </div>
          <div
            className="navitem"
            onClick={() => {
              setValset("users");
            }}
          >
            User List
          </div>

          <div
            className="navitem"
            onClick={() => {
              setValset("comments");
            }}
          >
            Comments
          </div>
        </div>
      </div>
      <br />
      <br />

      {renderelement(fetchdata)}
    </>
  );
}

export default App;
