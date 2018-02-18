import React from 'react'

export default ({ name, message, isActive }) => {
  let image = `../static/${name}.png`
  let classes = isActive ? `${name} active` : `${name}`
  console.log(classes)

  return (
    <div className='image-msg'>
      <img className={classes} src={image} alt=''/>
      <div className='msg'>
        {message}
      </div>
    </div>
  )
}
