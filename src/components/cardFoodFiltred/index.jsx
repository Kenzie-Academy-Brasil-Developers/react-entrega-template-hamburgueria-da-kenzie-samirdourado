import { DataCardBg, FigureCard, FoodCard, FoodImage} from "../cardFood/style"
import { CardFoodCategory, CardFoodPrice, TitleAll } from "../../styles/typography"
import { GenericButton } from "../button/index"

export function FoodCardsFiltredMain({filteredProducts, addProductToCart}) {
    return(
        <>
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
        </>
    )
}