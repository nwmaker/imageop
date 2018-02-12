import React from 'react'

export default ({ id, active }) => {
  let name = active ? 'dot active' : 'dot'
  
  return (
    <div data-id={id} className={name}>
    </div>
  )
}
