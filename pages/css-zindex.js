import React from 'react'

/* 
 * this sliding is different.
 * - it sets the background images in the CSS
 * - it uses the z-index to do the sliding
 * left, active, right
 * 
 */



export default class extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      index: 0,
      total: 3
    }
  }
  
  componentDidMount() {
    this.showTimer = setInterval(() => {
      let current = this.state.index
      let next = current + 1
      if (next >= this.state.total) {
        next = 0
      }
      this.setState({ index: next })
    }, 2000)
  }
  
  componentWillUnmount() {
    clearInterval(this.showTimer)
  }

  getNext() {
    let current = this.state.index
    let next = current + 1
    if (next >= this.state.total) {
      next = 0
    }
    return next
  }

  renderSlides() {
    return [1, 2, 3].map((n, index) => {
      if (index === this.state.index) {
        return (<div key={index} className='transition slide active'><h1>{n}</h1></div>)
      } else if (index === this.getNext()) {
        return (<div key={index} className='transition slide right'><h1>{n}</h1></div>)
      } else {
        return (<div key={index} className='transition slide'><h1>{n}</h1></div>)
      }
    })  
  }

  renderIndicators() {
    return [1, 2, 3].map((n, index) => {
      if (index === this.state.index) {
        return (<li key={index} className='indicator active'></li>)
      } else {
        return (<li key={index} className='indicator'></li>)
      }
    })  
  }

  render() {
  return (
    <div className='show'>
      <div className='container'>
        <div className='inner'>
          { this.renderSlides() }
        </div>
        <div className='arrow arrow-left'></div>
        <div className='arrow arrow-right'></div>
        <div className='indicators'>
          { this.renderIndicators() }
        </div>
      </div>
      <style jsx global>{`
        .show {
          width: 800px;
          height: 360px;
          position: relative;
          margin: 0 auto;
        }
        .container {
	  position: relative;
          padding-top: 60%;
	  overflow: hidden;
        }
        .inner {
          width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0;
	  left: 0;
        }

        .slide{
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0;
	  right: 0;
	  left: 0;
	  z-index: 1;
	  opacity: 0;
        } 
        .slide.active, 
        .slide.left, 
        .slide.right {
	  z-index: 2;
	  opacity: 1;
          transition: left .3s linear;
        }

        .js-reset-left {
          left: auto;
        }

        .slide.left{
	  left:-100%;
	  right:0;
        }
        .slide.right{
	  right:-100%;
	  left: auto;
        }
        .transition .slide.left {
          left: 0%
        }
        .transition .slide.right {
          right: 0%
        }
        .transition .slide.shift-right {
          right: 100%;
          left: auto
        }
        .transition .slide.shift-left {
          left: 100%;
          right:auto
        }
        .transition .slide{
	  transition-property: right, left, margin;
        }

        .indicators {
          width: 100%;
          position: absolute;
          bottom: 0;
          z-index: 4;
          padding: 0;
          text-align: center;
        }
        .indicators .indicator {
	  width: 13px;
	  height: 13px;
	  display: inline-block;
	  margin: 5px;
	  background: #fff;
	  list-style-type: none;
	  border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease-out;
        }
        .indicators .indicator.active {
          background: #93278f
        }
        .indicators .indicator:hover {
          background-color: #2b2b2b
        }
        
        .arrow{
          width: 20px;
          height: 20px;
          position: absolute;
          top: 50%;
          z-index: 5;
          border-top: 3px solid #fff;
          border-right: 3px solid #fff;
          cursor: pointer;
          transition: border-color 0.3s ease-out;
        }
        .arrow:hover {
          border-color: #93278f
        }
        .arrow-left {
          left: 20px;
          transform: rotate(225deg);
        }
        .arrow-right{
          right: 20px;
          transform: rotate(45deg);
        }

        .show h1 {
          width:100px;
          height:100px;
          background-color:rgba(146, 45, 141, 0.7);
	  margin:auto;
          line-height:100px;
	  color:#fff;
	  font-size: 2.4em;
          border-radius:50%;
        }
        .slide {
	  text-align:center;
          padding-top:25%;
          background-size:cover;
        }        
        .slide:nth-child(1) {
          background-image: url('../static/monarch.png');
        }
        .slide:nth-child(2) {
          background-image: url('../static/fish.png');
        }
	.slide:nth-child(3) {
	  background-image: url('../static/rocks.png');
	}
      `}</style>
    </div>
  )
  }
}
