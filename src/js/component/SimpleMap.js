import React from "react";
import GoogleMapReact from "google-map-react";

const API_KEY = process.env.REACT_APP_MAP_API_KEY; 

const AnyReactComponent = ({text}) => <div>{text}</div>;

export class SimpleMaps extends React.Component {
    constructor(){
        super(props);
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }

    render(){
    return (
    <div style={{ height: '100vh', width: '100%' }} className="text-center mt-5">
        <GoogleMapReact 
            bootstrapURLKeys={{key: API_KEY}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
            <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
            />
        </GoogleMapReact>    
    </div>
    );
    }
};
