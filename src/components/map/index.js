import React, { useState } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

import { Bars as Loading } from '../loaders'
import { GOOGLE_LAT, GOOGLE_LNG, GOOGLE_API_KEY } from '../../config'

const LoadingContainer = () => <Loading />
export const MapContainer = props => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(true)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  }

  const onClose = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false)
      setActiveMarker(null)
    }
  }
  return (
    <Map
      google={props.google}
      zoom={14}
      className={props.className}
      initialCenter={{
        lat: GOOGLE_LAT,
        lng: GOOGLE_LNG,
      }}
    >
      <Marker onClick={onMarkerClick} />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>Restoration Brow - Platinum Salon</h4>
          <h4>
            <a
              href="https://www.google.com/maps/place/2112+Armory+Dr,+Santa+Rosa,+CA+95401/@38.4583804,-122.7275444,17z/data=!3m1!4b1!4m5!3m4!1s0x80843873ddb598f7:0x7bcf0f707e431443!8m2!3d38.4583804!4d-122.7253504"
              rel="noopener noreferrer"
              target="_blank"
            >
              2112 Armory Dr, Suite B<br />
              Santa Rosa, CA 95401
            </a>
          </h4>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer)
