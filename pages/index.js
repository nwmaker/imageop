import Image from '../comps/image'

export default () => {
  return (
    <div className='show'>
      <section>
        <Image name='monarch'/>
        <Image name='fish'/>
      </section>
      <style global jsx>{`
        .show {
          height:360px;
          width:800px;
        }
        section {
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
