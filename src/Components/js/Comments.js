import React from "react";
import "../css/Comments.css";

const Comment = (props) => {
  const val = props.data;
  return val.length === 0 ? (
    <h3>Loading..</h3>
  ) : (
    <table>
      <tr>
        <th>UserID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comment</th>
      </tr>

      {val.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.email}</td>
          <td>{val.body}</td>
        </tr>
      ))}
    </table>
  );
};

export default Comment;
