import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = styled.body`
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
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
display: block;
margin-left: auto;
margin-right: auto;
width: 70%;

img {
    width: 30%;
    float: left;
    margin-right: 20px;
    padding: 2px;
}

p {
    vertical-align: middle;
}
`;


export const DeleteButtonStyled = styled.p`
color: ${(props) => props.theme.red};
`;


