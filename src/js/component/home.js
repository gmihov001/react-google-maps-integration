import React from "react";
import GoogleMapReact from "google-map-react";
import { MyMapComponent } from "./MyMapComponent";
import { SimpleMaps } from "./SimpleMap";

export const Home = props => {
	return (
		<div className="text-center mt-5">
			<SimpleMaps />
		</div>
	);
};
