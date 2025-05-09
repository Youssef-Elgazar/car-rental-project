import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [message, setMessage] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signup(formData);
			setMessage("User registered successfully!");
			setTimeout(() => navigate("/signin"), 2000); // Redirect to sign-in after 2 seconds
		} catch (err) {
			setMessage("Failed to register user.");
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-gray-100 px-4 py-12">
			<div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
				<div className="bg-gray-800 text-white py-6 px-8">
					<h2 className="text-2xl font-bold text-center">Create Account</h2>
					<p className="text-gray-300 text-center mt-1">
						Join our community today
					</p>
				</div>

				<div className="p-8">
					{message && (
						<div
							className={`mb-4 p-3 ${
								message.includes("successfully")
									? "bg-green-100 text-green-700"
									: "bg-red-100 text-red-700"
							} rounded-lg text-sm`}
						>
							{message}
						</div>
					)}

					<form onSubmit={handleSubmit}>
						<div className="mb-6 relative">
							<div className="flex items-center border-b-2 border-gray-300 py-2">
								<FaUser className="text-gray-400 mr-3" />
								<input
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={formData.username}
									onChange={handleChange}
									className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
									required
								/>
							</div>
						</div>

						<div className="mb-6 relative">
							<div className="flex items-center border-b-2 border-gray-300 py-2">
								<FaLock className="text-gray-400 mr-3" />
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									name="password"
									placeholder="Password"
									value={formData.password}
									onChange={handleChange}
									className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
									required
								/>
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className="text-gray-400 focus:outline-none"
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
						</div>

						<div className="flex items-center mb-6">
							<input
								id="terms"
								type="checkbox"
								className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								required
							/>
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-gray-700"
							>
								I agree to the{" "}
								<Link
									to="#"
									className="font-medium text-blue-600 hover:text-blue-500"
								>
									terms & policy
								</Link>
							</label>
						</div>

						<button
							type="submit"
							className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Sign Up
						</button>
					</form>

					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">
									Or continue with
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-3">
							<div>
								<button
									type="button"
									className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
								>
									<svg
										className="w-5 h-5"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</button>
							</div>

							<div>
								<button
									type="button"
									className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
								>
									<svg
										className="w-5 h-5"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Already have an account?{" "}
							<Link
								to="/signin"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
