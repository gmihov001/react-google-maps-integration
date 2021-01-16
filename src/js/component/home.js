import React from "react";
import { GoogleMap, Marker } from "react-google-maps";
import { MyMapComponent } from "./MyMapComponent";

export const Home = props => {
	return (
		<div className="text-center mt-5">
			<MyMapComponent isMarkerShown={false} />
		</div>
	);
};
