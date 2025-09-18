const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  return (
    <div
      key={todo.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}>
      <span>{todo.text}</span>
      <span>
        <button onClick={() => onClickDelete(todo)}>Delete</button>
        {!todo.done && (
          <button onClick={() => onClickComplete(todo)}>Set as done</button>
        )}
      </span>
    </div>
  );
};

export default Todo;
