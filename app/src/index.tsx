import * as React from 'react'
import * as stores from 'stores'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import Routes from 'Routes'
import 'Style.css'
import '../public/favicon.ico'

render(
  <Provider {...stores}>
    <Routes />
	</Provider>,
  document.getElementById("example")
)
