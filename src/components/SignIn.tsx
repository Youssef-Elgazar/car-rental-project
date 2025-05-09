import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = ({
	setIsLoggedIn,
}: {
	setIsLoggedIn: (value: boolean) => void;
}) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			// The backend will set the HTTP-only cookie
			const response = await login(formData);

			if (response.status === 200) {
				setIsLoggedIn(true);
				navigate("/"); // Redirect to home page
			}
		} catch (err: any) {
			setError(err.response?.data?.error || "Failed to sign in");
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-gray-100 px-4 py-12">
			<div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
				<div className="bg-gray-800 text-white py-6 px-8">
					<h2 className="text-2xl font-bold text-center">Welcome Back</h2>
					<p className="text-gray-300 text-center mt-1">
						Sign in to your account
					</p>
				</div>

				<div className="p-8">
					{error && (
						<div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
							{error}
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

						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center">
								<input
									id="remember-me"
									type="checkbox"
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-700"
								>
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-blue-600 hover:text-blue-500"
								>
									Forgot password?
								</a>
							</div>
						</div>

						<button
							type="submit"
							className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Sign In
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Sign Up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
