import React, { useState } from "react";
import List from "./data/data.js";

function Cart() {
  const [list, setList] = useState(List);

  const handleOnclick = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isAddedToCart: false } : item
      )
    );
  };

  return (
    <div className="mt-8 p-6 w-full bg-yellow-50">
      <h2 className="text-3xl font-semibold text-center mb-6 text-green-800">
        Cart Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-4 justify-center">
        {list.map((item) =>
          item.isAddedToCart ? (
            <div
              key={item.id}
              className="max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg flex flex-col"
            >
              <img className="w-full" src={item.imageUrl} alt={item.name} />
              <div className="px-6 py-4 flex-grow">
                <div className="font-semibold text-gray-700 text-xs mb-2">
                  {item.weight}
                </div>
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base line-through">
                  Rs. {item.price}
                </p>
                <span>Rs. {item.discountedPrice}</span>
              </div>
              <div className="px-6 py-4">
                <button
                  onClick={() => handleOnclick(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-end"
                >
                  Remove item
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Cart;


