import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const API_KEY = "";

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 18px;
	height: 18px;
	background-color: #000;
	border: 2px solid #fff;
	border-radius: 100%;
	user-select: none;
	transform: translate(-50%, -50%);
	cursor: ${props => (props.onClick ? "pointer" : "default")};
	&:hover {
		z-index: 1;
	}
`;

const Marker = ({ text, onClick }) => <Wrapper alt={text} onClick={onClick} />;

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
					yesIWantToUseGoogleMapApiInternals>
					{this.state.lostPets.map((pet, i) => (
						<Marker
							key={i}
							lat={pet.lat}
							lng={pet.lng}
							text={pet.name}
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
