import React from "react";

const categories = [
  { name: "Men", image: "/images/men.jpg" },
  { name: "Women", image: "/images/women.jpg" },
  { name: "Kids", image: "/images/kids.jpg" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4 bg-black text-white text-center text-2xl font-bold">
        TrendzWear
      </header>

      <main className="p-4 grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="rounded-2xl shadow-md overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
              <button className="w-full bg-black text-white py-2 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 TrendzWear. All rights reserved.
      </footer>
    </div>
  );
}