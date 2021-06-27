import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";

export const GlobalStyle = styled.body`
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
`;

export const BiBookAddStyled = styled(BiBookAdd)`
color: ${(props) => props.theme.mainColor};
margin-left: 71%;
`;
export const NavLinkBackto = styled(Link)`
margin: 10px;
float: left;
`;
export const NavLinkStyled = styled(Link)`
margin: 10px;
float: right;
`;
export const Title = styled.h1`
text-align: center;
color: white;
font-size: 40px;
background-color: #84a59d;
`;

export const SearchBarStyled = styled.input`
padding: 0.5rem;
margin: 1rem auto;
display: block;
width: 40%;
`;

export const Description = styled.h4`
text-align: center;
color: white;
background-color: #84a59d;
font-size: 30px;
`;

export const Image = styled.img`
border-style: solid;
border-color: #84a59d;
border-width: 10px;
`;

export const Button = styled.button`
font-size: 20px;
margin: 2em;
border-radius: 14px;
padding: 0.25em 1em;
background-color: ${props => props.theme.mainColor};
color: ${props => props.theme.backgroundColor};
`;

export const BookWrapper = styled.div`
display: table;
width: 70%;

img {
margin-left: 400px;
float: left;
width: 25%;
padding: 10px;
display: table;
border-radius: 10px;
}

p {
    margin-top: 100px;
    padding-bottom: 10px;
}
`;


export const DeleteButtonStyled = styled.p`
background-color: #f28482;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 4px 2px;

  

`;


export const NameInItem = styled.h3`
font-size: 30px;
font-weight: bold;
font-family: 'Courier New', Courier, monospace;
padding-top: 90px;
color: #f5cac3;
`;


export const NameInDetails = styled.h3`
margin-left: 550px;
font-size: 25px;
font-weight: bold;
font-family: 'Courier New', Courier, monospace;
padding: 8px;
color: #f5cac3
`;

export const BookDetailsStyle = styled.h1`
margin-left: 500px;
font-size: 50px;
padding: 8px;
color: #84a59d;
`;

export const BriefStyle = styled.p`
font-size: 18px;
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
padding: 8px;
color: #f5cac3;
`;


export const CreateButtonStyled = styled.button`
background-color: #f28482;
  border: none;
  color: white;
  padding: 15px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin: 6px 3px;
  margin-left: 40%;
`;
