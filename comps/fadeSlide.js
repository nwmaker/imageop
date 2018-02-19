import React from 'react'

export default ({image, message, isActive}) => {
  let slideClass = isActive ? 'fade-slide fade-slide-active' : 'fade-slide'
  let url = `../static/${image}.png`
  return (
    <div className={slideClass}>
      <img src={url} alt='' />
      <div className='msg'>{message}</div>
    </div>
  )
}
