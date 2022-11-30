import { useState, useEffect } from "react"
import { GlobalStyle } from "./styles/global"
import { HeaderArea } from "./components/header/"
import { ContentArea } from "./components/contentAll"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const localStorageProducts = localStorage.getItem(`@BurguerKenzie`)
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(localStorageProducts ? JSON.parse(localStorageProducts) : [])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    localStorage.setItem(`@BurguerKenzie`, JSON.stringify(currentSale))
  }, [currentSale])

  function searchProducts(evt) {
    evt.preventDefault()
    const seachedValue = evt.target.children[0].value.toLowerCase()
    const newList = products.filter(product =>      
      product.name.toLowerCase().includes(seachedValue)
      || product.category.toLowerCase().includes(seachedValue)
      )

      if (!seachedValue) {
        toast.warn("Campo de busca vazio")
      }

      if (!newList.length) {
        toast.warn("Produto não encontrado")
      }
    return setFilteredProducts(newList)
  }

  function calculator(prices) {
    return prices.reduce((acc, act) => {return acc + act.price * act.count}, 0)
  }

  function addProductToCart(productData) {
    if (!currentSale.some(data => data.id === productData.id)) {
      productData.count = 1
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
    toast.error(`Carrinho vazio, adicione novos produtos para continuar.`)
  }
  

  function counterAdd(actualSale, dataId) {
    const cart = actualSale.find(productInCart => productInCart.id === dataId)
    if (actualSale.includes(cart)) {
      cart.count ++
      setCurrentSale([...currentSale])
    }     
  }

  function counterSub(actualSale, dataId) {
    const cart = actualSale.find(productInCart => productInCart.id === dataId)
    if (actualSale.includes(cart)) {
      cart.count --
      setCurrentSale([...currentSale])
      if (cart.count === 0) {
        removeProductFromCart(dataId)
      }
    } 
  }

  return (
    <>
      <div>
        <HeaderArea
          products={products}
          setProducts={setProducts}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          searchProducts={searchProducts}
        />      

        <ContentArea 
          products={ filteredProducts.length? filteredProducts : products} 
          setProducts={setProducts} 
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          addProductToCart={addProductToCart}
          removeProductFromCart={removeProductFromCart}
          filteredProducts={filteredProducts}
          search={search}
          calculator={calculator}
          removeAllProductsFromCart={removeAllProductsFromCart}
          counterAdd={counterAdd}
          counterSub={counterSub}
        />
        
        <GlobalStyle/>
              
        <ToastContainer
          position="top-right"
          autoClose={2000}
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
    </>
  )
}
export default App