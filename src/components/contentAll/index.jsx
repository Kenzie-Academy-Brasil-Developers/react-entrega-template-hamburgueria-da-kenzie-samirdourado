import { useEffect } from "react"
import { api } from "../../services/api"
import { GlobalStyle } from "../../styles/global"
import { CartAddTitle, CartTitle, TitleAll, TotalTile, TotalValue } from "../../styles/typography"
import { ClearAllBtn, } from "../button"
import { Checkout, FoodCartHolder } from "../cartCard/style"
import { AsideContent, CartTitleBG, ProductsList, SectionContainer } from "../contentContainer"
import { FoodCardsMain } from "../cardFood/"
import { CartEmptyBg } from "../emptyCart"
import { FoodCardsFiltredMain } from "../cardFoodFiltred"
import { FoodCardCart } from "../cartCard/index"

export function ContentArea({
    products,
    setProducts,
    currentSale,
    addProductToCart,
    removeProductFromCart,
    filteredProducts,
    calculator,
    search,
    removeAllProductsFromCart,
    count,
    counterAdd,
    counterSub    
}) {

    useEffect(() => {
        async function getProducts() {
          try {
            const response = await api.get("products")
            setProducts(response.data)
          } catch (error) {
            console.log(error)
          } 
        }
        getProducts()
    }, [])
    
    return(
        <SectionContainer>            
            <GlobalStyle/>

            { search.length > 0 ?  (
                <ProductsList>
                    <FoodCardsFiltredMain filteredProducts={filteredProducts} addProductToCart={addProductToCart}/>
                </ProductsList> 
            ) : (
                <ProductsList>
                    <FoodCardsMain products={products} addProductToCart={addProductToCart}/>
                </ProductsList>
            )
            }

            <AsideContent>
                <CartTitleBG>
                    <CartTitle>Carrinho de Compras</CartTitle>
                </CartTitleBG>

                {currentSale.length === 0
                    ? (
                        <CartEmptyBg>
                            <TitleAll>Sua sacola está vazia</TitleAll>
                            <CartAddTitle>Adicione itens</CartAddTitle>
                        </CartEmptyBg>
                    ) : (
                    <>
                    <FoodCartHolder>
                        <FoodCardCart
                            currentSale={currentSale}
                            removeProductFromCart={removeProductFromCart}
                            count={count}
                            counterAdd={counterAdd}
                            counterSub={counterSub}
                            products={products}
                        />                    
                    </FoodCartHolder>

                    <Checkout>
                        <div>
                            <TotalTile>Total</TotalTile>
                            <TotalValue>R$ {calculator(currentSale).toFixed(2)}</TotalValue>
                        </div>
                        <ClearAllBtn onClick={() => removeAllProductsFromCart()}>Remover Todos</ClearAllBtn>
                    </Checkout>
                    </>
                    )
                }                
            </AsideContent>
        </SectionContainer>
    )
}