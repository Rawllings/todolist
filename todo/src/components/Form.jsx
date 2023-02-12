import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    list: "",
    start: "",
    end: "",
    box: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData);

  return (
    <>
      <h1 className="head">My ToDo List</h1>
      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="name">Todo List:</label>
        <input
          onChange={handleChange}
          type="text"
          name="list"
          id="name"
          value={formData.list}
        />
        <label htmlFor="name">Start:</label>
        <input
          onChange={handleChange}
          type="date"
          name="start"
          id="name"
          value={formData.start}
        />
        <label htmlFor="name">Finish:</label>
        <input
          onChange={handleChange}
          type="date"
          name="end"
          id="name"
          value={formData.end}
        />
        <label htmlFor="name">Check if completed:</label>
        <input type="checkbox" value="Submit" />
        <label htmlFor="name">Description:</label>
        <textarea
          onChange={handleChange}
          name="description"
          id="name"
          value={formData.description}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
