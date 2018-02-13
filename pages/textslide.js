import React from 'react'

const messages = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "It has survived not only five centuries.",
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
]

export default () => {
  let slides = messages.map((text, index) => (
      <li>
        <div className='text-holder'>
          <h4 key={index}>Pure CSS Slide</h4>    
          <p key={index}>{text}</p>
        </div>
      </li>
    )
  )
  return (
    <div className='show'>
      <div className='container'>
        <ul>{ slides }</ul>
      </div>
      <style jsx global>{`
        .show, ul {
          height: 200px;
        }
        .show {
          margin: auto;
	  overflow: hidden;
	  padding: 20px;
	  border: 1px solid rgba(0, 0, 0, 0.15);
	  margin-top: 50px;
	  border-radius: 10px;
	  box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	  position: relative;
	  width: 600px;
        }
        .show li {
          float: left;
	  position: relative;
	  width: 600px;
	  display: inline-block;
	  height: 200px;
        }
        .show ul {
          list-style: none;
	  position: absolute;
	  left: 0px;
	  top: 0px;
	  width: 9000px;
	  transition: left .3s linear;
          margin-left: -25px;
          font-family: century gothic;
          color: #666;
        }
        .text-holder {
          margin: 0 auto;
	  padding: 0;
	  width: 550px;
          min-height: 180px;
          border-bottom: 1px solid #ccc;
        }
        .text-holder h4 {
          color: #0A7FAD;
          text-shadow: -1px 0px 0px rgba(0, 0, 0, 0.50);
        }
        .text-holder p {
          margin: 10px 25px;
	  font-weight: semi-bold;
	  line-height: 150%;
	  text-align: justify;
        }
        @keyframes slidingfade {
	  0% { opacity:0; }
	  2% { opacity:1; }
	  20% { left:0px; opacity:1; }
	  22.5% { opacity:0.6;}
	  25% { left:-600px; opacity:1; }
	  45% { left:-600px; opacity:1; }
	  47.5% { opacity:0.6; }
	  50% { left:-1200px; opacity:1; }
	  70% { left:-1200px; opacity:1; }
	  72.5% { opacity:0.6; }
	  75% { left:-1800px; opacity:1; }
	  95% { opacity:1; }
	  98% { left:-1800px; opacity:0; } 
	  100% { left:0px; opacity:0; }
        }
        .show ul {
	  animation: slidingfade 16s infinite;
        }
        .show ul:hover
        {
	  animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
