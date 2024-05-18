export const InputTodo = ({ todoText, setTodoText, addBtn }) => {
  return (
    <div className="todo_head">
      <div className="todo_input">
        <input
          type="text"
          placeholder="What you do?"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
      </div>
      <div className="todo_add">
        <button onClick={addBtn}>Add</button>
      </div>
    </div>
  );
};
