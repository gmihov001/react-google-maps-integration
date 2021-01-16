import React from "react";
import { GoogleMap, Marker } from 'react-google-maps';
import { MyMapComponent } from "./MyMapComponent";


export function Home(props) {
	return (
		<div className="text-center mt-5">
		<MyMapComponent isMarkerShown />

		</div>
	);
}
