import { useState } from 'react';

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  });

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {}
      </div>
      <div className="bookCardsDiv">
        {}
      </div>
    </div>
  );
}

export default Bookshelf;
