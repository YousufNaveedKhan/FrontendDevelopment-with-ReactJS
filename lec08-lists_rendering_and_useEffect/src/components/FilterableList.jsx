import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 25000 },
  { id: 2, name: "Phone", category: "Electronics", price: 27000 },
  { id: 3, name: "PC", category: "Electronics", price: 13000 },
  { id: 4, name: "Mouse", category: "Electronics", price: 1500 },
  { id: 5, name: "Keyboard", category: "Electronics", price: 2500 },
];

function FilterableList() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <input
        type="search"
        placeholder="Search product name here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length === 0 && (
        <ul>
          <li>No products found "{search}"</li>
        </ul>
      )}

      {filteredProducts.map((product) => (
        <>
          <ul key={product.id}>
              <li>{product.name}</li>
              <li>{product.category}</li>
              <li>{product.price}</li>          
              </ul>
        </>
      ))}
    </>
  );
}

export default FilterableList;
