import styled from "styled-components";
import { Button, Form, FormControl} from "react-bootstrap";

export const FirtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
  width: 100%;
  height: auto;
`

// form
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const InputSearch = styled(FormControl)`
  width: 550px;
  height: 40px;

  border: 2px solid #9893938f;
  border-radius: 12px;

  padding: 0px 10px;

  @media screen and (max-width: 850px) {
    width: 360px;
    height: 40px;
  }
`

//btn
export const BtnSearch = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;

  position: relative;
  margin-left: -40px;

  border: none;
  &:hover {
    cursor: pointer;
  }
`

export const IconImg = styled.img`
  width: 20px;
  height: auto;

  margin-right: 10px;
`
