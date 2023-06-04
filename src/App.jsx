import { useContext, useState } from 'react'
import { GlobalContext } from './provider/Provider'
import { Header } from './components/Header/Header'

export const App = () => {
  const { watches, controls, socialMedia } = useContext(GlobalContext)
  const [hovered, setHovered] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentWatch = watches[currentIndex]

  const nextWatch = () => {
    setCurrentIndex((currentIndex + 1) % watches.length)
  }

  const previousWatch = () => {
    if (currentIndex === 0) {
      setCurrentIndex(watches.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <>
      <Header />
      <main className='Main'>
        {!currentWatch ? (
          <div className=''>cargando...</div>
        ) : (
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
                <span className='Watch-materials'>
                  {currentWatch.materials}
                </span>
                <span className='Watch-sku'>{currentWatch.sku}</span>
              </div>
              <div className='Watch-price'>
                <span className='Watch-mony'>{currentWatch.price}</span>
              </div>
              <button className='Watch-btn'>{currentWatch.btn.text}</button>
            </div>
          </div>
        )}
        <div className='Social'>
          <ul className='Social-list'>
            {socialMedia.map(media => (
              <li className='Social-item' key={media.id}>
                <a
                  href='#'
                  className='Social-link'
                  title='social'
                  rel='noopenner noreferrer'
                  target='_blank'
                >
                  {media.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='Controls'>
          <div className='Controls-btn' onClick={nextWatch}>
            {controls.left}
          </div>
          <div className='Controls-btn' onClick={previousWatch}>
            {controls.right}
          </div>
        </div>
      </main>
    </>
  )
}
