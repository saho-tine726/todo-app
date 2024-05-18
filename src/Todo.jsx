import React, { useState } from "react";
import "./styles/todo.scss";
import { InputTodo } from "./components/InputTodo";
import { WorkingTodos } from "./components/WorkingTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const [workingTodos, setWorkingTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const addBtn = () => {
    if (todoText === "") return;
    setWorkingTodos([...workingTodos, todoText]);
    setTodoText("");
  };

  const completeBtn = (index) => {
    const newWorkingTodos = [...workingTodos];
    newWorkingTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, workingTodos[index]];

    setWorkingTodos(newWorkingTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const backBtn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newWorkingTodos = [...workingTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setWorkingTodos(newWorkingTodos);
  };

  const deleteBtn = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };

  return (
    <div className="todo">
      <InputTodo
        todoText={todoText}
        setTodoText={setTodoText}
        addBtn={addBtn}
      />
      <div className="todo_body">
        <WorkingTodos
          workingTodos={workingTodos}
          completeBtn={completeBtn}
        />
        <CompleteTodos completeTodos={completeTodos} backBtn={backBtn} deleteBtn={deleteBtn} />
      </div>
    </div>
  );
};
