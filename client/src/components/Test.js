import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import RecipeContainer from './Recipes/RecipeContainer';
import Footer from './Footer/Footer';

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <RecipeContainer />
      </main>
      <Footer />
    </React.Fragment>
  );
}