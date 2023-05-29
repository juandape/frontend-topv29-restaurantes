import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapRoy = () => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.643328793331449, lng: -74.07401884418694 }}
    />

  )
}

export default withScriptjs(
  withGoogleMap(
    MapRoy
  )
)
