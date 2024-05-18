export const WorkingTodos = ({ workingTodos, completeBtn }) => {
  return (
    <div className="todo_container todo_container-working">
      <p className="todo_title">Todo List</p>
      <div className="todo_list">
        {workingTodos.length === 0 && <p className="todo_notion">No Items</p>}
        {workingTodos.map((todo, index) => (
          <div key={todo} className="todo_item">
            <p className="todo_text">{todo}</p>
            <div className="todo_buttons">
              <div className="todo_button todo_button-complete">
                <button onClick={() => completeBtn(index)}>Complete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
