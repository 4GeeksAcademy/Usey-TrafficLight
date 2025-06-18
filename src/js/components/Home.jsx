import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState ("red")

	return (
		<div id="light">
			<button type="button" id="redLight" style={{background : "red", boxShadow: color == "red" && "0 0 10px 15px white"}} onClick ={() => setColor ("red")}></button>
			<button type="button" id="yellowLight" style={{background : "yellow", boxShadow: color == "yellow" && "0 0 10px 15px white"}} onClick ={() => setColor ("yellow")}></button>
			<button type="button" id="greenLight" style={{background : "green", boxShadow: color == "green" && "0 0 10px 15px white"}} onClick ={() => setColor ("green")}></button>
		</div>
		
	);
};

export default TrafficLight;