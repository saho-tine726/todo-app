import React from "react";

export const CompleteTodos = ({ completeTodos, backBtn, deleteBtn }) => {
  return (
    <div className="todo_container todo_container-complete">
      <p className="todo_title">Complete List</p>
      <div className="todo_list">
        {completeTodos.length === 0 && <p className="todo_notion">No Items</p>}
        {completeTodos.map((todo, index) => (
          <div key={todo} className="todo_item">
            <p className="todo_text">{todo}</p>
            <div className="todo_buttons">
              <div className="todo_button todo_button-back">
                <button onClick={() => backBtn(index)}>Back</button>
              </div>
              <div className="todo_button todo_button-delete">
                <button onClick={() => deleteBtn(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
