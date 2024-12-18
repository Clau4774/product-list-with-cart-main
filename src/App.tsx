import './App.css'
import Card from './components/Card';
import data from './data/data.json'


function App() {


  
  return(
    <Card image={data[0].image} name={data[0].name} category={data[0].category} price={data[0].price}/>
  )
}

export default App
