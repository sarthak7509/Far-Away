export function Item({ item, onDeleteItem, onUpdateItem }) {
  function handleDeleteItem() {
    onDeleteItem(item.id);
  }
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red" }} onClick={handleDeleteItem}>
        X
      </button>
    </li>
  );
}
