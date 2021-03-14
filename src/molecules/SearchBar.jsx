import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSearchBar = styled.div`
  display: block;
  position: relative;
  padding: 5px 0;
  input {
    width: 95%;
    padding: 3px;
    &:active {
      border-color: ${({ theme }) => theme.primaryColor};
    }
  }
`

const SearchBar = ({ onChange }) => {
  return (
    <StyledSearchBar>
      <input placeholder='Search' onChange={(ev) => onChange(ev.target.value)} type='text' />
    </StyledSearchBar>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.function
}

export default SearchBar
