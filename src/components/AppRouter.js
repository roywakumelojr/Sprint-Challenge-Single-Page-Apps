import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import SearchForm from './SearchForm';

const AppRouter = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
            <Route path="/search" component={SearchForm} />
        </div>
    )
}

export default AppRouter;