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
          margin: 0 auto;
        }
        img {
          position: absolute;
          left: 0;
          transition: all 1s ease-in-out;
        }
        .show .fish {
          transform: scale(0, 0);
          opacity: 0;
        }
        .show:hover .fish {
          opacity: 1;
          transform: scale(1, 1);
          transform-origin: top right;
        }
        .show:hover .monarch {
          transform: scale(0, 0);
          transform-origin: bottom left;

        }
      `}</style>
    </div>
  ) 
}
