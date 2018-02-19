import React from 'react'
import Slide from './fade-slide'
import Indicator from './fade-indicator'

/*
 * this assumes that all the images are PNG in the static folder
 * it is easy to deal with it for next.js
 * 
 */
class FadeCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      total: props.images.length
    }
  }
 
  handleIndicatorClick = (e) => {
    let i = parseInt(e.target.id, 10)
    if (i === this.state.index) {
      return
    }
    this.setState({index: i})
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
    let {images, messages} = this.props
    let i = this.state.index
    let slides = images.map((image, index) => {
      let isActive = index === i
      return (<Slide key={index} image={image}
                     message={messages[index]}
                     isActive={isActive} />)
      })
 
    return (
      <div className='fade-carousel'>
        <div className='fade-container'>{slides}</div>
        <Indicator active={i} total={this.state.total} 
          handleClick={this.handleIndicatorClick} />
      </div>
    )
  }
}

export default FadeCarousel
