import React, { useState } from "react";
import { FaUser, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="w-full h-[7vh] flex justify-between items-center px-4">
			<div id="logo">WHEELZ</div>

			{/* Desktop Navigation */}
			<ul id="nav-menu" className="hidden md:flex items-center">
				<li className="mr-4 hover:underline">Home</li>
				<li className="mr-4 hover:underline">Listings</li>
				<li className="mr-4 hover:underline">Contact</li>
				<li className="mr-4 hover:underline">About</li>
				<li className="mr-4 hover:underline">
					<a href="#" className="flex justify-items-center items-center">
						<FaUser className="" />
						<span className="ml-1">Sign In</span>
					</a>
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
							Home
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							Listings
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							Contact
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							About
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
