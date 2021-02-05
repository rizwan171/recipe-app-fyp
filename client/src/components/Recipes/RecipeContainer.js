import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchBar from "material-ui-search-bar";

import useStyles from './styles.js';
import RecipeCard from './Recipe/RecipeCard.js';

//TODO: temporary placeholder
const recipes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const RecipeContainer = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <SearchBar className={classes.searchBar} />
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </Grid>
        </Container>
    </Fragment>
  );
};

export default RecipeContainer;
