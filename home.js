import React, { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Products</h1>
      {items.map(item => (
        <div key={item._id} className="border p-2 mb-2 rounded">
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;