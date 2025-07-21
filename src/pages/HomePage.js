import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const categories = [
  { name: "Men", image: "/images/men.jpg", path: "/men" },
  { name: "Women", image: "/images/women.jpg", path: "/women" },
  { name: "Kids", image: "/images/kids.jpg", path: "/kids" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4 bg-black text-white text-center text-2xl font-bold">
        TrendzWear
      </header>

      <main className="p-4 grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Card key={cat.name} className="rounded-2xl shadow-md">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
              <Link to={cat.path}>
                <Button className="w-full">Shop Now</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 TrendzWear. All rights reserved.
      </footer>
    </div>
  );
}
