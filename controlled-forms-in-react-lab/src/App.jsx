import './App.css';
import Bookshelf from './Bookshelf.jsx';
import { useState } from "react";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" }
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // when we type in the box it changes 
  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  }
  // this fn runs on form submit
  function handleSubmit(e) {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  }

  return (
    <div>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          placeholder="Author"
        />
        <button>Add</button>
      </form>

      {books.map((b, i) => (
        <div key={i}>
          <h4>{b.title}</h4>
          <p>{b.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Bookshelf;
>>>>>>> ade636d (final push)


