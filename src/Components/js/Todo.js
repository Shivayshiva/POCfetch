import React from "react";
import "../css/Todo.css";

const Todo = (props) => {
  const val = props.data;

  return val.length === 0 ? (
    <h3>Loading..</h3>
  ) : (
    <table>
      <tr>
        <th>UserID</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>

      {val.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.title}</td>
          <td>{val.completed ? "Completed" : "Not Completed"}</td>
        </tr>
      ))}
    </table>
  );
};

export default Todo;
