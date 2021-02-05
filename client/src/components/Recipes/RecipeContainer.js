import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles.js';
import RecipeCard from './Recipe/RecipeCard.js';

//TODO: temporary placeholder
const recipes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const RecipeContainer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeContainer;
