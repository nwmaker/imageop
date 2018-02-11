import React from 'react'

export default ({ name }) => {
  const image = `../static/${name}.png`
  return (
    <img src={image} alt=''/>
  )
}
