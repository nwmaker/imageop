import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarted: false,
      isStopped: false
    }
    this.animationStart = this.animationStart.bind(this)
  }

  animationStart (e) {
    console.log(e)
  }

  render() {
    const name = this.props.name
    const image = `../static/${name}.png`
    return (
      <img className={name} src={image} alt='' onAnimationStart={this.animationStart}/>
    )
  }
}
