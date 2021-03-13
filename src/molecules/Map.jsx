import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const StyledMap = styled.div`
  display: block;
  position: relative;
  height: 1000px;
`

const Map = ({ positionX, positionY }) => {
  const [position, setPosition] = useState([positionX, positionY])
  const [map, setMap] = useState()

  useEffect(() => {
    setPosition([positionX, positionY])
    if (map) {
      map.flyTo([positionX, positionY], 14, {
        duration: 2
      })
    }
  }, [positionX, positionY])

  return (
    <StyledMap>
      <MapContainer
        center={position}
        zoom={13}
        whenCreated={(map) => setMap(map)}
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </StyledMap>
  )
}

Map.propTypes = {
  positionX: PropTypes.number,
  positionY: PropTypes.number
}

export default Map
