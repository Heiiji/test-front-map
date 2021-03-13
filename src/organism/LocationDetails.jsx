import React from 'react'
import styled from 'styled-components'

import Map from '../molecules/Map'

const StyledLocationDetails = styled.div`
  display: block;
  padding: 15px;
  flex: 1;
`

const LocationDetails = () => (
  <StyledLocationDetails>
    <Map />
  </StyledLocationDetails>
)

export default LocationDetails
