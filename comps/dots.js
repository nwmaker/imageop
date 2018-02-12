import React from 'react'
import Dot from './dotclick'

export default ({ index, total, dotClick }) => {
  let dots = []
  for(let i = 0; i < total; i++) {
    let isActive = (i === index) ? true : false
    dots.push(
      <Dot key={i}
        id={i}
        active={isActive}
        dotClick={dotClick}
      />
    )
  }

  return (
    <div className="dots-container">
      { dots }
    </div>
  )
}

