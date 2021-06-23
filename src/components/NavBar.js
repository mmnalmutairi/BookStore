import { NavLinkStyled, Button, NavLinkBackto } from './styles';

const NavBar = (props) => {


    return (
        <div>
            <NavLinkStyled to="/Books">Books</NavLinkStyled>
            <NavLinkBackto to="/">Home</NavLinkBackto>
            <Button onClick={props.toggleTheme}> {props.currentTheme === "light" ? "Dark" : "Light"} mode </Button>
        </div>
    )
}

export default NavBar;
