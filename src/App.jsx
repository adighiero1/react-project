import { Component } from "react";
import "./App.css";
import Edit from "./components/a";
import Three from "./components/b";

class App extends Component {
  constructor(props) {
    super(props); //creating constructor
    this.state = {
      list: ["ready", "set", "GO"], //this.state equal this object
      text: "", // this is the text that is being changed by the onChange function
    };
    this.onSubmit = this.onSubmit.bind(this); //without binding on the form it doesn't refrence this. so bind it
  }
  onSubmit(event) {
    //html on submit event
    event.preventDefault();
    let newList = [...this.state.list, this.state.text]; //spread operator creates copy of previous list
    this.setState({ list: newList, text: "" });
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })} //assigning it to the value currently in the input
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>; //for every item i'm returning a list item
          })}
        </ul>
      </div>
    );
  }
}

export default App;
