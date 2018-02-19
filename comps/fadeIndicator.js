import React from 'react'

export default ({active, total, handleClick}) => {
  let indicators = []
  for (let i = 0; i < total; i++) {
    let iClass = (i === active) ? 'indicator indicator-active' :
      'indicator'
    indicators.push(
      <div key={i} id={i}
        onClick={handleClick}
        className={iClass} />
    )
  }

  return (
    <div className='indicator-container'>
      {indicators}
    </div>
  )
}
