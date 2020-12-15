import styled from "styled-components";

import hohoho from '../assets/hohoho.png';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  z-index:1;

  min-height: 120px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
export const Navbar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  nav > ul{
    list-style-type: none;
    display:flex;
    margin: 0;
    padding: 0;
  }
  nav > ul > li a{
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
  }
`;
export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #fff;
`
export const Body = styled.body`
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(6px + 2vmin);
  line-height: 1.6em;
  justify-content: space-around;
  min-height: 100vh;

  background-image: url(${hohoho});
  background-color: #B21E24;
  background-repeat: no-repeat,repeat;
  background-position: center bottom,right bottom;
`;

export const Wrapper = styled.div`
  width: 1220px;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`
export const ImageWrap = styled.div`
  width: 15%;
  display:flex;
  justify-content: flex-start;
`
export const Image = styled.img`
  height: 7vmin;
  margin-bottom: 16px;
  pointer-events: none;
`
export const Connected = styled.div`
  width: 15%;
  text-align: center;
  background: #DC2E33;
  border: none;
  color: #fff;
  padding: 16px 45px;
  box-shadow: 0px 0px 4px #E15155;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Button = styled.button`
  background: #fff;
  border: none;
  color: #000;
  padding: 16px 45px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  box-shadow: 0px 0px 4px #ccc;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`
export const LinkButton = styled.div`
  display: flex;
  a{
    background: #DC2E33;
    border: none;
    color: #fff;
    padding: 16px 45px;
    box-shadow: 0px 0px 4px #E15155;

    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
`;
