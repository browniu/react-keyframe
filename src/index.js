import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Keyframe extends Component {

  static propTypes = {
    source: PropTypes.string,
    size: PropTypes.array,
    rate: PropTypes.number
  }

  static defaultProps = {
    source: undefined,
    size: [800, 600],
    rate: 20
  }

  render() {

    const {size} = this.props

    return (
      <div className={styles.keyframe}>
        <canvas width={size[0]} height={size[1]} className={styles.keyframeCanvas} id={'keyframeCanvas'} />
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

}
