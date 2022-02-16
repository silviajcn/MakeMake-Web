import styled from "styled-components";

export const FirtsContainer = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 550px));
  grid-auto-rows: 480px;
  column-gap: 50px;
  row-gap: 50px;
  justify-content: center;

  @media screen and (max-width: 1190px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 400px));
    grid-auto-rows: 450px;
  }

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 220px));
    grid-auto-rows: 320px;
  }
`

export const ContainerCards = styled.div`
  background: #F1F1F1;
  border: 2px solid #9893938f;
  border-radius: 5px;

  box-shadow: 0px 4px 6px #888;
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  background: url("https://res.cloudinary.com/silviajcn/image/upload/v1644873953/Pruebas%20Tecnicas/MakeMake/PaginaWeb/fondo/backBoton_o9dqly.png") no-repeat;
  background-size: cover;
  background-position: start;

  border-bottom: 2px solid #9893938f;

  @media screen and (max-width: 880px) {
    font-size: 15px;
  }
`

export const ContainerData = styled.div`
  background: #F1F1F1;
`

export const ContainerItemsData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  padding: 20px 40px 0px 40px;

  @media screen and (max-width: 880px) {
    padding: 10px 20px 0px 20px;
    font-size: 11px;
  }
`

export const ItemsData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;

  border-bottom: 1px solid #fff;

  @media screen and (max-width: 880px) {
    height: 40px;
  }
`

export const IconsImg = styled.img`
  width: 20px;
  height: auto;

  margin-right: 10px;
`

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SeeEdit = styled.p`
  color: #FF3548;

  cursor: pointer;
`

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  
  margin-top: 10px;

  @media screen and (max-width: 880px) {
    margin-top: 0px;
  }
`

export const ContainerStatistics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  @media screen and (max-width: 880px) {
    font-size: 12px;
    height: 40px;
  }
`

export const Statistics = styled.p`
  color: #FF3548;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
`

export const Button = styled.button`
  background: #FFD100;

  width: 120px;
  height: 35px;

  border: none;
  border-radius: 3px;
  padding: 5px 10px;

  cursor: pointer;

  @media screen and (max-width: 880px) {
    font-size: 12px;
    height: 30px;
  }
`

export const ContainerAddCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #9893938f;
  border-radius: 5px;

  background: #F1F1F1;
`

export const IconAdd = styled.img`
  width: 30px;
  height: auto;

  margin: 10px;

  @media screen and (max-width: 600px) {
    width: 25px;
  }
`

export const PAdd = styled.p`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`