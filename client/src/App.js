import React, { Fragment } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import RecipeContainer from './components/Recipes/RecipeContainer';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <RecipeContainer />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
