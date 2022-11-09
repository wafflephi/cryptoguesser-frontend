import Navbar from "../shared/components/Navbar";
import Hero from "./components/Hero";
import Vote from "./components/Vote";
import React from "react";

const Homepage = () => {
	return (
		<div className="flex flex-col mx-5">
			<div className="relative" id="screen1">
				<Hero />
				<Navbar />
			</div>
			<div id="screen2">
				<Vote />
			</div>
		</div>
	);
};

export default Homepage;
