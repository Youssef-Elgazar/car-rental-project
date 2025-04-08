import React from "react";
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
					<li>
						{" "}
						<FontAwesomeIcon icon={faUser} /> Sign In{" "}
					</li>
					<button id="submit-listing-btn">Submit Listing</button>
				</ul>
			</nav>

			<div id="search-area">
				<h2 id="search-heading">FIND YOUR PERFECT CAR</h2>
				<div className="search-bar">
					<select className="dropdown">
						<option>Any Makes</option>
					</select>

					<select className="dropdown">
						<option>Any Models</option>
					</select>

					<div className="prices">
						<label htmlFor="price">Prices:</label>
						<select id="price" className="dropdown no-border">
							<option>All Prices</option>
						</select>
					</div>

					<button className="search-button">🔍 Search Cars</button>
				</div>
			</div>
		</div>
	);
}

export default App;
