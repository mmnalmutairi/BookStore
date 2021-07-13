import { Route, Switch } from 'react-router';
import BookDetails from './BookDetails';
import ShopList from "./ShopList";
import Home from "./Home";
import bookStore from "./stores/BookStore";
import ShopDetail from './ShopDetail';
import BookList from './BookList';

const Routes = () => {

    return (
        <>
            {/* Switch and Route session  */}
            <Switch>

                {/* Book Details Page  */}
                <Route path="/Books/:name">
                    <BookDetails />
                </Route>

                {/* List Of Books Page  */}
                <Route path="/Books">
                    <BookList Books={bookStore.Books} />
                </Route>

                <Route path="/shops/:shopSlug">
                    <ShopDetail />
                </Route>

                <Route path="/shops">
                    <ShopList />
                </Route>

                {/* Home Page  */}
                <Route exact path="/">
                    <Home />
                </Route>

            </Switch>
        </>

    )
};

export default Routes;