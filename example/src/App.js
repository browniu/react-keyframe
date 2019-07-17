import React, {Component} from 'react'

import Keyframe from 'react-keyframe'

export default class App extends Component {
  render() {
    return (
      <div>
        <Keyframe source={'static/box3.png'} size={[250, 250]} rate={50} list={{turn: [0, 10], open: [11, 27]}} />
      </div>
    )
  }
}
