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

  width: 300px;
  height: 30px;
  font-size: 14px;

  margin-top: 20px;

  background: #f1f1f171;

  @media screen and (max-width: 500px) {
    width: 250px;
    font-size: 12px;
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

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 90%;

  margin: 20px 20px 0px 20px;

  border-bottom: 1px solid #4D4D4D;
  padding: 0px 200px;

  @media screen and (max-width: 840px) {
    padding: 0px 80px;
  }

  @media screen and (max-width: 500px) {
    justify-content: space-between;
    
    width: 80%;
    padding: 0px 20px;
  }
`

export const ContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  margin: 20px 20px 0px 20px;

  border-bottom: 1px solid #4D4D4D;
  padding: 30px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: start;

    margin: 0px 0px 0px 0px;
  }

  @media screen and (max-width: 500px) {
    margin: 0px;
    padding: 20px 0px;
    width: 100%;
  }
`

export const ContainerBaseTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
  width: 450px;
  height: auto;

  margin-right: 50px;

  @media screen and (max-width: 950px) {
    justify-content: space-between;
    
    width: 350px;
    padding: 10px 0px;
  }

   @media screen and (max-width: 560px) {
    justify-content: space-between;
    
    width: 220px;
    padding: 10px 5px;

    font-size: 14px;
  }
  
  @media screen and (max-width: 360px) {
    justify-content: space-between;
    
    width: 200px;
    padding: 10px 5px;

    font-size: 12px;
  }
`

export const ContainerBaseTitle = styled.p`
  font-weight: bold;

  margin-bottom: 10px;
`

export const Span = styled.span`
  color: #FF3548;
`

export const ContainerEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;

  background: #F1F1F1;
  border: 2px solid #9893938f;
  border-radius: 5px;

  padding: 0px 10px;

  margin-right: 30px;

  @media screen and (max-width: 940px) {
    width: 100%;
  }

  @media screen and (max-width: 350px) {
    width: 200px;
    margin-right: 20px;
  }
`

export const BtnEdit = styled.button`
  width: 40px;

  color: #FF3548;
  

  background: none;
  border: none;
  border-bottom: 1px solid #FF3548;

  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

export const ContainerColors = styled.div`
  width: 380px;
  height: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 120px));
  grid-auto-rows: 60px;
  column-gap: 10px;
  row-gap: 20px;
  justify-content: center;

  @media screen and (max-width: 860px) {
    width: 300px;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
    grid-template-columns: repeat(auto-fill, minmax(40px, 70px));
    grid-auto-rows: 40px;
  }
`

export const Color = styled.div`
  width: 100%;
  height: 60px;

  background: url("https://res.cloudinary.com/silviajcn/image/upload/v1644873953/Pruebas%20Tecnicas/MakeMake/PaginaWeb/fondo/backBoton_o9dqly.png") no-repeat;
  background-size: cover;
  background-position: start;

  border: 2px solid #F1F1F1;
  border-radius: 5px;

  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 40px;
  }
`

export const ColorCapa = styled.div`
  border-radius: 5px;
`

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  
  width: 100%;
  height: auto;
  padding: 50px;

  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;

    padding: 25px 10px;
  }
`

export const BtnDelete = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;

  background: none;
  border: none;

  cursor: pointer;
`

export const IconDelete = styled.img`
  width: 12px;
  height: auto;

  margin-right: 10px;
`

export const DeleteP = styled.p`
  width: 90px;

  color: #FF3548;

  border-bottom: 1px solid #FF3548;

  cursor: pointer;

  margin-right: 50px;

  @media screen and (max-width: 500px) {
    width: 80px;
    font-size: 12px;
    margin-right: 25px;
  }
`

export const BtnUpdate = styled.button`
  padding: 5px 20px;

  cursor: pointer;

  @media screen and (max-width: 500px) {
    padding: 2px 10px;
  }
`