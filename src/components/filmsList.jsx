import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    //creating constructor to recieve props
    super(props);
    this.state = {
      list: [],
    };
  }
  getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films") //returns promise that needs to be consumed.
      .then((response) => response.json()) //parses the body as a json and returns a promise that gets consumed next json object
      .then((films) => {
        // setting list to films
        this.setState({ list: films }); //
      })
      .catch((error) => console.log(error)); //handle erros
  }
  componentDidMount() {
    this.getFilms(); //when the component mounts, get films(). controls when it is rendered
  }
  render() {
    //rendering the list
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;
