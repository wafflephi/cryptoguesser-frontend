import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./homepage/Homepage";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default App;
