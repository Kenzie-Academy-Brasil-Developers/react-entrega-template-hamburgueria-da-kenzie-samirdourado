import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { GlobalStyle } from '../../styles/global';
import { CardFoodCategory, CardFoodPrice, CartAddTitle, CartTitle, TitleAll, TitleCart, TotalTile, TotalValue } from '../../styles/typography';
import { ClearAllBtn, GenericButton, RemoveButton } from '../button';
import { DataCardBg, FigureCard, FoodCard, FoodImage } from '../cardFood';
import { Checkout, DataCart, FigureCart, FoodCart, FoodCartHolder, FoodCartWrapper, FoodImageCart } from '../cartCard';
import { AsideContent, CartTitleBG, ProductsList, SectionContainer } from '../contentContainer';
import { CartEmptyBg } from '../emptyCart';


export function ContentArea({
    products, setProducts, currentSale, addProductToCart, removeProductFromCart, calculator}) {
    // console.log(products)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProducts() {
          try {
            const response = await api.get("products")            
            setProducts(response.data)
          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false)
          }
        }
        getProducts()
      }, [])
    
    
    return(
        <SectionContainer>
            <GlobalStyle/>
            
            {loading && <div>Carregando...</div>}
            <ProductsList>

                {products.map((data) =>
                    <FoodCard key={data.id}>                     
                    <FigureCard>
                        <FoodImage src={data.img} alt={data.name}/>
                    </FigureCard>
                    <DataCardBg>
                        <TitleAll>{data.name}</TitleAll>
                        <CardFoodCategory>{data.category}</CardFoodCategory>
                        <CardFoodPrice>R$ {data.price}</CardFoodPrice>
                        <GenericButton  onClick={() => addProductToCart(data)}>Adicionar</GenericButton>
                    </DataCardBg>
                </FoodCard>
                )}

            </ProductsList>

            <AsideContent>
                <CartTitleBG>
                    <CartTitle>Carrinho de Compras</CartTitle>
                </CartTitleBG>

                {currentSale.length === 0 ? 
                    <CartEmptyBg>
                        <TitleAll>Sua sacola está vazia</TitleAll>
                        <CartAddTitle>Adicione itens</CartAddTitle>
                    </CartEmptyBg>
                :
                <>
                <FoodCartHolder>
                {currentSale.map((data) => 
                    <FoodCart key={data.id}>
                        <FigureCart>
                            <FoodImageCart src={data.img} alt={data.name}/>
                        </FigureCart>

                        <FoodCartWrapper>
                        
                            <DataCart>
                                <TitleCart>{data.name}</TitleCart>
                                <RemoveButton onClick={() => removeProductFromCart(data.id)}>Remover</RemoveButton>
                            </DataCart>
                            <CardFoodCategory>{data.category}</CardFoodCategory>
                        
                    </FoodCartWrapper>
                    
                </FoodCart>
                    )}
                    
                </FoodCartHolder>

                <Checkout>
                    <div>
                        <TotalTile>Total</TotalTile>
                        <TotalValue>R$ {calculator},00</TotalValue>
                    </div>
                    <ClearAllBtn>Remover Todos</ClearAllBtn>
                </Checkout>
                </>
                 }

                 
            </AsideContent>

            
        </SectionContainer>
    );
}