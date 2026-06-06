import { useState } from "react";

export default function Form({ onNewItem }) {
  const [textBox, setTextBox] = useState("");
  const [quantity, setQuantity] = useState(1);

  let options = Array.from({ length: 20 }, (_, value) => value + 1);

  function handleForm(e) {
    e.preventDefault();
    const newItem = { quantity, textBox, packed: false, id: Date.now() };
    onNewItem(newItem);
    setQuantity(1);
    setTextBox("");
  }

  return (
    <div className="Form">
      <h3>What Do You Need For Your Trip?</h3>
      <form action="/" id="innerForm" onSubmit={handleForm}>
        <select
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {options.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="textBox"
          id="textBox"
          placeholder="Item..."
          required
          value={textBox}
          onChange={(e) => setTextBox(e.target.value)}
        />
        <button type="submit" id="formButton">
          Add
        </button>
      </form>
    </div>
  );
}
