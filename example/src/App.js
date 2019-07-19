import React, {Component} from 'react'

import Keyframe from 'react-keyframe'
import Highlight from 'react-highlight'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sourceIndex: 1,
      reload: true
    }
    this.sources = [{
      source: 'static/box3.png',
      size: [250, 250],
      list: {
        turn: [0, 10],
        open: [11, 27]
      },
      rate: 50
    }, {
      source: 'static/box4.png',
      size: [150, 150],
      list: {
        open: [0, 34, false]
      },
      rate: 50
    }, {
      source: 'static/box5.png',
      size: [100, 150],
      list: {
        fly: [0, 46, true]
      },
      rate: 50
    }, {
      source: 'static/loading.png',
      size: [96, 120],
      list: {
        shake: [0, 12, true],
        jump: [13, 67]
      },
      rate: 50
    }]
  }

  render() {
    return (
      <div>
        <div className="main">
          {this.state.reload && <Keyframe config={this.sources[this.state.sourceIndex]} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%) scale(.8)'
          }} />}
        </div>
        <div className="panel">
          <select onChange={(e) => {
            this.setState({sourceIndex: e.target.value})
            this.reloadChild()
          }}>
            {this.sources.map((e, index) => (<option key={index} value={index}>{index}</option>))}
          </select>
          <div className="control">
            {Object.keys(this.sources[this.state.sourceIndex].list).map((e, index) => (
              <button key={index} onClick={() => {window.keyframe.play(e)}}>{e}</button>
            ))}
          </div>
          <div className="code">
            <article>
              <p>config:</p>
              <Highlight language="javascript">
                {`
  const config = ${JSON.stringify(this.sources[this.state.sourceIndex])}
              `}
              </Highlight>
            </article>
            <article>
              <p>button Event:</p>
              <Highlight language="javascript">
                {`<button key={index} onClick={() => {window.keyframe.play(${Object.keys(this.sources[this.state.sourceIndex].list)[0]})}}>${Object.keys(this.sources[this.state.sourceIndex].list)[0]}</button>`}
              </Highlight>
            </article>
          </div>
        </div>

      </div>
    )
  }

  reloadChild() {
    this.setState({reload: false})
    setTimeout(() => {
      this.setState({reload: true})
    }, 50)
  }
}
