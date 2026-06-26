import React, { useState, useEffect } from "react";
import Todos from "./component/todos";

function App() {
  const [data, setData] = useState([]);
  
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://corsproxy.io/?url=https://jsonplaceholder.typicode.com/todos",
        );
        const todos = await response.json();
        setData(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, []);

  
  const getFilteredTodos = () => {
    if (filterType === "completed") {
      return data.filter((t) => t.completed === true);
    }
    if (filterType === "incomplete") {
      return data.filter((t) => t.completed !== true);
    }
    return data; // "all" shows everything
  };

  const filteredData = getFilteredTodos();

  return (
    <div>
      
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setFilterType("all")}>Show All</button>
        <button onClick={() => setFilterType("completed")}>Completed</button>
        <button onClick={() => setFilterType("incomplete")}>Incomplete</button>
      </div>

      
      <div className="todos">
        {filterType === "all" && <h1>Todo APP (All)</h1>}
        {filterType === "completed" && <h1>COMPLETED TODOS</h1>}
        {filterType === "incomplete" && <h1>INCOMPLETE TODOS</h1>}

        
        <div className="container">
          {/* this is where the todos will be displayed based on the filter if data is available or not */}
          {filteredData.length > 0 ? (
            filteredData.map((todo) => (
              
              <Todos key={todo.id} todo={todo} />

              
              // <div key={todo.id} style={{ border: "1px solid #ccc", margin: "10px" }}>
              //   <h1>userID: {todo.userId}</h1>
              //   <h2>ID: {todo.id}</h2>
              //   <h2>title: {todo.title}</h2>
              //   <h2>complete: {todo.completed ? "Yes" : "No"}</h2>
              // </div>
            ))
          ) : (
            <p>Loading or no items found...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
