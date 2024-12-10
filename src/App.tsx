import './App.css'
import { useState } from 'react'
import ButtonAddToCart from './components/ui/ButtonAddToCart';

function App() {

  const [selected, setSelected] = useState(false);
  console.log(selected);
  
  return(
    <ButtonAddToCart selected>{selected}</ButtonAddToCart>
  )
}

export default App
