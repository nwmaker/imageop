import React from 'react'
import ImageMsg from '../comps/imagemsg'

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

export default () => {
  let slides = images.map(
    (image, index) => <ImageMsg key={index} name={image} message={messages[index]}/>
  )
  return (
    <div className='show'>
      { slides }
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
      `}</style>
    </div>
  )
}
