import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapDump = () => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.6511695107406155, lng: -74.04994726672683 }}
    />

  )
}

export default withScriptjs(
  withGoogleMap(
    MapDump
  )
)
