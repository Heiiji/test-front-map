import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import api from '../_helpers/api'

import SelectionCard from '../molecules/SelectionCard'
import SearchBar from '../molecules/SearchBar'

const StyledLocationList = styled.div`
  display: block;
  padding: 10px;
  width: 300px;
  max-height: 100%;
  overflow-y: auto;
`

const LocationList = ({ selectedLocation, onSelectLocation }) => {
  const [locations, setLocations] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api
      .get('/cities.json')
      .then(({ data }) => {
        data.sort((a, b) => a.city.localeCompare(b.city))
        setLocations(data)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  const onSearchUpdate = (value) => {
    setSearch(value)
  }

  return (
    <StyledLocationList>
      <SearchBar onChange={onSearchUpdate} />
      {locations.reduce(
        (list, location) =>
          location.city.toLowerCase().includes(search.toLowerCase())
            ? list.concat([
                <SelectionCard
                  selectedLocation={selectedLocation}
                  onClick={() => onSelectLocation(location)}
                  key={location.rank}
                  location={location}
                />
              ])
            : list,
        []
      )}
    </StyledLocationList>
  )
}

LocationList.propTypes = {
  onSelectLocation: PropTypes.function,
  selectedLocation: PropTypes.object
}

export default LocationList
