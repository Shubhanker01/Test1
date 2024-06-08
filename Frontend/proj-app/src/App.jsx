import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    // fetching data from 3rd party api
    async function getItems() {
      let res = await fetch("https://fakestoreapi.com/products?limit=16")
      let fetchedData = await res.json()
      setData(fetchedData)
    }
    getItems()
  }, [])

  return (
    <>
      <Header></Header>
      {/* displaying the card in grid */}
      <div className='grid grid-cols-4 mt-[10px] ml-[10px]'>
        {
          data.map(products => {
            return <Card key={products.id} image={products.image} title={products.title} price={products.price}/>
          })
        }
      </div>


    </>
  )
}

export default App
