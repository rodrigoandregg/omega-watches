import { createRoot } from 'react-dom/client'
import './index.scss'
import { App } from './src/App'
import { Provider } from './src/provider/Provider'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <App />
  </Provider>
)
