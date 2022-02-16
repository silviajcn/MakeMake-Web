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

  width: 300px;
  height: 30px;
  font-size: 14px;

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

export const ContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  width: 1300px;

  @media screen and (max-width: 850px) {
    justify-content: space-between;
    
    width: 590px;
    padding: 0px 20px;
  }
`

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  width: 1000px;

  margin: 20px 20px 0px 20px;

  border-bottom: 1px solid #4D4D4D;
  padding: 30px;

  @media screen and (max-width: 850px) {
    justify-content: space-between;
    
    width: 590px;
    padding: 0px 20px;
  }
`

export const ContainerBaseTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
  width: 300px;
  height: auto;

  margin-right: 100px;

  @media screen and (max-width: 850px) {
    justify-content: space-between;
    
    width: 590px;
    padding: 0px 20px;
  }
`

export const ContainerBaseTitle = styled.p`
  font-weight: bold;

  margin-bottom: 10px;
`

export const Span = styled.span`
  color: #FF3548;
`

export const Input = styled.input`
  width: 400px;
  height: 30px;

  background: #F1F1F1;
  border: 2px solid #9893938f;
  border-radius: 5px;

  padding: 0px 10px;

  margin-right: 30px;
`

export const BtnEdit = styled.button`
  width: 40px;

  color: #FF3548;
  

  background: none;
  border: none;
  border-bottom: 1px solid #FF3548;

  cursor: pointer;
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
`

export const ColorCapa = styled.div`
  border-radius: 5px;
`

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  
  width: 1000px;
  height: auto;
  padding: 50px;
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
`

export const BtnUpdate = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;

  padding: 5px 20px;

  cursor: pointer;
`