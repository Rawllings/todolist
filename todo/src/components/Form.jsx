import React, { useState, useEffect } from "react";
import Display from "./Display";

function Form() {
  const [todo, setTodo] = useState([]);
  const [formData, setFormData] = useState({
    list: "",
    start: "",
    end: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:5001/todo")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ ...formData });

    fetch("  http://localhost:5001/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => document.location.reload());
  }

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1 className="head">My ToDo List</h1>
      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="name">Todo List:</label>
        <input
          onChange={handleChange}
          type="text"
          name="list"
          value={formData.list}
        />
        <label htmlFor="name">Start:</label>
        <input
          onChange={handleChange}
          type="date"
          name="start"
          value={formData.start}
        />
        <label htmlFor="name">Finish:</label>
        <input
          onChange={handleChange}
          type="date"
          name="end"
          value={formData.end}
        />
        <label htmlFor="name">Check if completed:</label>
        <input type="checkbox" value="Submit" />
        <label htmlFor="name">Description:</label>
        <textarea
          onChange={handleChange}
          name="description"
          value={formData.description}
        />
        <input type="submit" value="Submit" />
      </form>
      <Display formData={formData} todo={todo} />
    </>
  );
}

export default Form;
