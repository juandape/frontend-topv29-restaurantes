import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapMex = () => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.591867372207195, lng: -74.12211699021519 }}
    />

  )
}

export default withScriptjs(
  withGoogleMap(
    MapMex
  )
)
