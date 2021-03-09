import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import './index.css'
import App from './App'
import themes from './_helpers/theme'

ReactDOM.render(
  <ThemeProvider theme={themes.defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
