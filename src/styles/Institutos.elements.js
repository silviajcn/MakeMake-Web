import styled from "styled-components";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: start;
  align-items: start; */
  
  width: 100%;
  height: auto;

  background: url("https://res.cloudinary.com/silviajcn/image/upload/v1644873964/Pruebas%20Tecnicas/MakeMake/PaginaWeb/fondo/background_qbzzai.png") no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 850px) {
    width: 750px;
  }
`

export const ContainerOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 30px;

  margin-top: 20px;

  background: #f1f1f171;
`

export const ContainerOneItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerOneIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;

  margin: 0px 10px;
`

export const ContainerOneInfo = styled.p`
  font-weight: bold;
`

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 1300px;

  margin: 20px 20px 0px 20px;

  border-bottom: 1px solid #4D4D4D;
  padding: 0px 100px;

  @media screen and (max-width: 850px) {
    justify-content: space-between;
    
    width: 590px;
    padding: 0px 20px;
  }
`

export const ContainerTwoP = styled.p`
  color: #6680E3;

  font-size: 16px;
  font-weight: bold;
`

export const ContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  width: 100%;

  margin-top: 15px;
  padding: 0px 100px;

  @media screen and (max-width: 850px) {
    padding: 0px 30px;
  }
`

export const ContainerThreeFilter = styled.p`
  color: gray;

  font-size: 18px;

  margin: 10px;
`

export const ContainerFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  width: 100%;

  margin: 40px 0px;
`