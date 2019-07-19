import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Keyframe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plaing: false,
      replay: false
    }
  }

  static propTypes = {
    config: PropTypes.object,
    style: PropTypes.object
  }

  static defaultProps = {
    config: {
      source: undefined,
      size: [800, 600],
      rate: 20,
      list: [0, 10]
    },
    style: {}
  }

  render() {

    const {config} = this.props

    return (
      <div className={styles.keyframe}>
        <canvas style={this.props.style} width={config.size[0]} height={config.size[1]} className={styles.keyframeCanvas} id={'keyframeCanvas'} />
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
    this.img.src = this.props.config.source
    this.img.onload = () => {
      this.ctx.drawImage(this.img, 0, 0)
    }
    window.keyframe = this
  }

  play(e) {
    if (this.props.config.list[e]) {
      this.playStep(this.props.config.list[e])
    } else {
      console.error('动作未注册')
    }
  }

  playStep(frames) {
    if (frames[2]) {
      this.setState({replay: true})
    } else {
      if (this.state.replay) {
        setTimeout(() => {
          this.playStep(frames)
        }, 300)
      }
      this.setState({replay: false})
    }
    if (this.state.plaing) return
    this.setState({plaing: true})
    let i = frames[0]
    let timer = setInterval(() => {
      this.ctx.clearRect(0, 0, this.props.config.size[0], this.props.config.size[1])
      i++
      if (i >= frames[1]) {
        if (frames[2] && this.state.replay) {
          i = frames[0]
        } else {
          clearInterval(timer)
          this.setState({plaing: false})
        }
      }
      this.ctx.drawImage(this.img, 0, i * -this.props.config.size[1])
    }, this.props.config.rate)
  }

}
