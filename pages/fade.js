import Image from '../comps/image'

export default () => {
  return (
    <div className='show'>
      <Image name='monarch'/>
      <Image name='fish'/>
      <style jsx global>{`
        .show {
          height:360px;
          width:800px;
          position: relative;
        }
        img {
          position: absolute;
        }
        .fish {
          animation-name: fade;
          animation-timing-function: ease-in-out;
	  animation-iteration-count: infinite;
	  animation-duration: 1s;
	  animation-direction: alternate;
        }
        @keyframes fade {
          0% {
            opacity: 1;
	  }
	  25% {
            opacity: 1;
	  }
          75% {
	    opacity: 0;
	  }
          100% {
            opacity: 0;
          }
	}
      `}</style>
    </div>
  ) 
}
