import React from "react";

import Navbar from "../shared/components/Navbar";
import Hero from "./components/Hero";
import Vote from "./components/Vote";

const Homepage = () => {
	return (
		<div className="flex flex-col mx-5">
			<div className="relative" id="header">
				<Hero />
				<Navbar />
				{/* // TODO: Check why navbar doesn't center on mobile */}
			</div>
			<div id="guess-buttons">
				<Vote />
			</div>
			<div className="relative mt-12 ">
				{/* // TODO: Center div */}
				<h1 className="text-slate-800 mb-5">About CryptoGuess</h1>
				<p>This is a info about the project itself</p>
			</div>
		</div>
	);
};

export default Homepage;
