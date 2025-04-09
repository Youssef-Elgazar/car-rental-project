import React from "react";
import "./output.css";
import Navbar from "./components/Navbar";
import InfoCard from "./components/InfoCard";
import FeatureCard from "./components/FeatureCard";
import Showcase from "./components/Showcase";

import {
	FaSearch,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter, FaGooglePlay, FaAppStore } from "react-icons/fa6";
export function App() {
	return (
		<div id="app">
			<div id="hero">
				<Navbar />
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
						image="https://s3-alpha-sig.figma.com/img/7786/7001/930a7f83335c2e20a7c2b2aa202f7101?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sGK3WbOrmcX2gcioYXH-rXGvQk5Qj1BFPCnx1wrovKc-7PJf49rd-uQUBPfDKSZf3djh-vc0SS1EoPtex22u~y68hFSm1vvj5FXGFgGWVzAXmgrhhfp2N0JnjEAtVAPifRJmQ9zV-dkgcQU8XAPr0Bo7CwzW-ml64l4sec7JRNaWbBB-Q5nZhwk9bFNqhPtS86NDv0WdUNkqQwiE9E26W0HAog9-BGaT~pYfg0CJzvyrKgZd03BRokcFxQCL3z9rf1-rqdF~v67Pb6ZaRcQ2C3FM9KVfRRJAr-e~xe01hPCaclUjsDVZ5pUyaJRjuPyJbynVjntdyJQJxhR3HOLKfg__"
					/>
					<FeatureCard
						title="BMW"
						description="BMW"
						image="https://s3-alpha-sig.figma.com/img/bf4f/2015/de9eeefd5cce4a73d57992f2bc84735e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bOe0EwKddUZQ3zbP6nlnBZ~fGezZmODa-cAnyoGrbnHjFwBHGDqyyiOCgJqIVycWM5OokZCVJjEcsF4zZ3FORxI7Ww8gUyVbmXskW7PFpA71WZWaY1G7v0xTVXQhO~IxCII3E1NqZmThz-ANLND-kH0nWnHtV8-Wruw3BwjTt2k7v59tNyjM1z8e0q6eeq90PzSTBWYbycjnbuszWDRTlV6iLg7UgfYRutXKyeR3nz1pxyzHM~V7zpE6eLsD8wHpbOx9fM71xtR3F7K1GHBSbN-uyXRamWZxf76I~6gSmQvOcXrnlZy8LnLfjUQIlOblHnxGMzrPe40F6jxlHq4aKw__"
					/>
					<FeatureCard
						title="Ford"
						description="Ford"
						image="https://s3-alpha-sig.figma.com/img/057d/afcd/b2ebc38c7a15af8c45656bcf31dd651e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XVHwHU2UolvBAffFGm8NWGI~jmonRuPi5SeBN7CPEixIJ2PkpYvv18Mug95HJQ52gi53Zq0NfyZ4k0QnqMU82pFNRDKfyR1iyTV5qxXLJ3H~yktzfsJvIppesN1wwCFGSdeEoFkXjdPJgN65BUqisB4yF3NF0ReKjQdQydjh85hLe3WXG~JbaiFXonDFAOjehrG9uUyOCBhThYl96V7tD2Ybkc9NDV-jax3USuH7jl76LrpRTHnbjehFm6TZSYGD5ZH-ZK7ujEe8WxDGvEhmaKunoYB4dKxbsTWRft5UFVii92yj145f0Dtw9fPBFlYKZR5zNtzs2CfO8fuTCGZOoQ__"
					/>
					<FeatureCard
						title="Mercedes"
						description="Mercedes"
						image="https://s3-alpha-sig.figma.com/img/9169/ee75/5e42830825dc7da7172ff0d9f468751c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V407~eeKuf-EnqZ-KCWMRx9Hewgg7HImS0P6qBtSE~~cwDksuh~yzbFIZw1CMnnLwyeMf7EBvjxTqlhRxSeUVCXV-xl6ySyhEAwkuxJZ3dNr345Ob556oTXAu34vt7gVOD7suozXPXt0Aes~qV3pFkgoGXh2edxADUw8PQPOgWjpZW2afZH908-ejGlNkqVKVY1a~x1GGtYYwkMH7ZIHskupPt2g4qpMa5BHmMwW2yfFupF5VgNFPNg4hfbSXaocGG0b76chNvOR7-UGT6eWfIlHoN4bzhKbvqLu-41y5RU--F4aDuHpZ950eBXqsDmNcurob-Rc7N5oi3v95G1t1A__"
					/>
					<FeatureCard
						title="Volkswagen"
						description="Volkswagen"
						image="https://s3-alpha-sig.figma.com/img/05a6/e90a/fa4ddde39f89666584b6d75125072301?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FpcEA8w9Tw1dr2RboR6vgXD1unbiE5MAiYGh~4333YMmu~Qdfcqzd7g96tm~9kp4vOGgqekGkhFBpN7BMlceGLsPoQ12UZFkFxbdrKv3OJeNxOJ0Vg2uPFlZKAWghUDAofTFfMP54~prpk2tcgebmJMie1AaBs3JC2czCC2hBV1SVaeAZHmS~l8G9QWrWwlYr2ZunIkvSvT3ir-G7G1ROx1WaASBTBUw0DHGCNNWEShYBUxOzcHXdRKUXgXI8F5x7usOLbO8RJTeBNFDstK43DscOq9A834Mv-GGVXqhyRNGezQv4DGoLFTDKfrO-zFlWAIEF8wF0PW3YEaP1BAydg__"
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
							].map((item) => (
								<li
									key={item}
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
							{["Get in Touch", "Help center", "Live chat", "How it works"].map(
								(item) => (
									<li
										key={item}
										className="mb-1 hover:text-blue-600 cursor-pointer"
									>
										{item}
									</li>
								)
							)}
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
								"BMW",
								"Mercedes",
								"Volkswagen",
							].map((item) => (
								<li
									key={item}
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
							].map((item) => (
								<li
									key={item}
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
		</div>
	);
}

export default App;
