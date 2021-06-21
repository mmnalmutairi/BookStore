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
import Books from './Books';

const theme = {
  light: {
    mainColor: "#84a59d",
    background: "#f5cac3",
    red: "red",
  },
  dark: {
    mainColor: "#f5cac3",
    background: "#84a59d",
    red: "red",
  },
};

function App() {

  const [book, setBook] = useState(Books);
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };


  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/Books/:name">
            <BookDetails book={book} setBook={setBook} />
          </Route>
          <Route path="/Books">
            <BookList setBook={setBook} />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </ThemeProvider>
    </div>

  );
}

export default App;
