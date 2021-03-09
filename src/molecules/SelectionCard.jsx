import React from 'react'
import styled from 'styled-components'

import VariationIndicator from '../atoms/VariationIndicator'

const StyledSelectionCard = styled.div`
  display: block;
  background-color: grey;
  padding: 10px;
`

const SelectionCard = () => (
  <StyledSelectionCard>
    <h2>Titre</h2>
    <VariationIndicator />
  </StyledSelectionCard>
)

export default SelectionCard
