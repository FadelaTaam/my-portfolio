import React, { Component } from 'react'
import Typical from 'react-typical'
 
class TextAnimate extends Component {
  render () {
    return (
      <Typical
        steps={['Développeuse', 1000, 'Développeuse Web & Mobile', 500, 'Développeuse Web & Mobile Fullstack', 500, 'Développeuse Web & Mobile Fullstack Junior', 500]}
        loop={1}
        wrapper="p"
      />
    )
  }
}
export default TextAnimate;