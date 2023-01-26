import { useState, useEffect } from "react";
function FilmsList(props) {
  let [list, setList] = useState([]); //destructuring from the return hook call with initial value of empty array.
  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films") //returns promise that needs to be consumed. git request
      .then((response) => response.json()) //parses the body as a json and returns a promise that gets consumed next json object
      .then((films) => {
        // setting list to films
        setList(films); //
      })
      .catch((error) => console.log(error)); //handle erros
  }
  useEffect(() => {
    //useEffect that takes the callback function get films. empty array as dependency array to control when it renders. its blank which means it renders once.
    getFilms();
  }, []);

  //rendering the list
  return (
    <ul>
      {list.map((film) => {
        return <li key={film.id}>{film.title}</li>;
      })}
    </ul>
  );
}

export default FilmsList;
