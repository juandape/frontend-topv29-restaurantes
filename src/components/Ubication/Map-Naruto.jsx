import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapNaruto = () => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.620465210943113, lng: -74.10482210370812 }}
    />

  )
}

export default withScriptjs(
  withGoogleMap(
    MapNaruto
  )
)
