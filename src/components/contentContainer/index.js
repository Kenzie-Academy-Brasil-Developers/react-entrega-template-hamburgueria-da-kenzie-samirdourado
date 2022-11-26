import styled from "styled-components";

export const SectionContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  gap: 65px;

  @media (min-width: 700px) {
    height: 735px;
    justify-content: space-between;
    max-width: 1370px;
  }

  @media (max-width: 699px) {
    height: 346px;
    flex-direction: column;    
  }  

  @media (max-width: 540px) {
    height: 346px;
    flex-direction: column;
    margin-top: 80px;
  }
`;

export const ProductsList = styled.ul`
  width: 100%;
  display: flex;
  gap: 12px;
  
  
  @media (min-width: 1354px) {
    justify-content: space-between;
    max-width: 940px;
    flex-wrap: wrap;
  }

  @media (max-width: 1353px) {
    justify-content: space-around;
    padding: 0 1vw;
    flex-wrap: wrap;
    overflow-x: scroll;
  }

  @media (max-width: 699px) {
    padding: 0 2vw;
  }
  
`;

export const AsideContent = styled.aside`
  width: 100%;
  height: 351px;
  
  @media (min-width: 700px) {
    max-width: 365px;
  }
  @media (max-width: 699px) {
    padding: 0 2vw;
  }  
`;

export const CartTitleBG = styled.div`
  width: 100%;
  height: 65px;
  background-color: var(--color-primary);
  border: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 22px;
`




