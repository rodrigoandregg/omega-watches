import { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './Watch.scss'

export const Watch = ({ currentWatch }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <SwitchTransition>
      <CSSTransition
        key={currentWatch.name}
        classNames='fade'
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
      >
        <div className='Watch'>
          <div className='Watch-picture'>
            <img
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              src={
                !hovered
                  ? currentWatch.images.front.src
                  : currentWatch.images.back.src
              }
              alt={currentWatch.images.front.alt}
              className='Watch-img'
            />
          </div>
          <div className='Watch-wrapper'>
            <div className='Watch-headings'>
              <h2 className='Watch-h2'>{currentWatch.collection}</h2>
              <h3 className='Watch-h3'>{currentWatch.subcollection}</h3>
              <h3 className='Watch-h3'>{currentWatch.name}</h3>
              <h4 className='Watch-h4'>{currentWatch.marketingName}</h4>
            </div>
            <div className='Watch-info'>
              <span className='Watch-materials'>{currentWatch.materials}</span>
              <span className='Watch-sku'>{currentWatch.sku}</span>
            </div>
            <div className='Watch-price'>
              <span className='Watch-mony'>{currentWatch.price}</span>
            </div>
            <button className='Watch-btn'>{currentWatch.btn.text}</button>
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}
