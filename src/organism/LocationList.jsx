import React from 'react'
import styled from 'styled-components'

import SelectionCard from '../molecules/SelectionCard'

const StyledLocationList = styled.div`
  display: block;
  background-color: red;
  padding: 10px;
  width: 300px;
`

const LocationList = () => (
  <StyledLocationList>
    <SelectionCard />
  </StyledLocationList>
)

export default LocationList
