import styled from "styled-components";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: auto;

  background: url("https://res.cloudinary.com/silviajcn/image/upload/v1644873964/Pruebas%20Tecnicas/MakeMake/PaginaWeb/fondo/background_qbzzai.png") no-repeat;
  background-size: cover;
  background-position: center;

  padding: 80px 0px;

  @media screen and (max-width: 1000px) {
    padding: 50px 0px;
  }

  @media screen and (max-width: 600px) {
    padding: 25px 0px;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`

export const ContainerImg = styled.img`
  width: auto;
  height: auto;

  @media screen and (max-width: 1100px) {
    width: 700px;
  }

  @media screen and (max-width: 800px) {
    width: 550px;
  }

  @media screen and (max-width: 560px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`