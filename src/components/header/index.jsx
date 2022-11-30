import Logo from "../../assets/logo.svg"
import { GlobalStyle } from "../../styles/global"
import { Header, HeaderContainer, FigureLogo, SearchArea } from "./style"
import { SearchField } from "../input"
import { GenericButton } from "../button"

export function HeaderArea({search, setSearch, searchProducts}) {
  return (
    <Header>
      <GlobalStyle />
      <HeaderContainer>
        <FigureLogo>
          <img src={Logo} alt="Logo"></img>
        </FigureLogo>
        
        <SearchArea onSubmit={(evt) => { searchProducts(evt) }}>          
          <SearchField 
            placeholder="Digitar Pesquisa"
          />
          <GenericButton type="submit">Pesquisar</GenericButton>
        </SearchArea>
      </HeaderContainer>
    </Header>
  )
}