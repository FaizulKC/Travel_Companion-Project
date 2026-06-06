import { useState } from "react";

export default function ItemBlock({
  items,
  onDeleteItem,
  onCheckItem,
  onClearList,
}) {
  const [sortItem, setSortItem] = useState("input");

  let sortedItem;

  if (sortItem === "input") sortedItem = items;

  if (sortItem === "description") {
    sortedItem = [...items].sort((a, b) => {
      const textA = a.textBox?.toLowerCase() || "";
      const textB = b.textBox?.toLowerCase() || "";
      return textA.localeCompare(textB);
    });
  }

  if (sortItem === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <ul id="itemBlock">
        {sortedItem?.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              name="itemCheck"
              id={`check-${item.id}`}
              value={item.packed}
              onChange={() => {
                onCheckItem(item.id);
              }}
            />

            <span
              className="text"
              id={`text-${item.id}`}
              style={item.packed ? { textDecoration: "line-through" } : {}}
            >
              {item.quantity} {item.textBox}
            </span>
            <button
              className="itemButton"
              id={`itemButton-${item.id}`}
              onClick={() => onDeleteItem(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
        <div className="sortnclear">
          <select
            name="sortElement"
            id="sortElement"
            value={sortItem}
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option value={"input"}>SORT BY INPUT ORDER</option>
            <option value={"description"}>SORT BY DESCRIPTION</option>
            <option value={"packed"}>SORT BY PACKED STATUS</option>
          </select>
          <button className="reset" onClick={onClearList}>
            Clear list
          </button>
        </div>
      </ul>
    </>
  );
}
