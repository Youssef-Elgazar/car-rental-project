import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="mb-6 text-gray-600">Enter your Credentials to access your account</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="h-4 w-4" />
              <label htmlFor="remember" className="text-sm">Remember for 30 days</label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
            >
              Login
            </button>
          </form>

          <div className="my-6 text-center text-gray-400">or</div>

          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center border px-4 py-2 rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <button className="flex-1 flex items-center justify-center border px-4 py-2 rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="mt-6 text-center text-sm">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Right Image Panel */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back.jpg')" }}
      ></div>
    </div>
  );
};

export default SignIn;
