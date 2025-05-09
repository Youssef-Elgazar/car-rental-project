import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Component imports
import Navbar from "./components/Navbar";
import InfoCard from "./components/InfoCard";
import FeatureCard from "./components/FeatureCard";
import Showcase from "./components/Showcase";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import About from "./components/About";
import Listings from "./components/Listings";
import SubmitListing from "./components/SubmitListing";

// Icon imports
import { FaXTwitter, FaGooglePlay, FaAppStore } from "react-icons/fa6";
import {
	FaSearch,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

// Image imports
import audiImage from "./assets/images/audi.jpg";
import bmwImage from "./assets/images/bmw.jpg";
import fordImage from "./assets/images/ford.jpg";
import mercedesImage from "./assets/images/mercedes.jpg";
import volkswagenImage from "./assets/images/volkswagen.jpg";

// CSS imports
import "./output.css"; // Tailwind CSS (should be imported last)

export function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

	useEffect(() => {
		const checkLoginStatus = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/api/users/check-session",
					{
						withCredentials: true, // Include cookies in the request
					}
				);
				if (response.status === 200) {
					setIsLoggedIn(true);
				}
			} catch (err) {
				if (
					axios.isAxiosError(err) &&
					err.response &&
					err.response.status === 401
				) {
					console.warn("Unauthorized: No valid session found.");
				}
				setIsLoggedIn(false);
			}
		};
		checkLoginStatus();
	}, []);

	return (
		<div id="app">
			<Router>
				<Navbar isLoggedIn={isLoggedIn} /> {/* Pass login state to Navbar */}
				<Routes>
					<Route
						path="/signin"
						element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route path="/signup" element={<SignUp />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/listings" element={<Listings />} />
					<Route path="/submit-listing" element={<SubmitListing />} />
					<Route
						path="/"
						element={
							<>
								<div id="hero">
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
											<button className="search-button">
												Search Cars
												<FaSearch />
											</button>
										</div>
									</div>
								</div>
								<div
									id="explore-premium-brands"
									className="px-4 py-6 w-full flex flex-col items-center -translate-y-7 rounded-t-4xl z-2 relative bg-white"
								>
									<h2
										id="explore-premium-heading"
										className="text-center font-bold relative whitespace-nowrap mb-[2rem] text-[40px] text-gray-800"
									>
										Explore Our Premium Brands~
									</h2>

									<div
										id="brands-grid"
										className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-2 w-full max-w-5xl justify-center"
									>
										<FeatureCard
											title="Audi"
											description="Audi"
											image={audiImage}
										/>
										<FeatureCard
											title="BMW"
											description="BMW"
											image={bmwImage}
										/>
										<FeatureCard
											title="Ford"
											description="Ford"
											image={fordImage}
										/>
										<FeatureCard
											title="Mercedes"
											description="Mercedes"
											image={mercedesImage}
										/>
										<FeatureCard
											title="Volkswagen"
											description="Volkswagen"
											image={volkswagenImage}
										/>
									</div>
								</div>
								<Showcase />
								<section className="flex flex-col items-center justify-center py-15 px-4 bg-gray-50 w-full mx-auto">
									<h2 className="text-2xl md:text-4xl font-bold text-left text-gray-800">
										Why Choose Us?
									</h2>

									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl justify-center mt-2.5">
										<InfoCard
											title="Special Financing Offers"
											description="Our stress-free finance department can find financial solutions to save you money."
										/>
										<InfoCard
											title="Trusted Car Dealership"
											description="10+ years of experience with thousands of satisfied customers."
										/>
										<InfoCard
											title="Transparent Pricing"
											description="No hidden fees - we show you the complete breakdown upfront."
										/>
										<InfoCard
											title="Expert Car Service"
											description="Certified technicians for all your maintenance and repair needs."
										/>
									</div>
								</section>
							</>
						}
					/>
				</Routes>
				<footer className="bg-[#050B20] text-white px-6 md:px-20 py-12">
					<div className="flex flex-col md:flex-row md:justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-8">
						<div>
							<h3 className="text-lg font-semibold">Join Wheelz</h3>
							<p className="text-lg font-semibold text-gray-400 ">
								Receive pricing updates, shopping tips & more!
							</p>
						</div>
						<div className="mt-4 md:mt-0 flex items-center">
							<input
								type="email"
								placeholder="Your email address"
								className="bg-gray-800 text-white px-4 py-2 rounded-l-full outline-none w-64"
							/>
							<button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-r-full text-sm font-semibold">
								Sign Up
							</button>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm text-gray-400">
						<div>
							<h4 className="text-white font-semibold mb-2">Company</h4>
							<ul>
								{[
									"About Us",
									"Blog",
									"Services",
									"FAQs",
									"Terms",
									"Contact Us",
								].map((item, index) => (
									<li
										key={`company-${index}`}
										className="mb-1 hover:text-blue-600 cursor-pointer"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-2">Quick Links</h4>
							<ul>
								{[
									"Get in Touch",
									"Help center",
									"Live chat",
									"How it works",
								].map((item, index) => (
									<li
										key={`quicklinks-${index}`}
										className="mb-1 hover:text-blue-600 cursor-pointer"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-2">Brands like</h4>
							<ul>
								{[
									"Toyota",
									"Porsche",
									"Ferrari",
									"BMW",
									"Rolls-Royce",

									"Mercedes",
									"Volkswagen",
								].map((item, index) => (
									<li
										key={`brands-${index}`}
										className="mb-1 hover:text-blue-600 cursor-pointer"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-2">Vehicles Type</h4>
							<ul>
								{[
									"Sedan",
									"Hatchback",
									"SUV",
									"Hybrid",
									"Electric",
									"Coupe",
									"Convertible",
								].map((item, index) => (
									<li
										key={`vehicles-${index}`}
										className="mb-1 hover:text-blue-600 cursor-pointer"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h4 className="text-white font-semibold mb-2">Our Mobile App</h4>

							<div className="flex space-x-4 mt-2 text-white text-lg">
								<div>
									<FaGooglePlay className="hover:text-lime-500 cursor-pointer" />
								</div>
								<div>
									<FaAppStore className="hover:text-cyan-500 cursor-pointer" />
								</div>
							</div>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h4 className="text-white font-semibold mb-2">Connect With Us</h4>
							<div className="flex space-x-4 mt-2 text-white text-lg">
								<FaFacebookF className="hover:text-blue-500 cursor-pointer" />
								<FaInstagram className="hover:text-pink-500 cursor-pointer" />
								<FaXTwitter className="hover:text-gray-950 cursor-pointer" />
							</div>
						</div>
					</div>
				</footer>
			</Router>
		</div>
	);
}

export default App;
