import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VariationIndicator from '../atoms/VariationIndicator'

const StyledSelectionCard = styled.div`
  transition: 0.3s;
  display: block;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  h2 {
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

const SelectionCard = (props) => (
  <StyledSelectionCard onClick={props.onClick}>
    <h2>
      {props.location.city}
      <span className='selectionCardState'>({props.location.state})</span>
    </h2>
    <VariationIndicator />
  </StyledSelectionCard>
)

SelectionCard.propTypes = {
  location: PropTypes.object,
  onClick: PropTypes.function
}

export default SelectionCard
