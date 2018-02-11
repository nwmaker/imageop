import React from 'react'

export default ({ name }) => {
  const image = `../static/${name}.png`
  return (
    <img className={name} src={image} alt=''/>
  )
}
