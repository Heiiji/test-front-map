import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledVariationIndicator = styled.div`
  display: block;
  padding: 5px;
  color: ${({ theme }) => theme.textColor};
  .variation {
    color: ${({ theme, isNegative }) => (isNegative ? theme.errorColor : theme.successColor)};
  }
`

const VariationIndicator = ({ variation }) => {
  const isNegative = variation.charAt(0) === '-'

  return (
    <StyledVariationIndicator isNegative={isNegative}>
      growth : <span className='variation'>{variation}</span>
    </StyledVariationIndicator>
  )
}

VariationIndicator.propTypes = {
  variation: PropTypes.string
}

export default VariationIndicator
