import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleFilmPage(props) {
  let [item, setItem] = useState({});
  let { id } = useParams(); //destructuring id from the returned object of useParams. useParams will parse our URL parameters and return an object. In this case the object will contain an ID property which I will de-structure that can be used later on.

  function getFilm() {
    fetch("https://studioghibliapi-d6fc8.web.app/films/" + id)
      .then((res) => res.json()) //parses the body as a json and returns a promise that gets consumed next json object
      .then((film) => {
        // setting the film
        setItem(film); //
      })
      .catch((error) => console.log(error)); //handle erros
  }
  useEffect(() => {
    //useEffect will call getFilm once upon render
    getFilm();
  }, []);
  return (
    <div>
      <div>
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default SingleFilmPage;
