import React from 'react'

export default ({ id, active, dotClick }) => {
  let name = active ? 'dot active' : 'dot'
  
  return (
    <div data-id={id} className={name}
         onClick={ e => dotClick(parseInt(e.target.getAttribute('data-id'), 10)) }>
    </div>
  )
}
