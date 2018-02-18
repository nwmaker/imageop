import Fade from './fade.js'

const images = [
  'monarch',
  'mountain',
  'rocks',
  'fish'
]

const messages = [
  'experience',
  'memory',
  'exploration',
  'moment'
]

export default () => (
  <div className='fading'>
    <Fade images={images} messages={messages} />
    <style jsx global>{`
      .fading {
        width: 800px;
        height: 360px;
        position: absolute;
        overflow: hidden;
        text-align: center;
      }
      .dots-container {
        width: 800px;
        position: absolute;
        bottom: -4px;
        text-align: center;
      }
      .dots-container .dot {
        display: inline-block;
        margin-right: 5px;
        width: 12px;
        height: 8px;
        font-size: 16px;
        line-height: 30px;
        border-radius: 100%;
        text-align: center;
        background-color: rgba(255, 0, 0, 0.8);
        color: #333;
        text-indent: -9999px;
        cursor: pointer;
        transition: all 0.2s linear;
      }
      .dot-container .dot .active {
        background: rgba(0, 255, 0, 0.3)
      } 
    `}</style>
  </div>
)
