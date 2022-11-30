import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-width: 300px;
  height: 80px;
  background-color: var(--grey-0);
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1370px;
  height: 80px;
  background-color: var(--grey-0);
  display: flex;
  align-items: center;

  @media (min-width: 541px) {
    margin: 0 1vw;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 26px;
  }

  @media (max-width: 540px) {
    height: 139px;
    flex-direction: column;
    justify-content: space-around;
    padding: 2vw;
    margin-bottom: 25px;
  }
`;

export const FigureLogo = styled.figure`
  width: 150px;
  height: 23px;
`;

export const SearchArea = styled.form`
  width: 100%;
  max-width: 365px;
  min-width: 290px;
  height: 60px;
  background-color: var(--grey-0);
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
