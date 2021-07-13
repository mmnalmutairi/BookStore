import './App.css';
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyle } from './components/styles';
import NavBar from './components/NavBar';
import { observer } from "mobx-react";
import Routes from "./components/Routes";
import shopStore from "../src/components/stores/shopStore";
import bookStore from './components/stores/BookStore';

const theme = {
  light: {
    mainColor: "#84a59d",
    background: "#f5cac3",
  },
  dark: {
    mainColor: "#f5cac3",
    background: "#84a59d",
  },
};

function App() {

  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };


  return (
    <div className="body">
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />

        {/* Navigation bar session */}
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        {false ? <h2>Loading...</h2> : < Routes />}
        {/* {shopStore.isLoading ? <h2>Loading...</h2> : < Routes />} */}
        {/* {bookStore.isLoading ? <h2>Loading...</h2> : < Routes />} */}
      </ThemeProvider>
    </div>

  );
}

export default observer(App);
