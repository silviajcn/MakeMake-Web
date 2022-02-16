import styled from "styled-components";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: auto;

  background: url("https://res.cloudinary.com/silviajcn/image/upload/v1644873964/Pruebas%20Tecnicas/MakeMake/PaginaWeb/fondo/background_qbzzai.png") no-repeat;
  background-size: cover;
  background-position: center;
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

  @media screen and (max-width: 1180px) {
    font-size: 12px;

    width: 200px;
  }
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
  
  width: 90%;

  margin: 20px 20px 0px 20px;

  border-bottom: 1px solid #4D4D4D;
  padding: 0px 80px;

  @media screen and (max-width: 900px) {
    padding: 0px 0px;
    font-size: 12px;
  }

  @media screen and (max-width: 460px) {
    flex-direction: column;
    align-items: start;
  }
`

export const ContainerTwoP = styled.p`
  color: #6680E3;

  font-size: 16px;
  font-weight: bold;

  @media screen and (max-width: 1180px) {
    font-size: 10px;
  }
`

export const ContainerDate = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;

  margin-right: 200px;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;

    margin-right: 0px;
  }
`

export const Date = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;

  background: #FF3548;
  color: #FFF;
  font-size: 14px;
  padding: 20px;

  width: 150px;

  border-radius: 0px  0px 10px 10px;

  text-align: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;

    width: 100%;

    border-radius: 0px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

export const ContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  width: 100%;

  margin-top: 15px;
  padding: 0px 100px;

  @media screen and (max-width: 1180px) {
    padding: 0px 10px;
  }
`

export const ContainerThreeFilter = styled.p`
  color: gray;

  font-size: 18px;

  margin: 10px;

  @media screen and (max-width: 1180px) {
    font-size: 14px;
  }
`

export const ContainerFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  width: 100%;

  margin: 40px 0px;
`