import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51m34-qLjUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'It Ends with Us: A Novel',
  author: 'Colleen Hoover',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="bear" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
