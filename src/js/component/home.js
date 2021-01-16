import React from "react";
import { GoogleMap, Marker } from 'react-google-maps';


export function Home(props) {
	return (
		<div className="text-center mt-5">
			<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}></GoogleMap> 
		</div>
	);
}
