import { useState, useCallback } from "react";
import BookList from "./BookList";

const initialBooks = [
  { id: 1, name: "React Basics", favorite: false },
  { id: 2, name: "JavaScript Essentials", favorite: false },
  { id: 3, name: "Node.js Intro", favorite: false },
];

function LibraryApp() {
  const [books, setBooks] = useState(initialBooks);
  const [color, setColor] = useState("text-purple-700");

  const markAsFavorite = useCallback((id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book,
      ),
    );
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-6 space-y-4 p-4">
      <h1 className={`text-xl font-bold ${color}`}>Library Management</h1>

      <BookList books={books} markAsFavorite={markAsFavorite} />

      <button
        onClick={() =>
          setColor((prev) =>
            prev === "text-purple-700" ? "text-green-700" : "text-purple-700",
          )
        }
        className="px-4 py-1.5 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
      >
        Change Title Color
      </button>
    </div>
  );
}

export default LibraryApp;
