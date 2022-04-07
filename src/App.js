import { useState } from "react";
import "./App.css";

const booksDictionary = {
  javascript: [
    {
      name: "Javascript the good parts",
      rating: "4.5/5",
    },
    {
      name: "Eloquent Javascript",
      rating: "4.9/5",
    },
    {
      name: "Learn Javascript Visually",
      rating: "4.4/5",
    },
  ],
  react: [
    {
      name: "Learning React",
      rating: "4.5/5",
    },
    {
      name: "React Quickly",
      rating: "4.9/5",
    },
    {
      name: "FullStack React",
      rating: "4.4/5",
    },
  ],
  html: [
    {
      name: "Learning Web Designing",
      rating: "4.5/5",
    },
    {
      name: "Html5 and Css3",
      rating: "4.9/5",
    },
    {
      name: "Murach's Html5 and Css3",
      rating: "4.4/5",
    },
  ],
};

const booksWeKnow = Object.keys(booksDictionary);

function App() {
  const [selectedBook, setBookTab] = useState("javascript");

  function onClickHandler(event) {
    var bookActive = event.target.textContent;
    setBookTab(bookActive);
  }

  return (
    <div className="App">
      <h1>Good-Books</h1>
      <p>Checkout my favourite books. Select a genre to get Started</p>
      <hr />
      <div className="button">
        {booksWeKnow.map((bookActive) => {
          return (
            <button key={bookActive} onClick={onClickHandler}>
              {bookActive}
            </button>
          );
        })}
      </div>
      <div className="li">
        <ul>
          {booksDictionary[selectedBook].map((reactBook) => {
            return (
              <li key={reactBook}>
                <div>{reactBook.name}</div>
                <div>
                  <small>
                    {reactBook.rating}
                  </small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
