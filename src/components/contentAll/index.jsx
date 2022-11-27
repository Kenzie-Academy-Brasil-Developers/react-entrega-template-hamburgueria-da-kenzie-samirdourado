import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { GlobalStyle } from '../../styles/global';
import { CardFoodCategory, CardFoodPrice, CartAddTitle, CartTitle, TitleAll, TitleCart, TotalTile, TotalValue } from '../../styles/typography';
import { ClearAllBtn, GenericButton, RemoveButton } from '../button';
import { DataCardBg, FigureCard, FoodCard, FoodImage } from '../cardFood';
import { CartTypeAmount, Checkout, DataCart, FigureCart, FoodCart, FoodCartHolder, FoodCartWrapper, FoodImageCart } from '../cartCard';
import { AsideContent, CartTitleBG, ProductsList, SectionContainer } from '../contentContainer';
import { CounterCart } from '../counter/indexC';

import { CartEmptyBg } from '../emptyCart';


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
                    {filteredProducts.map((data) =>
                    <FoodCard key={data.id}>                     
                    <FigureCard>
                        <FoodImage src={data.img} alt={data.name}/>
                    </FigureCard>
                    <DataCardBg>
                        <TitleAll>{data.name}</TitleAll>
                        <CardFoodCategory>{data.category}</CardFoodCategory>
                        <CardFoodPrice>R$ {data.price.toFixed(2)}</CardFoodPrice>
                        <GenericButton  onClick={() => addProductToCart(data)}>Adicionar</GenericButton>
                    </DataCardBg>
                    </FoodCard>
                    )}
                </ProductsList> 
            ) : (
                <ProductsList>
                    {products.map((data) =>
                    <FoodCard key={data.id}>                     
                    <FigureCard>
                        <FoodImage src={data.img} alt={data.name}/>
                    </FigureCard>
                    <DataCardBg>
                        <TitleAll>{data.name}</TitleAll>
                        <CardFoodCategory>{data.category}</CardFoodCategory>
                        <CardFoodPrice>R$ {data.price.toFixed(2)}</CardFoodPrice>
                        <GenericButton  onClick={() => addProductToCart(data)}>Adicionar</GenericButton>
                    </DataCardBg>
                    </FoodCard>
                    )}
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
                            <CartTypeAmount>
                                <CardFoodCategory>{data.category}</CardFoodCategory>
                                {/* <CounterCart data={data} count={count} counterAdd={counterAdd} counterSub={counterSub}/> */}
                            </CartTypeAmount>
                        </FoodCartWrapper>                    
                    </FoodCart>
                    )}
                    
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