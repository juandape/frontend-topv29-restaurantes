import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapGratini = () => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.6454596250808615, lng: -74.07106705603692 }}
    />

  )
}

export default withScriptjs(
  withGoogleMap(
    MapGratini
  )
)
