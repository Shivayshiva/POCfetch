import React from "react";
import "../css/Users.css";

const Users = (props) => {
  const val = props.data;

  return val.length===0 ? (
    <h3>Loading..</h3>
  ) : (
    <table>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone No.</th>
        <th>Website</th>
      </tr>

      {val.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>{val.phone}</td>
          <td>{val.website}</td>
        </tr>
      ))}
    </table>
  );
};

export default Users;
