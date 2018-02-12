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
          margin: 10px auto;
        }
        img {
          position: absolute;
          left: 0;
          transition: all 1s ease-in-out;
        }
        .show .fish {
          transform: scale(1, 0);
          filter: alpha(opacity=0);
          opacity: 0;
        }
        .show:hover .fish {
          opacity: 1;
          transform: scale(1, 1);
        }
        .show:hover .monarch {
          filter: alpha(opacity=0);
          transform: rotate(360deg) scale(0, 0);
          transform-origin: bottom left;

        }
      `}</style>
    </div>
  ) 
}
