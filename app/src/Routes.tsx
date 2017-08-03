import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import * as React from "react"

import Home from 'pages/home'

const routes = [
  {
    path: '/',
    component: Home
  }
]

const RouteWithSubRoutes = (route: any) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class Routes extends React.Component<{}> {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </Switch>
      </Router>
    )
  }
}

export default Routes
