import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VariationIndicator from '../atoms/VariationIndicator'

const StyledSelectionCard = styled.div`
  transition: 0.3s;
  display: block;
  background-color: white;
  transform: ${({ isSelected }) => (isSelected ? 'scale(1.06)' : '')};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  h2 {
    font-size: 1.2em;
    margin: 0;
  }
  .selectionCardState {
    font-size: 0.5em;
    margin-left: 6px;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    background-color: rgb(240, 240, 240);
    h2 {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`

const SelectionCard = ({ location, onClick, selectedLocation }) => (
  <StyledSelectionCard isSelected={selectedLocation?.rank === location?.rank} onClick={onClick}>
    <h2>
      {location.city}
      <span className='selectionCardState'>({location.state})</span>
    </h2>
    <VariationIndicator variation={location.growth_from_2000_to_2013} />
  </StyledSelectionCard>
)

SelectionCard.propTypes = {
  location: PropTypes.object,
  onClick: PropTypes.function,
  selectedLocation: PropTypes.object
}

export default SelectionCard
