import React from "react";

function Display({ todo }) {
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
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Display;
