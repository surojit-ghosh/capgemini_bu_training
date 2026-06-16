import { memo } from "react";

const BookList = memo(function BookList({ books, markAsFavorite }) {
  console.log("BookList rendered");

  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold mb-2 text-gray-700">Books</h3>
      {books.map((book) => (
        <div
          key={book.id}
          className="flex justify-between items-center py-2 border-b last:border-0"
        >
          <span className="text-sm">{book.name}</span>
          <button
            onClick={() => markAsFavorite(book.id)}
            className={`text-xs px-3 py-1 rounded font-semibold ${
              book.favorite
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-purple-100"
            }`}
          >
            {book.favorite ? "★ Favorite" : "☆ Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
});

export default BookList;
