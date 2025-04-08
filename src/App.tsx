import React from "react";
import "./output.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./components/InfoCard";

export function App() {
	return (
		<div id="app">
			<div id="hero" className="z-1 relative">
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
						<button className="search-button">
							Search Cars
							<FontAwesomeIcon size="xs" icon={faMagnifyingGlass} />
						</button>
					</div>
				</div>
			</div>
			<div
				id="explore-premium-brands"
				className="px-4 py-8 w-full flex flex-col -translate-y-7 rounded-t-4xl z-2 relative bg-white"
			>
				<h2
					id="explore-premium-heading"
					className="text-center font-bold relative whitespace-nowrap mb-[2rem] text-[40px] text-gray-800"
				>
					Explore Our Premium Brands~
				</h2>

				<div
					id="brands-grid"
					className="justify-center space-x-4 min-w-max grid grid-cols-5 gap-4 p-4"
				>
					<InfoCard
						title="Audi"
						description="Audi"
						image="https://s3-alpha-sig.figma.com/img/7786/7001/930a7f83335c2e20a7c2b2aa202f7101?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sGK3WbOrmcX2gcioYXH-rXGvQk5Qj1BFPCnx1wrovKc-7PJf49rd-uQUBPfDKSZf3djh-vc0SS1EoPtex22u~y68hFSm1vvj5FXGFgGWVzAXmgrhhfp2N0JnjEAtVAPifRJmQ9zV-dkgcQU8XAPr0Bo7CwzW-ml64l4sec7JRNaWbBB-Q5nZhwk9bFNqhPtS86NDv0WdUNkqQwiE9E26W0HAog9-BGaT~pYfg0CJzvyrKgZd03BRokcFxQCL3z9rf1-rqdF~v67Pb6ZaRcQ2C3FM9KVfRRJAr-e~xe01hPCaclUjsDVZ5pUyaJRjuPyJbynVjntdyJQJxhR3HOLKfg__"
					/>
					<InfoCard
						title="BMW"
						description="BMW"
						image="https://s3-alpha-sig.figma.com/img/bf4f/2015/de9eeefd5cce4a73d57992f2bc84735e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bOe0EwKddUZQ3zbP6nlnBZ~fGezZmODa-cAnyoGrbnHjFwBHGDqyyiOCgJqIVycWM5OokZCVJjEcsF4zZ3FORxI7Ww8gUyVbmXskW7PFpA71WZWaY1G7v0xTVXQhO~IxCII3E1NqZmThz-ANLND-kH0nWnHtV8-Wruw3BwjTt2k7v59tNyjM1z8e0q6eeq90PzSTBWYbycjnbuszWDRTlV6iLg7UgfYRutXKyeR3nz1pxyzHM~V7zpE6eLsD8wHpbOx9fM71xtR3F7K1GHBSbN-uyXRamWZxf76I~6gSmQvOcXrnlZy8LnLfjUQIlOblHnxGMzrPe40F6jxlHq4aKw__"
					/>
					<InfoCard
						title="Ford"
						description="Ford"
						image="https://s3-alpha-sig.figma.com/img/057d/afcd/b2ebc38c7a15af8c45656bcf31dd651e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XVHwHU2UolvBAffFGm8NWGI~jmonRuPi5SeBN7CPEixIJ2PkpYvv18Mug95HJQ52gi53Zq0NfyZ4k0QnqMU82pFNRDKfyR1iyTV5qxXLJ3H~yktzfsJvIppesN1wwCFGSdeEoFkXjdPJgN65BUqisB4yF3NF0ReKjQdQydjh85hLe3WXG~JbaiFXonDFAOjehrG9uUyOCBhThYl96V7tD2Ybkc9NDV-jax3USuH7jl76LrpRTHnbjehFm6TZSYGD5ZH-ZK7ujEe8WxDGvEhmaKunoYB4dKxbsTWRft5UFVii92yj145f0Dtw9fPBFlYKZR5zNtzs2CfO8fuTCGZOoQ__"
					/>
					<InfoCard
						title="Mercedes"
						description="Mercedes"
						image="https://s3-alpha-sig.figma.com/img/9169/ee75/5e42830825dc7da7172ff0d9f468751c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V407~eeKuf-EnqZ-KCWMRx9Hewgg7HImS0P6qBtSE~~cwDksuh~yzbFIZw1CMnnLwyeMf7EBvjxTqlhRxSeUVCXV-xl6ySyhEAwkuxJZ3dNr345Ob556oTXAu34vt7gVOD7suozXPXt0Aes~qV3pFkgoGXh2edxADUw8PQPOgWjpZW2afZH908-ejGlNkqVKVY1a~x1GGtYYwkMH7ZIHskupPt2g4qpMa5BHmMwW2yfFupF5VgNFPNg4hfbSXaocGG0b76chNvOR7-UGT6eWfIlHoN4bzhKbvqLu-41y5RU--F4aDuHpZ950eBXqsDmNcurob-Rc7N5oi3v95G1t1A__"
					/>
					<InfoCard
						title="Volkswagen"
						description="Volkswagen"
						image="https://s3-alpha-sig.figma.com/img/05a6/e90a/fa4ddde39f89666584b6d75125072301?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FpcEA8w9Tw1dr2RboR6vgXD1unbiE5MAiYGh~4333YMmu~Qdfcqzd7g96tm~9kp4vOGgqekGkhFBpN7BMlceGLsPoQ12UZFkFxbdrKv3OJeNxOJ0Vg2uPFlZKAWghUDAofTFfMP54~prpk2tcgebmJMie1AaBs3JC2czCC2hBV1SVaeAZHmS~l8G9QWrWwlYr2ZunIkvSvT3ir-G7G1ROx1WaASBTBUw0DHGCNNWEShYBUxOzcHXdRKUXgXI8F5x7usOLbO8RJTeBNFDstK43DscOq9A834Mv-GGVXqhyRNGezQv4DGoLFTDKfrO-zFlWAIEF8wF0PW3YEaP1BAydg__"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
