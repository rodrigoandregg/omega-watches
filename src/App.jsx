import { useContext, useState } from 'react'
import { GlobalContext } from './provider/Provider'
import { Header } from './components/Header/Header'
import { Watch } from './components/Watch/Watch'

export const App = () => {
  const { watches, controls, socialMedia } = useContext(GlobalContext)
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
          <Watch currentWatch={currentWatch} />
        )}

        <div className='Social'>
          <ul className='Social-list'>
            {socialMedia.map(media => (
              <li className='Social-item' key={media.id}>
                <a
                  href={media.href}
                  className='Social-link'
                  title={media.title}
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
