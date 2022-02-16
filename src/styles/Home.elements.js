import styled from "styled-components";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: auto;

  padding: 50px;

  /* @media screen and (max-width: 770px) {
    flex-direction: column;
  }

  @media screen and (max-width: 350px) {
    height: auto;
  } */
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`

export const ContainerImg = styled.img`
  width: 250px;
  height: auto;
`

export const Text = styled.p`
  font-size: 25px;
  color: #838181;
`