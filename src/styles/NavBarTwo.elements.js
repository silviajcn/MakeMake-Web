import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: #F1F1F1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  border-bottom: 1px solid #9893938f;
  box-shadow: 0px 2px 8px #888;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

export const Menu = styled.ul`
  z-index: 50;
  display: flex;
  justify-content: start;
  align-items: start;
  list-style: none;
    left: ${({ open }) => (open ? "0" : "-110%")}; //Import
    background-color: #F1F1F1;
    position: absolute;
    top: 104px;
    width: 30vw;
    height: 99vh;
    flex-direction: column;
    transition: 0.5s all ease;
    border-right: 1px solid #D3DEDC;
`

export const MenuItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
`

export const MenuItemLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;

  border-bottom: 1px solid gray;
`

export const SubTitles = styled.h4`
  width: 100%;
  color: #6680E3;
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  padding: 2px;

  margin-bottom: 30px;
`

export const Items = styled.div`
  margin-top: 6px;
  width: 100%;
  color: #6680E3;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    background-color: #D3DEDC;
    transition: 0.5s all ease;
  }
`

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 3px;
  border-radius: 2px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
    svg {
      fill: #4D4D4D;
    }
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InputSearch = styled.input`
  width: 400px;
  height: 35px;

  border: 1px solid #9893938f;
  border-radius: 12px;

  padding: 0px 10px;

  @media screen and (max-width: 850px) {
    width: 360px;
    height: 40px;
  }
`

//btn
export const BtnSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;

  /* position: relative;
  margin-left: -40px; */

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

export const ImgLogo = styled.img`
  width: 70px;
  height: auto;
`

export const LinksMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #4D4D4D;
  margin-right: 20px;
  text-decoration: none;
  background: none;
  padding: 3px;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
`

export const LogoImgMake = styled.img`
  width: 210px;
  height: auto;
  margin: 20px;
`