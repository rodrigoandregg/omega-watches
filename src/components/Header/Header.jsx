import { useState } from 'react'
import { ImOmega } from 'react-icons/im'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './Header.scss'

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <header className='Header'>
      <div className='Header-logo'>
        <ImOmega />
      </div>
      <nav className='Header-nav Nav'>
        <button className='Nav-btn' onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {!menuIsOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
        <ul className={`Nav-menu ${menuIsOpen ? 'Nav-menu--open' : ''}`}>
          <li className='Nav-item'>Colecciones</li>
          <li className='Nav-item'>Relojes</li>
          <li className='Nav-item'>Boutiques</li>
          <li className='Nav-item'>Contacto</li>
        </ul>
      </nav>
      <form className='Header-form'>
        <label htmlFor='search' className='Header-label'>
          Search
        </label>
        <input
          type='search'
          name='search'
          id='search'
          className='Header-search'
        />
      </form>
    </header>
  )
}
