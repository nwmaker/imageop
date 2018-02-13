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
  'moment'
]

export default () => {
  let slides = images.map((image, index) => 
    (<div className='image-holder'>    
       <Image key={index} name={image} />
    </div>))
  return (
    <div className='show'>
      <div className='container'>
        { slides }
      </div>
      <style jsx global>{`
        @keyframes slidingfade {
	  0% { opacity:0; }
	  2% { opacity:1; }
	  20% { left:0px; opacity:1; }
	  22.5% { opacity:0.6;}
	  25% { left:-800px; opacity:1; }
	  45% { left:-800px; opacity:1; }
	  47.5% { opacity:0.6; }
	  50% { left:-1600px; opacity:1; }
	  70% { left:-1600px; opacity:1; }
	  72.5% { opacity:0.6; }
	  75% { left:-2400px; opacity:1; }
	  95% { opacity:1; }
	  98% { left:-2400px; opacity:0; } 
	  100% { left:0px; opacity:0; }
        }
        .show .container {
	  animation: slidingfade 25s infinite;
          position: absolute;
          left: 0px;
          width: 3200px;
          transition: all .3s linear;
        }
        .show {
          height:360px;
          width:800px;
          position: relative;
          overflow: hidden;
          margin: 0 auto;
        }
        .image-holder {
          float: left;
	  position: relative;
	  width: 800px;
	  display: inline-block;
	  height: 360px;
        }
        img {
          float: left;
          position: relative;
          width: 800px;
          display: inline-block;
          height: 360px;
        }
        .show .container:hover
        {
	  animation-play-state: paused;
        }
        .show img {
          position: absolute;
          left: 0;
        }
        .container
        {
          position: absolute;
	  left: 0px;
	  top: 0px;
	  width: 3200px;
	  transition: left .3s linear;
          color: #666;
        }
      `}</style>
    </div>
  )
}
