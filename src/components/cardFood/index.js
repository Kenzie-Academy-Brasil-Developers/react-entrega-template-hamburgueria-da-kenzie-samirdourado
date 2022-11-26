import styled from "styled-components"


export const FoodCard = styled.li`
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    height: 346px;
    background-color: var(--white);
    border-radius: 5px;
    border: solid 2px var(--grey-50);
    display: flex;
    flex-direction: column;
`

export const FigureCard = styled.figure`
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FoodImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const DataCardBg = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    padding-left: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

