import React from 'react'
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

const Home = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Amazing city viewer</h1>
    <Wrapper>
      <LocationList />
      <LocationDetails />
    </Wrapper>
  </div>
)

export default Home
