import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import api from '../_helpers/api'

import SelectionCard from '../molecules/SelectionCard'

const StyledLocationList = styled.div`
  display: block;
  background-color: red;
  padding: 10px;
  width: 300px;
`

const LocationList = (props) => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    api
      .get('/cities.json')
      .then(({ data }) => {
        setLocations(data)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  return (
    <StyledLocationList>
      {locations.map((location) => (
        <SelectionCard onClick={props.onSelectLocation} key={location.rank} location={location} />
      ))}
    </StyledLocationList>
  )
}

LocationList.propTypes = {
  onSelectLocation: PropTypes.function
}

export default LocationList
