import React from 'react'

export default ({ name, message }) => {
  const image = `../static/${name}.png`
  return (
    <div>
      <img className={name} src={image} alt=''/>
      <div className='msg'>
        {message}
      </div>
    </div>
  )
}
