import React from "react";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Piim", isDone: false },
    { id: 2, name: "Leib", isDone: true },
    { id: 3, name: "Munad", isDone: false },
  ]);

  let nextId = items.length + 1;

  function addItem() {
    if (newItem.trim() === "") return;

    setItems([...items, { id: nextId, name: newItem.trim(), isDone: false }]);

    setNewItem("");
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItem()}
      />

      <button onClick={addItem}>Add item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
