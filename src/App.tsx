import React, { useEffect } from "react";
import "./App.css";
import initializer from "./webgl/init";

function App() {
	useEffect(() => {
		initializer("webgl2");
	}, []);

	return (
		<canvas
			id="webgl2"
			width={500}
			height={500}
			style={{ border: "1px solid black" }}
		></canvas>
	);
}

export default App;
