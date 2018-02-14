import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarted: false,
      isStopped: false
    }
  }

  animationEnd = (e) => {
    console.log('animationEnd:',e.animationName)
    console.log(e.elapsedTime)
  }
  animationIteration = (e) => {
    console.log('animationIteration:', e.animationName)
    console.log(e.elapsedTime)
    this.props.cb(e.elapsedTime)
  }

  render() {
    const name = this.props.name
    const image = `../static/${name}.png`
    return (
      <img className={name} src={image} alt='' 
        onAnimationEnd={this.animationEnd}
        onAnimationIteration={this.animationIteration}
      />
    )
  }
}
