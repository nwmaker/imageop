import React from 'react'
import Dots from '../comps/dots'

export default ({ name, message, index, active, total, dotClick }) => {
  const image = `../static/${name}.png`
  return (
    <div className='image-msg'>
      <img id={index} className={name} src={image} alt=''/>
      <div className='msg'>
        {message}
      </div>
      <Dots index={active} total={total} dotClick={dotClick} />
    </div>
  )
}
