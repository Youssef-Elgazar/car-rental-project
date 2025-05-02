import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="flex min-h-screen">
			<div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8">
				<h2 className="text-3xl font-bold mb-2">Get Started Now</h2>
				<form className="w-full max-w-sm">
					<label className="block mb-2 text-sm font-medium">Name</label>
					<input type="text" className="w-full mb-2 px-3 py-2 border rounded" placeholder="Enter your name" />
					<label className="block mb-2 text-sm font-medium">Email address</label>
					<input type="email" className="w-full mb-2 px-3 py-2 border rounded" placeholder="Enter your email" />
					<label className="block mb-2 text-sm font-medium">Password</label>
					<input type="password" className="w-full mb-2 px-3 py-2 border rounded" placeholder="Name" />
					<div className="flex items-center mb-4">
						<input type="checkbox" className="mr-2" id="terms" />
						<label htmlFor="terms" className="text-xs">I agree to the <Link to="#" className="underline">terms & policy</Link></label>
					</div>
					<button type="submit" className="w-full bg-green-900 text-white py-2 rounded mb-4">Signup</button>
				</form>
				<div className="flex justify-center gap-4 mb-4">
					<button className="flex items-center border px-4 py-2 rounded shadow hover:bg-gray-50 transition">
						<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
						<span className="text-sm font-medium">Sign in with Google</span>
					</button>
					<button className="flex items-center border px-4 py-2 rounded shadow hover:bg-gray-50 transition">
						<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5 mr-2" />
						<span className="text-sm font-medium">Sign in with Apple</span>
					</button>
				</div>
				<p className="text-sm">Have an account? <Link to="/signin" className="text-blue-600">Sign In</Link></p>
			</div>
			<div className="hidden md:block w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/back.jpg)' }}></div>
		</div>
	);
};

export default SignUp; 