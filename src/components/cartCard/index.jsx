import { CartTypeAmount, DataCart, FigureCart, FoodCart, FoodCartWrapper, FoodImageCart, } from "./style"
import { CardFoodCategory, TitleCart } from "../../styles/typography"
import { RemoveButton } from "../button/index"
import { CounterCart } from "../counter/indexC"

export function FoodCardCart({
    currentSale, 
    removeProductFromCart,
    counterAdd, 
    counterSub,
    products
}) {
    
    return(
        <>
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
                            <CounterCart 
                                currentSale={currentSale} 
                                dataId={data.id}  
                                count={data.count} 
                                counterAdd={counterAdd} 
                                counterSub={counterSub}
                                products={products}
                            />
                        </CartTypeAmount>
                    </FoodCartWrapper>
                </FoodCart>
            )}
        </>
    )
}