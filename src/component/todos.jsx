import React from "react";

const Todos = ({ todo }) => {
  const { userId, id, title, completed } = todo;
  return (
    <div className="bg-200 flex-wrap gap-2 border-1px text-state-0">
      <h1>todos</h1>
      <div className="todos">
        <h1>userID: {userId}</h1>
        <h2>ID: {id}</h2>
        <h2>title: {title}</h2>
        <h2>complete: {completed}</h2>
      </div>
    </div>
  );
};
export default Todos;
