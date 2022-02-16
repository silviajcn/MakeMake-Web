import styled from "styled-components";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  width: 100%;
  height: 41.89px;

  background: #6680E3;
  color: #fff;

  @media screen and (max-width: 770px) {
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
  }

  @media screen and (max-width: 350px) {
    height: auto;
    font-size: 12px;
    padding: 5px;
  }
`

export const EmailContainer = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 850px) {
    margin-left: 10px;
  }
`

export const PhonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`

export const Phones = styled.p`
  margin-right: 20px;
`