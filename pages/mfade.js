import React from 'react'
import Image from '../comps/image'

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
      total: images.length
    }
  }

  renderImages() {
    console.log('state:', this.state.index)
    images.map((image, index) => {
      console.log(index, image)
      let isActive = this.state.index === index
      return (
        <Image key={index} name={image} isActive={isActive} />
      )
    })
  }

  componentDidMount() {
    this.showTimer = setInterval(() => {
      let current = this.state.index
      let next = current + 1
      if (next >= this.state.total) {
        next = 0
      }
      this.setState({
        index: next
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.showTimer)
  }

  render() {
  let slides = this.renderImages()
  return (
    <div className='show'>
      <Image name='monarch' />
      <Image name='mountain' />
      <Image name='fish' />
      <Image name='rocks' />
      <div className='msg'>{messages[this.state.index]}</div>
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
          bottom: 10px;
          left: 15px;
          font-family: 'Josefin Slab', serif;
          font-weight: 100;
        }
        .show img {
          position: absolute;
          left: 0;
        }
        img {
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
        img:nth-of-type(1) {
          animation-delay: 6s;
        }
        img:nth-of-type(2) {
          animation-delay: 4s;
        }
        img:nth-of-type(3) {
          animation-delay: 2s;
        }
        img:nth-of-type(4) {
          animation-delay: 0;
        }
      `}</style>
    </div>
  )
  } 
}
