import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51m34-qLjUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'It Ends with Us: A Novel',
    author: 'Colleen Hoover',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41ZLnc34EiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Verity',
    author: 'Colleen Hoover',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((item) => {
        return <Book aBook={item}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.aBook;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
