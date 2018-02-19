import React from 'react'

export default ({image, isActive}) => {
  let itemClass = isActive ? 'fade-item fade-item-active' : 'fade-item'
  let url = `url('../static/${image}.png')`
  return (
    <div className={itemClass} 
     style={{ backgroundImage: 'url(\'../static/' + image +'.png\')' }} />
  )
}
