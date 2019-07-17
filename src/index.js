import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Keyframe extends Component {

  static propTypes = {
    source: PropTypes.string,
    size: PropTypes.array,
    rate: PropTypes.number,
    list: PropTypes.object
  }

  static defaultProps = {
    source: undefined,
    size: [800, 600],
    rate: 20,
    list: [0, 10]
  }

  render() {

    const {size, list} = this.props

    return (
      <div className={styles.keyframe}>
        <canvas width={size[0]} height={size[1]} className={styles.keyframeCanvas} id={'keyframeCanvas'} />
        <div className="panel">
          {Object.keys(list).map((e, index) => (
            <button key={index} onClick={() => this.play(list[e])}>{e}</button>
          ))}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.init()
  }

  init() {

    let canvas = document.querySelector('#keyframeCanvas')
    let ctx = canvas.getContext('2d')
    let img = new Image()
    img.src = this.props.source
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }
  }

  play(frames) {
    console.log(frames)
  }
}
