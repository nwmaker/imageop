import React from 'react'
import ImageMsgDot from '../comps/imagemsgdot'
import Dots from '../comps/dots'

const images = [
  'monarch',
  'mountain',
  'rocks',
  'fish'
]

const messages = [
  'experience',
  'memory',
  'exploration',
  'moment'
]

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      total: messages.length
    }
  }

  nextImage() {
    let current = this.state.index
    let next = current + 1

    if (next >= this.state.total) {
      next = 0
    }
    console.log(current, next)
/* 
    console.log(document.querySelectorAll('img'))
*/    
    console.log(document.querySelector('img'))

    this.setState({
      index: next,
    })
  }

  handleDotClick (i) {
    if (i === this.state.index) {
      return
    }
    this.setState({index: i})
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => {
        this.nextImage()
      }, 2000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render() {
  let slides = images.map(
    (image, index) => <ImageMsgDot 
                       key={index} index={index} 
                       name={image} message={messages[index]}
                       active={this.state.index}
                       total={this.state.total}
                       dotClick={this.handleDotClick}
                       />
  )
  return (
    <div className='show'>
      <div>{ slides }</div>
      <style jsx global>{`
        .show {
          height:360px;
          width:800px;
          position: relative;
          margin: 0 auto;
        }
        .msg {
          position: absolute;
          color: white;
          font-size: 30px;
          bottom: 50px;
          left: 15px;
          font-family: 'Josefin Slab', serif;
          font-weight: 100;
        }
        .show .image-msg {
          position: absolute;
          left: 0;
        }
        .image-msg {
          animation-name: fadeInOut;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 8s;
        }
        @keyframes fadeInOut {
          0% {
            opacity: 1;
	  }
          10% {
            opacity: 1;
          }
	  25% {
            opacity: 0;
	  }
          90% {
	    opacity: 0;
	  }
          100% {
            opacity: 1;
          }
	}
        .image-msg:nth-of-type(1) {
          animation-delay: 6s;
        }
        .image-msg:nth-of-type(2) {
          animation-delay: 4s;
        }
        .image-msg:nth-of-type(3) {
          animation-delay: 2s;
        }
        .image-msg:nth-of-type(4) {
          animation-delay: 0;
        }
        .dots-container {
          text-align: center;
          margin: 10px 0 0 0;
          bottom: 40px;
        }
        .dots-container .dot {
          width: 10px;
          height: 10px;
          display: inline-block;
          background: #ddd;
          overflow: hidden;
          text-indent: -9999px;
          border-radius: 50%;
        }
        .dots-container .dot .active {
          background: #999;
        }
      `}</style>
    </div>
  )
  }
}
