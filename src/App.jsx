import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages"; //its pulling index.js as default
function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="films/:id" element={<SingleFilmPage />} />
        {/* id: this comes from params in the other file where we are destructuring id using params*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
