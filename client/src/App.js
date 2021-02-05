import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import RecipeContainer from './components/Recipes/RecipeContainer';
import Footer from './components/Footer/Footer';

import { darkTheme } from './styles.js'

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <RecipeContainer />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
