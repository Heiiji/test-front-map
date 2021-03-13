import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Map from '../molecules/Map'

const StyledLocationDetails = styled.div`
  display: block;
  padding: 15px;
  flex: 1;
`

const LocationDetails = ({ location }) => (
  <StyledLocationDetails>
    <Map positionX={location ? location.latitude : 51} positionY={location ? location.longitude : 0} />
  </StyledLocationDetails>
)

LocationDetails.propTypes = {
  location: PropTypes.object
}

export default LocationDetails
