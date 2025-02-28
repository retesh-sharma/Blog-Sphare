import React, { useState } from "react";

function UserForm() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleUserCreate = ()=> {
    
    // /api/users
  }

  const handleUserForm = (e) => {
    e.preventDefault();
    const userData = {
      username,
      first_name,
      last_name,
      email,
    };
    console.log(userData);
  };
  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleUserForm}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={(e)=> setUsername(e.target.value)} />
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" onChange={(e)=> setFirstName(e.target.value)} />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" onChange={(e)=> setLastName(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={(e)=> setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
