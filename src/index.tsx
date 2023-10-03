import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'

import App from './components/App'
import GlobalStyle from './styling/globalStyle'
import theme from './styling/theme'
import { store } from './store'
import { Provider } from 'react-redux'

WebFont.load({
  google: {
    families: ['Roboto'],
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
)
