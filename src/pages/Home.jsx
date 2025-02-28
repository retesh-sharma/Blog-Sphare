import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import UserForm from "../components/UserForm";

function Home() {
  const userData = useLoaderData();
  const users = userData.data;
  // console.log(users);

  if (!userData) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Home</h1>
      <UserForm/>
      <table border={1}>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.first_name} </td>
                <td>{user.last_name} </td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <p>No users found</p>
          )}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
