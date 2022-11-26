import { useState, useEffect } from 'react'
import { GlobalStyle } from './styles/global';
import { HeaderArea } from './components/header';
import { ContentArea } from './components/contentAll';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localStorageProducts = localStorage.getItem(`@BurguerKenzie`)
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(localStorageProducts ? JSON.parse(localStorageProducts) : [])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    localStorage.setItem(`@BurguerKenzie`, JSON.stringify(currentSale))
  }, [currentSale])

  // function SearchWrite(evt) {
  //   const filtredList = products.filter(console.log(evt.target.value))    
  //   console.log(filtredList)
  //   setFilteredProducts(filtredList)
  // }
  // SearchWrite()

  function calculator() {
    const operator = currentSale.reduce((acc, act) => { 
      return acc + act.value
    },0)
    return operator
  }

  function addProductToCart(productData) {
    if (!currentSale.some(data => data.id === productData.id)) {
      setCurrentSale([...currentSale, productData])
      toast.success(`Produto adicionado`)
    } else {
      toast.error(`Produto já adicionado`)
    }
  }

  function removeProductFromCart(productID) {
    const newList = currentSale.filter((data) => data.id !== productID)
    setCurrentSale(newList)
    toast.warn(`Produto removido`)
  }
   

  return (
    <div>
      <HeaderArea
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        // SearchWrite={SearchWrite}
        calculator={calculator}
      />      

      <ContentArea 
        products={products} 
        setProducts={setProducts} 
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      />
      
      <GlobalStyle/>
      
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  )
}

export default App
