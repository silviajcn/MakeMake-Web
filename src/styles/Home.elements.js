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

  padding: 40px 50px;

  @media screen and (max-width: 1000px) {
    padding: 100px 50px;
  }

  @media screen and (max-width: 600px) {
    padding: 50px 25px;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  background: #FFF;
  border-bottom: 1px solid #9893938f;
  border-radius: 20px;
  box-shadow: 0px 2px 8px #888;

  padding: 100px;

  @media screen and (max-width: 600px) {
    padding: 50px;
  }

  @media screen and (max-width: 360px) {
    padding: 25px;
  }
`

export const ContainerImg = styled.img`
  width: 250px;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 200px;
  }
`

export const Text = styled.p`
  font-size: 25px;
  color: #838181;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`