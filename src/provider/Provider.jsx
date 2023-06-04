import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import watch1Front from '../../public/images/omega-seamaster-aqua-terra-150m-front.png'
import watch1Back from '../../public/images/omega-seamaster-aqua-terra-150m-back.png'
import watch2Front from '../../public/images/omega-seamaster-diver-300m-front.png'
import watch2Back from '../../public/images/omega-seamaster-diver-300m-back.png'
import watch3Front from '../../public/images/omega-seamaster-planet-ocean-6000m-front.png'
import watch3Back from '../../public/images/omega-seamaster-planet-ocean-6000m-back.png'

const data = {
  watches: [
    {
      id: uuidv4(),
      collection: 'Seamaster',
      subcollection: 'AQUA TERRA 150M',
      name: 'CO-AXIAL MASTER CHRONOMETER GMT WORLDTIMER 43 MM',
      marketingName: '',
      materials: 'Acero con Acero',
      sku: '220.10.43.22.03.001',
      price: 'CL$27.027.887',
      btn: {
        text: 'contacte con una boutique',
        title: '',
        href: '',
      },
      images: {
        front: {
          src: watch1Front,
          alt: 'WORLDTIMER 43 MM front',
        },
        back: {
          src: watch1Back,
          alt: 'WORLDTIMER 43 MM back',
        },
      },
    },
    {
      id: uuidv4(),
      collection: 'Seamaster',
      subcollection: 'PLANET OCEAN 6000M',
      name: 'CO-AXIAL MASTER CHRONOMETER 45,5 MM',
      marketingName: 'Ultra Deep',
      materials: 'O-MEGASTEEL con O-MEGASTEEL',
      sku: '215.30.46.21.03.001',
      price: 'CL$27.027.887',
      btn: {
        text: 'contacte con una boutique',
        title: 'contacte con una boutique',
        href: '#',
      },
      images: {
        front: {
          src: watch2Front,
          alt: ' front',
        },
        back: {
          src: watch2Back,
          alt: ' back',
        },
      },
    },
    {
      id: uuidv4(),
      collection: 'Seamaster',
      subcollection: 'DIVER 300M',
      name: 'CO-AXIAL MASTER CHRONOMETER 42 MM',
      marketingName: `James Bond 60th anniversary`,
      materials: 'Acero con Acero',
      sku: '210.30.42.20.03.002',
      price: 'CL$27.027.887',
      btn: {
        text: 'contacte con una boutique',
        title: 'contacte con una boutique',
        href: '#',
      },
      images: {
        front: {
          src: watch3Front,
          alt: ' front',
        },
        back: {
          src: watch3Back,
          alt: ' back',
        },
      },
    },
  ],
  socialMedia: [
    {
      id: uuidv4(),
      icon: <BsInstagram />,
      alt: '',
      title: '',
      href: '#',
    },
    {
      id: uuidv4(),
      icon: <BsTwitter />,
      alt: '',
      title: '',
      href: '#',
    },
    {
      id: uuidv4(),
      icon: <BsYoutube />,
      alt: '',
      title: '',
      href: '#',
    },
  ],
  controls: {
    left: <AiOutlineLeftCircle />,
    right: <AiOutlineRightCircle />,
  },
}

export const GlobalContext = createContext()

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}
