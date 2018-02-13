import ImageMsg from '../comps/imagemsg'

/* Note: the first and the last are the same */
const names = [
  'monarch',
  'fish',
  'mountain',
  'rocks',
  'monarch'
]

const messages = [
  'experience',
  'moment',
  'challenge',
  'exploration',
  'experience'
]

export default () => {
  let images = names.map(
    (image, index) => 
      <ImageMsg key={index} name={image} message={messages[index]}/>)
  
  return (
    <div className='show'>
      <div className='container'>
        { images }
      </div>
      <style jsx global>{`
        @keyframes slidingleft {
          0% { left: 0%; }
          20% { left: 0%; }
          25% { left: -100%; }
          45% { left: -100%; }
          50% { left: -200%; }
          70% { left: -200%; }
          75% { left: -300%; }
          95% { left: -300%; }
          100% { left: -400%; }
        }
        .image-msg {
          margin: 0; background: #101010;
          font-family: Istok Web, sans-serif;
          font-weight: 100;
        }
        .show {
          width: 800px;
          height: 360px;
          margin: 0 auto;
          overflow: hidden;
        }
        .container {
          position: relative; 
          width: 500%;
          font-size: 0; 
          animation: 30s slidingleft infinite; 
        }
        .container .image-msg {
          width: 20%; 
          height: auto;
          display: inline-block;  
          position: inherit; 
        }
        .image-msg img {
          width: 100%;
          height: auto;
        }
        .image-msg .msg {
          position: absolute; 
          bottom: 0;
          background: rgba(0,0,0,0.4);
          color: #fff; 
          width: 100%;
          font-size: 2rem; 
          padding: .6rem; 
        }
      `}</style>
    </div>
  ) 
}
