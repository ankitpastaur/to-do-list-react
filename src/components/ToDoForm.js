import React from "react";

const ToDoForm = ({handleSubmit, todo, setToDo, editId}) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default ToDoForm;
