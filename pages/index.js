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
          transition: opacity 1s ease-in-out;
        }
        .fish:hover {
          opacity: 0;
        }
      `}</style>
    </div>
  ) 
}
