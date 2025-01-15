import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { ListItem } from "./ListItem";
import { Footer } from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleItemStatusChange(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure want to clear item");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <ListItem
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleItemStatusChange}
        onClearItem={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
