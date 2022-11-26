import Logo from "../../assets/logo.svg";
import { GlobalStyle } from "../../styles/global";
import { Header, HeaderContainer, FigureLogo, SearchArea } from "./style.js";
import { SearchField } from "../input";
import { GenericButton } from "../button";

export function HeaderArea({products, filteredProducts, setFilteredProducts, SearchWrite}) {
  return (
    <Header>
      <GlobalStyle />
      <HeaderContainer>
        <FigureLogo>
          <img src={Logo} alt="Logo"></img>
        </FigureLogo>
        <SearchArea>
      
          <SearchField placeholder="Digitar Pesquisa" onChange={(evt) => SearchWrite(evt.target.value)}/>
          <GenericButton>Pesquisar</GenericButton>
        </SearchArea>
      </HeaderContainer>
    </Header>
  );
}
