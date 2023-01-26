import { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";
function FilmsPage(props) {
  let [list, setList] = useState([]); //destructuring from the return hook call with initial value of empty array.

  let [searchDirector, setSearchDirector] = useState("");

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
  let filmsByDirector = filterFilmsByDirector(list, searchDirector); //derived states
  let directors = getListOf(list, "director"); //passing the string director to get the values at the property director from this list of objects
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);
  //directors will be a unique list of strings of directors
  console.log(filmsByDirector);
  //rendering the list
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <label htmlFor="searchDirector">Filter By Director</label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(e) => {
            setSearchDirector(e.target.value);
          }} //controlling the select by state. When a change happens in the input
        >
          <option value="">All</option>
          {directors.map((director, idx) => {
            return (
              <option key={director + idx} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          // changed from list.map to firmsByDirector
          return (
            <li key={film.id}>
              <Link to={film.id}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
