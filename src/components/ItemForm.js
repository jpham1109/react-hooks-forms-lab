import { v4 as uuid } from "uuid";
import React, { useState } from "react";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("")

  function handleItemName (event) {
    setItemName(event.target.value)
  }
  function handleItemCategory (event) {
    setItemCategory(event.target.value)
  }

  function handleItemSubmit (event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form onSubmit={handleItemSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
