import React from 'react'
import styled from 'styled-components'

import LocationDetails from '../organism/LocationDetails'
import LocationList from '../organism/LocationList'

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1000px;
  display: flex;
  flex-direction: row;
`

const Home = () => (
  <Wrapper>
    <LocationList />
    <LocationDetails />
  </Wrapper>
)

export default Home
