import React from "react";

function Display({ todo, formData }) {
  function handleDelete(id) {
    fetch(`http://localhost:5001/todo/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => document.location.reload(data));
  }

  function handleEdit(id) {
    fetch(`http://localhost:5001/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((res) => res.json())
      .then((data) => document.location.reload(data));
  }

  return (
    <>
      <h1 className="head1">Display data</h1>
      <div className="upline">
        {Array.isArray(todo)
          ? todo.map((element, index) => {
              return (
                <div key={index} className=" cards">
                  <h2>Job title: {element.list}</h2>
                  <h2>
                    Starting date: <span> {element.start}</span>
                  </h2>
                  <h2>
                    Ending date: <span> {element.end}</span>
                  </h2>
                  <h2>
                    <p>
                      Job description:
                      <span className="small"> {element.description}</span>
                    </p>
                  </h2>
                  <div className="bttn">
                    <button
                      className="button"
                      onClick={() => handleDelete(element.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn"
                      onClick={(e) => handleEdit(e.event.value)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Display;
