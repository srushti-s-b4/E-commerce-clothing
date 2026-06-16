import { createRoot } from 'react-dom/client'
import "./Style.css"
import App from './App'
import ShopContext from './Context/ShopContext'

createRoot(document.getElementById('root')).render(
    <ShopContext>
        <App/>
    </ShopContext>
)
