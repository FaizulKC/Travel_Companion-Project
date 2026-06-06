import { useState } from "react";
import Header from "./assets/Components/Header";
import Form from "./assets/Components/Form";
import ItemBlock from "./assets/Components/ItemBlock";
import Footer from "./assets/Components/Footer";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleCheckedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    items.length !== 0
      ? window.confirm("Are you sure you want to delete all items?")
        ? setItems([])
        : ""
      : alert("Your list is currently empty. Please add an item first.");
  }

  return (
    <div className="app">
      <Header />
      <Form onNewItem={handleNewItem} />
      <ItemBlock
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckedItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
