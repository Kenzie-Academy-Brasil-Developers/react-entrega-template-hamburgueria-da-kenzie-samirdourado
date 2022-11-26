import styled from "styled-components"

export const FoodCartHolder = styled.ul`
    width: 100%;
    height: 323px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    border-bottom: solid 3px var(--grey-20);
    background-color: var(--grey-0);
    &::-webkit-scrollbar {
        background-color: var(--grey-0);
        width: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    } &::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
        width: 5px;
        border-radius: 5px;
    }
`

export const FoodCart = styled.li`
    width: 100%;
    height: 80px;
    min-height: 80px;
    background-color: var(--grey-0);
    border-radius: 5px;
    display: flex;
    
`

export const FoodCartWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;
    
`

export const FigureCart = styled.figure`
    width: 100%;
    max-width: 80px;
    height: 100%;
    background-color: var(--grey-20);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

export const FoodImageCart = styled.img`
    width: 100%;
    max-width: 70px;
    height: 100%;
    max-height: 70px;;
    object-fit: contain;

`

export const DataCart = styled.div`
    width: 100%;        
    display: flex;
    justify-content: space-between;
`

export const Checkout = styled.div`
    width: 100%;
    height: 140px;
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px;
    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    } 
`