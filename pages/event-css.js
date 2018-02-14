/*
 * is it possible to put the animation, either transitions or keyframes
 * in the CSS, and handle the event timing and triggers in the JS?
 * 
 */
import React from 'react'

const messages = [
  'Experience',
  'Moment',
  'Exploration',
  'Challenge',
  'Memory',
  'Gift'
]

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      isOn: false,
      total: messages.length 
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e)

    let current = this.state.index
    let next = current + 1
    if (next >= this.state.total) {
      next = 0
    }
    console.log(next)
    this.setState({index: next})
    this.setState( prev => ({
      isOn: !prev.isOn
    })) 
  }

  render() {
    return (
      <div className='event-css'>
        <button className='button animate' onClick={ this.handleClick }>
          {this.state.isOn ? 'ON': 'OFF'}:{this.state.index}:{messages[this.state.index]}
        </button>
        <style jsx global>{`
          .button {
            transition-property: background-color, transform;
            transition-duration: 1.5s;
            transition-timing-function: linear;
          }
          .animate {
            background-color: red;
            transform: translateY(50px);
          }
        `}</style>
      </div>
    )
  }
}
