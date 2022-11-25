import styled from "styled-components";

export const SectionContainer = styled.main`
  width: 100%;
  background-color: darksalmon;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;

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
  background-color: azure;
  width: 100%;
  height: 351px;
  
  @media (min-width: 700px) {
    max-width: 940px;
  }

  @media (max-width: 699px) {
    padding: 0 2vw;
  }
  
`;

export const AsideContent = styled.aside`
  background-color: orange;
  width: 100%;
  height: 351px;
  
  @media (min-width: 700px) {
    max-width: 365px;
  }
  @media (max-width: 699px) {
    padding: 0 2vw;
  }
  
`;
