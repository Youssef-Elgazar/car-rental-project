import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";


export function App() {
  return (

    <div id="hero">
      <nav>
        <div id="logo">WHEELZ</div>
        <ul id="nav-menu">
          <li>Home</li>
          <li>Listings</li>
          <li>Contact</li>
          <li>About</li>
          <li> <FontAwesomeIcon icon={faUser} />{" "}Sign In </li>
          <button id="submit-listing-btn">Submit Listing</button>

        </ul>
      </nav>
    </div>
  );
}

export default App;
