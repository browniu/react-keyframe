# react-keyframe([demo](https://browniu.com/react-keyframe))

> Play Frame Animation in react

[![NPM](https://img.shields.io/npm/v/react-keyframe.svg)](https://www.npmjs.com/package/react-keyframe) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-keyframe
```

## Usage

```jsx
import React, { Component } from 'react'

import Keyframe from 'react-keyframe'

class Example extends Component {
  render () {
    const config = {
      source: 'static/source.png',
      size: [100, 150],
      list: {
        fly: [0, 46, true]
      },
      rate: 50
    }
    return (
      <Keyframe config={config} />
      <button onClick={() => {window.keyframe.play('fly')}}>fly</button>
    )
  }
}
```

## Props

| Name   | Description    | Defalt | Type    |
| ------ | -------------- | ------ | ------- |
| config | 配置信息       | {}     | objecct |
| style  | 自定义画布样式 | {}     | object  |

## Config

```javascript
const config = {
  source: 'static/source.png',
  size: [100, 150],
  list: {
    fly: [0, 46, true]
  },
  rate: 50
}
```

`Keyframe` 组件会注册一个全局方法`window.keyframe.play()` ，通过传入`list`中注册过的动作名称进行指定动画片段的播放

```javascript
play(){
  window.keyframe.play('fly')
}
```

| Name   | Description                            | Defalut                               | Type   |
| ------ | -------------------------------------- | ------------------------------------- | ------ |
| source | PNG 序列的源                           | 'static/source.png'                   | string |
| size   | PNG 序列的尺寸 [width,height,isReplay] | [100,100,false]                       | array  |
| list   | 关键帧动画列表                         | {action1:[0,10],action2:[11,20],true} | array  |
| rate   | 帧率                                   | 50                                    | number |

`list:{action1:[0,10],action2:[11,20,true]`: 指定动作1的帧数是0到第10帧，动作2的帧数是11到20帧且循环播放。



## License

MIT © [browniu](https://github.com/browniu)
