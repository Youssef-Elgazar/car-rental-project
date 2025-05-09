import React, { useState } from "react";
import { FaUser, FaTimes, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api"; // Import the logout function

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await logout(); // Call the server to clear the cookie
			navigate("/signin"); // Redirect to sign-in page
			window.location.reload(); // Reload to reset state
		} catch (error) {
			console.error("Failed to sign out", error);
		}
	};

	const handleSubmitListing = () => {
		navigate("/submit-listing");
		setMobileMenuOpen(false); // Close mobile menu if open
	};

	return (
		<nav className="w-full h-[7vh] flex justify-between items-center px-4 py-6">
			<div className="cursor-default" id="logo">
				WHEELZ
			</div>

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
				{!isLoggedIn ? (
					<>
						<li className="mr-4 hover:underline">
							<Link
								to="/signin"
								className="flex justify-items-center items-center"
							>
								<FaUser className="" />
								<span className="ml-1">Sign In</span>
							</Link>
						</li>
						<li className="mr-4 hover:underline">
							<Link
								to="/signup"
								className="flex justify-items-center items-center"
							>
								<span className="ml-1">Sign Up</span>
							</Link>
						</li>
					</>
				) : (
					<li className="mr-4 hover:underline">
						<button
							onClick={handleSignOut}
							className="flex justify-items-center items-center transition-colors"
						>
							<span className="ml-1">Sign Out</span>
						</button>
					</li>
				)}
				{isLoggedIn && (
					<button
						id="submit-listing-btn"
						className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow transition-colors py-1 px-3 text-sm"
						onClick={handleSubmitListing}
					>
						Submit Listing
					</button>
				)}
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
						<Link
							to="/"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/listings"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							Listings
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							onClick={() => setMobileMenuOpen(false)}
						>
							About
						</Link>
					</li>
					{!isLoggedIn ? (
						<>
							<li>
								<Link
									to="/signin"
									className="flex items-center justify-center py-3 text-xl text-white hover:text-blue-300 transition-colors"
									onClick={() => setMobileMenuOpen(false)}
								>
									<FaUser className="mr-2" />
									Sign In
								</Link>
							</li>
							<li>
								<Link
									to="/signup"
									className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
									onClick={() => setMobileMenuOpen(false)}
								>
									Sign Up
								</Link>
							</li>
						</>
					) : (
						<li className="pt-4">
							<button
								onClick={handleSignOut}
								className="block py-3 text-xl text-white hover:text-blue-300 transition-colors"
							>
								Sign Out
							</button>
						</li>
					)}
					{isLoggedIn && (
						<li className="pt-4">
							<button
								id="submit-listing-btn"
								className="w-full max-w-xs mx-auto py-2 px-4 rounded-full hover:bg-gray-100 transition-colors text-sm"
								onClick={handleSubmitListing}
							>
								Submit Listing
							</button>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
