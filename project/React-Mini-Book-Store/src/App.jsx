import { useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("Fiction");

  const books = [
    {
      id: 1,
      title: "The Great Adventure",
      author: "John Smith",
      category: "Fiction",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
    },
    {
      id: 2,
      title: "Dream World",
      author: "Emma Johnson",
      category: "Fiction",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
    },
    {
      id: 3,
      title: "The Hidden Story",
      author: "Michael Brown",
      category: "Fiction",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500"
    },
    {
      id: 4,
      title: "Learn About Space",
      author: "David Wilson",
      category: "Non-Fiction",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500"
    },
    {
      id: 5,
      title: "History of the World",
      author: "Sarah Miller",
      category: "Non-Fiction",
      image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=500"
    },
    {
      id: 6,
      title: "Technology Today",
      author: "Robert Davis",
      category: "Non-Fiction",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500"
    }
  ];

  const filteredBooks = books.filter(
    (book) => book.category === category
  );

  return (
    <div className="container">
      <h1>📚 Mini Book Store</h1>
      <p>Explore your favorite books</p>

      <div className="buttons">
        <button
          className={category === "Fiction" ? "active" : ""}
          onClick={() => setCategory("Fiction")}
        >
          📖 Fiction
        </button>

        <button
          className={category === "Non-Fiction" ? "active" : ""}
          onClick={() => setCategory("Non-Fiction")}
        >
          📘 Non-Fiction
        </button>
      </div>

      <h2>{category} Books</h2>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />

            <div className="book-info">
              <h3>{book.title}</h3>
              <p>✍️ {book.author}</p>
              <span>{book.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;