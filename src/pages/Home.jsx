import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import LocationDetails from '../organism/LocationDetails'
import LocationList from '../organism/LocationList'

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1000px;
  height: 1100px;
  display: flex;
  flex-direction: row;
  position: relative;
`

const Home = () => {
  const [location, SetLocation] = useState()

  const onSelectLocation = (city) => {
    SetLocation(city)
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      SetLocation({
        city: 'Client position',
        growth_from_2000_to_2013: '0%',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        population: '1',
        rank: '0',
        state: 'Client position'
      })
    })
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Amazing city viewer</h1>
      <Wrapper>
        <LocationList selectedLocation={location} onSelectLocation={onSelectLocation} />
        <LocationDetails location={location} />
      </Wrapper>
    </div>
  )
}

export default Home
