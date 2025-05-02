import React, { useState } from "react";
import { FaUser, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="w-full h-[7vh] flex justify-between items-center px-4">
			<div id="logo">WHEELZ</div>

			{/* Desktop Navigation */}
			<ul id="nav-menu" className="hidden md:flex items-center">
				<li className="mr-4 hover:underline">
					<Link to="/">Home</Link>
				</li>
				<li className="mr-4 hover:underline">
					<Link to="/listings">Listings</Link>
				</li>
				<li className="mr-4 hover:underline">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="mr-4 hover:underline">
					<Link to="/about">About</Link>
				</li>
				<li className="mr-4 hover:underline">
					<Link to="/signin" className="flex justify-items-center items-center">
						<FaUser className="" />
						<span className="ml-1">Sign In</span>
					</Link>
				</li>
				<li className="mr-4 hover:underline">
					<Link to="/signup" className="flex justify-items-center items-center">
						<span className="ml-1">Sign Up</span>
					</Link>
				</li>
				<button
					id="submit-listing-btn"
					className="hover:bg-gray-100 transition-colors"
				>
					Submit Listing
				</button>
			</ul>

			{/* Mobile Menu Button */}
			<button
				className="md:hidden text-white text-2xl z-50"
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{mobileMenuOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-300 ${
					mobileMenuOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
				} md:hidden flex items-center justify-center`}
			>
				<ul className="w-full px-6 space-y-6 text-center">
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							<Link to="/">Home</Link>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							<Link to="/listings">Listings</Link>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							<Link to="/contact">Contact</Link>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							<Link to="/about">About</Link>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center justify-center py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							<FaUser className="mr-2" />
							Sign In
						</a>
					</li>
					<li className="pt-4">
						<button
							id="submit-listing-btn"
							className="w-full max-w-xs mx-auto py-3 rounded-full hover:bg-gray-100 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							Submit Listing
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
