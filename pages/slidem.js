import Image from '../comps/image'

const names = [
  'monarch',
  'fish',
  'mountain',
  'fish',
  'rocks'
]

export default () => {
  let images = names.map((image, index) => <Image key={index} name={image} />)
  
  return (
    <div id='slider' className='show'>
      <div className='figure'>{ images }</div>
      <style jsx global>{`
        @keyframes slidingleft {
          0% { left: 0%; }
          15% { left: 0%; }
          20% { left: -100%; }
          35% { left: -100%; }
          40% { left: -200%; }
          55% { left: -200%; }
          60% { left: -300%; }
          75% { left: -300%; }
          80% { left: -400%; }
          95% { 
            left: -400%; 
          }
          100% { 
            left: -400%;
          }
        }
        .show {
          width: 800px;
          height: 360px;
          margin: 0 auto;
          overflow: hidden;
        }
        .show .figure img {
          width: 20%;
          float: left;
        }
        .show .figure {
          position: relative;
          width: 500%
          margin: 0;
          text-align: left;
          font-size: 0;
          animation: 30s slidingleft infinite;
        }
      `}</style>
    </div>
  ) 
}
