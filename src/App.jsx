import { useState } from "react";
import "./App.css";
import Edit from "./components/a";
import Three from "./components/b";
import FilmsList from "./components/filmsList";
function App(props) {
  let [list, setList] = useState(["ready", "set,", "go"]); //use state for the list
  let [text, setText] = useState("");
  function onSubmit(event) {
    //html on submit event
    event.preventDefault();
    let newList = [...list, text]; //spread operator creates copy of previous list
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)} //assigning it to the value currently in the input
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return <li key={item + idx}>{item}</li>; //for every item i'm returning a list item
        })}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;
