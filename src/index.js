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
    this.canvas = document.querySelector('#keyframeCanvas')
    this.ctx = this.canvas.getContext('2d')
    this.img = new Image()
    this.img.src = this.props.source
    this.img.onload = () => {
      this.ctx.drawImage(this.img, 0, 0)
    }
  }

  play(frames) {
    let i = frames[0]
    let timer = setInterval(() => {
      this.ctx.clearRect(0, 0, 250, 250)
      i++
      if (i >= frames[1]) clearInterval(timer)
      this.ctx.drawImage(this.img, 0, i * -250)
    },this.props.rate)
    console.log(frames)
  }
}
