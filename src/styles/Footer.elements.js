import styled from "styled-components";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
  width: 100%;
  height: auto;

  background: #000000;
  color: #fff;
  padding: 20px;
`

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerLgCct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 30%;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const ContainerPaises = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoImgMake = styled.img`
  width: 140px;
  height: auto;
  margin: 20px;

  @media screen and (max-width: 1200px) {
    width: 100px;
  }
`

export const LogoImg = styled.img`
  width: 80px;
  height: auto;
  margin: 20px;

  @media screen and (max-width: 1200px) {
    width: 60px;
  }
`

export const Paises = styled.p`
  font-size: 10px;
  margin-left: 10px;

  color: #FFFFFFB3;

  @media screen and (max-width: 700px) {
    font-size: 8px;
  }
`

export const Text = styled.p`
  margin-bottom: 8px;

  color: #FFFFFFB3;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 120px;
`

export const Links = styled.a`
  color: #FFFFFFB3;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ContainerBaseForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 30%;

  @media screen and (max-width: 1000px) {
    width: 80%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const ContainerForm = styled.div`
  margin-top: 20px;

  
`

export const ContainerFormInput = styled.input`
  width: 250px;
  height: 30px;
  margin-right: 5px;

  @media screen and (max-width: 480px) {
    margin-right: 0px;
    margin-bottom: 5px;
    width: 200px;
  }
`

export const ContainerFormButton = styled.button`
  width: auto;
  height: 30px;

  background: #6680E3;
  color: #fff;
  padding: 5px;

  border: none;
  border-radius: 2px;

  @media screen and (max-width: 480px) {
    width: 200px;
  }
`

export const ContainerThree = styled.div`
  text-align: center;

  padding: 40px 0px 10px 0px;
`

export const Copyright = styled.a`
  font-size: 14px;
  margin-bottom: 8px;

  text-decoration: none;

  color: #FFFFFFB3;

  cursor: pointer

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`