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
    fly: [0, 10, true]
  },
  rate: 50
}
```

`Keyframe` 组件会注册一个全局方法`window.Keyframe.play()` ，使用方法传入`list`中注册过的动作名称就可以播放指定的动画片段

```javascript
window.keyframe.play('fly')
```

| Name   | Description                         | Defalut                               | Type   |
| ------ | ----------------------------------- | ------------------------------------- | ------ |
| source | PNG 序列的源文件                    | 'static/source.png'                   | string |
| size   | PNG 序列的尺寸 [width,height]       | [100,100,false]                       | array  |
| list   | 动作列表 [起始帧，结束帧，是否循环] | {action1:[0,10],action2:[11,20],true} | array  |
| rate   | 帧速率 (ms)                         | 50                                    | number |

`list:{action1:[0,10],action2:[11,20,true]`: 指定动作1的帧数是0到第10帧，动作2的帧数是11到20帧且循环播放。

## Demo

查看 [React-keyframe](https://browniu.com/react-keyframe)，了解具体的使用方法

![](static/react-keyframe_demo.png)

## Update

### 0.0.2

* 修复已知错误

## License

MIT © [browniu](https://github.com/browniu)
