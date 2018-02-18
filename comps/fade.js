import React from 'react'
import ImageMsg from './imagemsg'
import Dots from './dots'

/*
 * this assumes that all the images are PNG in the static folder
 * it is easy to deal with it for next.js
 * 
 */
class Fade extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      total: props.images.length
    }
  }
 
  nextImage() {
    let current = this.state.index
    let next = current + 1

    if (next >= this.state.total) {
      next = 0
    }
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

  renderSlide() {
    let {images, messages} = this.props
    let i = this.state.index
    return <ImageMsg key={i} name={images[i]} message={messages[i]}/>
  }

  renderDots() {
    let {index, total} = this.state
    return <Dots index={index} total={total} dotClick={this.handleDotClick}/>
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
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.showTimer)
  }

  render() {
    let slide = this.renderSlide()
    let dots = this.renderDots()

    return (
      <div className='fade-show'>
        {dots}
      </div>
    )
  }
}

export default Fade
