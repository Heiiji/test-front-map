import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledVariationIndicator = styled.div`
  display: block;
  padding: 5px;
`

const VariationIndicator = ({ variation }) => <StyledVariationIndicator>growth : {variation}</StyledVariationIndicator>

VariationIndicator.propTypes = {
  variation: PropTypes.string
}

export default VariationIndicator
