import React from "react";
import { GoogleMap, Marker } from "react-google-maps";
import { MyMapComponent } from "./MyMapComponent";

export const Home = props => {
	return (
		<div className="text-center mt-5">
			<MyMapComponent
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};
