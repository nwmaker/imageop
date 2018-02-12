export default () => {
  return (
    <div className='show'>
      <style jsx global>{`
        .show {
          height:360px;
          width:800px;
          position: relative;
          margin: 0 auto;
          transition: background-image 1s ease-in-out;
          background-image: url("../static/monarch.png")
        }
        .show:hover {
          background-image: url("../static/fish.png")
        }
      `}</style>
    </div>
  ) 
}
