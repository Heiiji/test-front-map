import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VariationIndicator from '../atoms/VariationIndicator'

const StyledSelectionCard = styled.div`
  display: block;
  background-color: grey;
  padding: 10px;
  cursor: pointer;
`

const SelectionCard = (props) => (
  <StyledSelectionCard onClick={props.onClick}>
    <h2>{props.location.city}</h2>
    <VariationIndicator />
  </StyledSelectionCard>
)

SelectionCard.propTypes = {
  location: PropTypes.object,
  onClick: PropTypes.function
}

export default SelectionCard
