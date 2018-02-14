/*
 * is it possible to put the animation, either transitions or keyframes
 * in the CSS, and handle the event timing and triggers in the JS?
 * For react events, look here: https://reactjs.org/docs/events.html
 * Check animation events and transition events
 * event names: 
 * - onAnimationStart 
 * - onAnimationEnd 
 * - onAnimationIteration
 * 
 * properties:
 * string animationName
 * string pseudoElement
 * float elapsedTime
 *
 * - onTransitionEnd
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
  }

  componentDidMount() {
  
  }

  componentWillUnmount() {
  }

  handleAnimationStart = (e) => {
    console.log(e)
    console.log(e.animationName)
    console.log(e.elapsedTime)
    e.stopPropagation()
  }
  handleAnimationEnd = (e) => {
    console.log(e)
    console.log(e.animationName)
    console.log(e.elapsedTime)
    e.stopPropagation()
  }
  handleTransitionEnd = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleClick = (e) => {
    let current = this.state.index
    let next = current + 1
    if (next >= this.state.total) {
      next = 0
    }
    this.setState({index: next})
    this.setState( prev => ({
      isOn: !prev.isOn
    })) 
  }

  render() {
    return (
      <div className='event-css'>
        <p onAnimationStart={this.handleAnimationStart}
           onAnimationEnd={this.handleAnimationEnd}>
The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
        <div className='container'>
          <div className='box' onTransitionEnd={this.handleTransitionEnd}>Lorem</div>
        </div>
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
          .container { 
            width: 250px;
            height: 125px;
          }
          .box {
            width: 100px;
            height: 100px;
            background-color: red;
            font-size: 20px;
            left: 0px;
            top: 0px;
            position:absolute;
            transition: width 2s, height 2s, background-color 2s, transform 2s;
            transition-timing-function: ease-in-out;
          }
          .box:hover {
            background-color: #FFCCCC;
            width: 200px;
            height: 200px;
            transform: rotate(180deg);
          }
          p {
            animation-duration: 3s;
            animation-name: slidein;
          }

          @keyframes slidein {
            from {
              margin-left: 100%;
              width: 300%; 
            }
            to {
              margin-left: 0%;
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}
