import './App.css';
import BookList from './components/BookList';
import { ThemeProvider } from "styled-components";

import { useState } from "react";
import { GlobalStyle } from './components/styles';
// import BookDetail from './components/BookDetails';

import Home from "./components/Home";
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import BookDetails from './components/BookDetails'

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

        {/* Switch and Route session  */}
        <Switch>

          {/* Book Details Page  */}
          <Route path="/Books/:name">
            <BookDetails />
          </Route>

          {/* List Of Books Page  */}
          <Route path="/Books">
            <BookList />
          </Route>

          {/* Home Page  */}
          <Route exact path="/">
            <Home />
          </Route>


        </Switch>


      </ThemeProvider>
    </div>

  );
}

export default App;
