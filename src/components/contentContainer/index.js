import styled from "styled-components"

export const SectionContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  gap: 20px;

  @media (min-width: 1064px) {
    height: 735px;
    justify-content: space-between;
    max-width: 1370px;
  }

  @media (max-width: 1063px) {
    height: 360px;
    flex-direction: column;
  }  

  @media (max-width: 540px) {
    height: 346px;
    flex-direction: column;
    margin-top: 80px;
  }
`

export const ProductsList = styled.ul`
  width: 100%;
  min-width: 300px;
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
    min-height: 400px;
  }

  @media (max-width: 637px) {
    padding: 0 2vw;
    width: 100%;
    min-height: 375px;
    flex-direction: column;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      background-color: var(--grey-0);
      height: 3px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;        
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      height: 3px;
      border-radius: 5px;
      margin: 0 5px;        
    }
  }
  
`

export const AsideContent = styled.aside`
  width: 100%;
  height: 351px;
  
  @media (min-width: 1064px) {
    max-width: 365px;
  }

  @media (max-width: 1063px) {
    padding: 0 2vw;
  }  
`

export const CartTitleBG = styled.div`
  width: 100%;
  height: 65px;
  min-width: 300px;
  background-color: var(--color-primary);
  border: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 22px;
`