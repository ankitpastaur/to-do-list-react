import React, { useState } from "react";
import "./App.css";

import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editToDo = todos.find((i) => i.id === editId);
      const updatedToDos = todos.map((t) =>
        t.id === editToDo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setToDos(updatedToDos);
      setEditId(0);
      setToDo("");
      return;
    }

    if (todo !== "") {
      setToDos([{ id: `${todo} - ${Date.now()}`, todo }, ...todos]);
      setToDo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setToDos([...delTodo]);
    setEditId(id);
  };

  const handleEdit = (id) => {
    const editToDo = todos.find((i) => i.id === id);
    setToDo(editToDo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do list app</h1>

        <ToDoForm
          handleSubmit={handleSubmit}
          editId={editId}
          todo={todo}
          setToDo={setToDo}
        />

        <ToDoList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
