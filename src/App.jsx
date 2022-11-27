import { useState, useEffect } from 'react'
import { GlobalStyle } from './styles/global'
import { HeaderArea } from './components/header'
import { ContentArea } from './components/contentAll'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  const localStorageProducts = localStorage.getItem(`@BurguerKenzie`)
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(localStorageProducts ? JSON.parse(localStorageProducts) : [])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0)

  useEffect(() => {
    localStorage.setItem(`@BurguerKenzie`, JSON.stringify(currentSale))
  }, [currentSale])

  useEffect(() => {
    if (search.length) {
      setFilteredProducts(products.filter(product => 
        product.name.toLowerCase().includes(search)
        || product.category.toLowerCase().includes(search)
      ))
    }
  }, [search])

  function counterAdd(value) {
    setCount(count + 1)
  }

  function counterSub(value) {
    if(count > 0){
      setCount(count - 1)
    }
  }

  function calculator(prices) {
    const total = prices.map(data => (data.price))
    return total.reduce((acc, act) => {return acc + act}, 0) 
  }

  function addProductToCart(productData) {
    if (!currentSale.some(data => data.id === productData.id)) {
      setCurrentSale([...currentSale, productData])
      toast.success(`Produto adicionado`)
    } else {
      toast.warn(`Produto já adicionado`)
    }
  }

  function removeProductFromCart(productID) {
    const newList = currentSale.filter((data) => data.id !== productID)
    setCurrentSale(newList)
    toast.error(`Produto removido.`)
  }

  function removeAllProductsFromCart(i) {
    const newList = currentSale.filter((data) => data === i)
    setCurrentSale(newList)
    toast.error(`Carrinho vazio, adicione nos produtos para continuar.`)
  }

  return (
    <div>
      <HeaderArea
        products={products}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        // setFilteredProducts={setFilteredProducts}
        search={search}
        setSearch={setSearch}
      />      

      <ContentArea 
        products={products} 
        setProducts={setProducts} 
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
        filteredProducts={filteredProducts}
        search={search}
        calculator={calculator}
        removeAllProductsFromCart={removeAllProductsFromCart}
        count={count}
        counterAdd={counterAdd}
        counterSub={counterSub}
      />
      
      <GlobalStyle/>

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

export default App
