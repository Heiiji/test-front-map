import React, { useState } from 'react'
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

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Amazing city viewer</h1>
      <Wrapper>
        <LocationList onSelectLocation={onSelectLocation} />
        <LocationDetails location={location} />
      </Wrapper>
    </div>
  )
}

export default Home
