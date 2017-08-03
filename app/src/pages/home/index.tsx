import * as React from "react"
import { inject, observer } from 'mobx-react'

export interface HomeProps {
  commonStore: {
    testString: string
  };
}

@inject('commonStore')
@observer
class Home extends React.Component<HomeProps, {}> {
  render() {
    return <div>{this.props.commonStore.testString}</div>
  }
}

export default Home
