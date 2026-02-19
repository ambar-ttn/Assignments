"use client";
import { useReducer } from "react";

const dummyProducts = [
  { id: 1, name: "Wireless Mouse", price: 799 },
  { id: 2, name: "Mechanical Keyboard", price: 3499 },
  { id: 3, name: "USB-C Charger", price: 999 },
  { id: 4, name: "Bluetooth Headphones", price: 2499 },
  { id: 5, name: "Laptop Stand", price: 1299 },
  { id: 6, name: "Smartphone Tripod", price: 699 },
  { id: 7, name: "Power Bank", price: 1599 },
  { id: 8, name: "LED Desk Lamp", price: 1899 },
  { id: 9, name: "Hard Drive 1TB", price: 5499 },
  { id: 10, name: "Earbuds", price: 2999 }
];

function reducer(state, action) {
  switch (action.type) {
    case "GET":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, dummyProducts);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-5 rounded shadow">

        <h1 className="text-xl font-semibold mb-4 text-center">
          Products
        </h1>

        {/* ADD FORM */}
        <form
          className="flex gap-2 mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const price = Number(e.target.price.value);
            if (!name || !price) return;

            dispatch({
              type: "ADD",
              payload: { id: Date.now(), name, price }
            });

            e.target.reset();
          }}
        >
          <input
            name="name"
            placeholder="Name"
            className="flex-1 border rounded px-2 py-1 text-sm"
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="w-24 border rounded px-2 py-1 text-sm"
          />
          <button className="bg-blue-500 text-white px-3 rounded text-sm">
            Add
          </button>
        </form>

        {/* PRODUCT LIST */}
        <div className="space-y-2">
          {state.map(product => (
            <div
              key={product.id}
              className="flex justify-between items-center border rounded p-2"
            >
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-gray-500">₹{product.price}</p>
              </div>

              <button
                onClick={() =>
                  dispatch({ type: "DELETE", payload: product.id })
                }
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
