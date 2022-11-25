import { GlobalStyle } from '../../styles/global';
import { AsideContent, ProductsList, SectionContainer } from '../contentContainer';


export function ContentArea() {
    
    return(
        <SectionContainer>
            <GlobalStyle/>
            <ProductsList>
                <li>
                    <figure>
                        <img></img>
                    </figure>
                    <div>
                        <h2>Big Kenzie</h2>
                        <p>Sanduíches</p>
                        <p>R$ 18,00</p>
                        <button>Adicionar</button>
                    </div>
                </li>
            </ProductsList>
            <AsideContent>
                <div>
                    <p>Carrinho de Compras</p>
                </div>
                
                {/* <div>
                    <h2>Sua sacola está vazia</h2>
                    <p>Adicione itens</p>
                </div> */}


                <ul>
                    <li>
                        <div>
                            <img></img>
                            <div>
                                <h3>Hamgurguers</h3>
                                <p>Sanduíches</p>
                            </div>
                        </div>
                        <div>
                            <button>Remover</button>
                        </div>
                    </li>
                </ul>

                <div>
                    <div>
                        <p>Total</p>
                        <p>R$ 40,00</p>
                    </div>
                    <button>Remover Todos</button>
                </div>


            </AsideContent>
        </SectionContainer>
    );
}