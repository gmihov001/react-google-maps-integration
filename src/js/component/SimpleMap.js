import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

const API_KEY = "";

const Marker = ({ text }) => <div>{text}</div>;

export class SimpleMaps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lostPets: [],
			foundPets: []
		};
	}

	static defaultProps = {
		center: {
			lat: 26.1723,
			lng: -80.1319
		},
		zoom: 11
	};

	render() {
		return (
			<div
				style={{ height: "100vh", width: "100%" }}
				className="text-center mt-5">
				<GoogleMapReact
					bootstrapURLKeys={{ key: API_KEY }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map, maps }) =>
						apiIsLoaded(map, maps, places)
					}>
					{this.state.lostPets.map(() => (
						<Marker
							lat={59.955413}
							lng={30.337844}
							text="My Marker"
						/>
					))}
				</GoogleMapReact>
			</div>
		);
	}
}

Marker.propTypes = {
	text: PropTypes.string,
	center: PropTypes.object,
	zoom: PropTypes.number
};

SimpleMaps.propTypes = {
	text: PropTypes.string,
	center: PropTypes.object,
	zoom: PropTypes.number
};
