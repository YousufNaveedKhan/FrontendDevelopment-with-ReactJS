import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("")

  const [form, setForm] = useState({
    username: "",
    email: "", 
    age: "", 
    pass: "", 
    course: "", 
    gender: "" 
  }); 
  const [show, setShow] = useState(false);

  const [char, setChar] = useState("")

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    
    setForm(
    {
      ...form, 
      [name]: type === "checkbox" ? checked : value
    }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      Username: ${form.username},
      Email: ${form.email}, 
      Age: ${form.age}, 
      Password: ${form.pass}, 
      Course: ${form.course}, 
      Gender: ${form.gender}
      `)
  }
  return (
    <>
    <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
    <h2>Hello {name}</h2>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter username" name="username" value={form.username} onChange={handleChange} />
      <input type="email" placeholder="Enter email" name="email" value={form.email} onChange={handleChange} />
      <input type="number" placeholder="Enter age" name="age" value={form.age} onChange={handleChange} />

      <select name="course" value={form.course} onChange={handleChange}>
        <option selected>Select Course</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Next">Next</option>
      </select>

      <input type="radio" name="gender" value="Male" checked={form.gender==="Male"} onChange={handleChange} /> <span>Male</span>
      <input type="radio" name="gender" value="Female" checked={form.gender==="Female"} onChange={handleChange} /> <span>Female</span>

      <input type="password" placeholder="Enter password" name="pass" value={form.pass} onChange={handleChange} />

      

      <button type="submit" disabled={form.username === "" || form.email === ""}>Submit</button>
    </form>

      <input type={show ? 'text' : 'password'} placeholder="Enter password" />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
<br />
      <textarea cols={20} rows={8} value={char} onChange={(e) => setChar(e.target.value)}></textarea>

      <h2>Character Length: {char.length}</h2>

    </>
  )
}

export default App