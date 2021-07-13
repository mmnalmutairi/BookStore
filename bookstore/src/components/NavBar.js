import { NavLinkStyled, Button, NavLinkBackto } from './styles';
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "./stores/authStore";
import { observer } from "mobx-react";

const NavBar = (props) => {
    return (
        <div>
            <NavLinkStyled to="/Books">Books</NavLinkStyled>
            <NavLinkStyled to="/shops">Shops</NavLinkStyled>
            <NavLinkBackto to="/">Home</NavLinkBackto>
            {authStore.user ? (<>
                <h4> Hola! {authStore.user.username}</h4>
                <NavLinkStyled onClick={authStore.signout}>Signout</NavLinkStyled>
            </>) :
                (<>
                    <SigninButton />
                    <SignupButton />
                </>
                )
            }
            <Button onClick={props.toggleTheme}> {props.currentTheme === "light" ? "Dark" : "Light"} mode </Button>
        </div>
    )
}

export default observer(NavBar);
