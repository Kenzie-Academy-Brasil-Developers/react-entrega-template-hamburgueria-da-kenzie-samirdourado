import styled from "styled-components"

export const GenericButton = styled.button`
    height: 40px;
    max-width: 106px;
    padding: 0 20px;
    border-radius: 8px;
    border: solid 2px var(--color-primary);
    background-color: var(--color-primary);

    color: var(--grey-0);
    font-family: 'Inter';
    font-size: var(--heading4);
    font-weight: 500;
    cursor: pointer;    
`

export const ClearAllBtn = styled.button`
    height: 60px;
    width: 100%;
    padding: 0 20px;
    border-radius: 8px;
    border: solid 2px var(--grey-20);
    background-color: var(--grey-20);

    color: var(--grey-50);
    font-family: 'Inter';
    font-size: var(--headline);
    font-weight: 600;
    cursor: pointer;    
`

export const RemoveButton = styled.button`
    height: 40px;
    max-width: 106px;
    padding: 0 20px;    
    background-color: transparent;
    border: none;

    color: #BDBDBD;
    font-family: 'Inter';
    font-size: var(--caption);
    font-weight: 500;
    cursor: pointer;    
`