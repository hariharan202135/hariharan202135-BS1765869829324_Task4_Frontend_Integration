import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  const addUser = async () => {
    if (!name || !email || !age) return alert("Enter all fields");

    await axios.post(API_URL, { name, email, age });
    getUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    getUsers();
  };

  return (
    <div style={{ width:"400px", margin:"auto", textAlign:"center", paddingTop:"50px" }}>
      <h2>React CRUD with Node + Mongo</h2>

      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} /> <br/><br/>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /> <br/><br/>
      <input placeholder="Age" type="number" onChange={(e)=>setAge(e.target.value)} /> <br/><br/>

      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} - {u.email} - {u.age}
            <button onClick={() => deleteUser(u._id)} style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
