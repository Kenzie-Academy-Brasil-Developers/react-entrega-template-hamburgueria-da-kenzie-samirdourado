import { useState, useEffect } from 'react'
import { api } from './services/api'
import { GlobalStyle } from './styles/global';
import { HeaderArea } from './components/header';
import { ContentArea } from './components/contentAll';

function App() {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get()
        console.log(response)
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }      
    }
    getProducts()
  }, [])
  

  return (
    <div>
      <HeaderArea/>
      {loading && <div>Carregando...</div>}
      <ContentArea/>        
      
      <GlobalStyle/>
    </div>
  )
}

export default App
