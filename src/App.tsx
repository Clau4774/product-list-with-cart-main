import './App.css'
import { useState } from 'react'
import ButtonAddToCart from './components/ui/ButtonAddToCart';

function App() {

  const [selected, setSelected] = useState(false);
  
  return(
    <ButtonAddToCart selected id="addButton"></ButtonAddToCart>
  )
}

export default App
