import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapSchu = () => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.597626226497651, lng: -74.09506656345289 }}
    />

  )
}

export default withScriptjs(
  withGoogleMap(
    MapSchu
  )
)
