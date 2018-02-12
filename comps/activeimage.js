import React from 'react'

export default ({ name, isActive }) => {
  const image = `../static/${name}.png`
  const classes = isActive ? `active` : null
  return (
    <img className={classes} src={image} alt=''/>
  )
}
