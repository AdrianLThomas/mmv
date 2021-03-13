import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/index/introduction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heroTitle: {
    width: '100px',
    color: 'white',
    fontSize: '32px',
  },
  introSpacing: {
    marginTop: 10,
  },
}));

export default function Home({ location }) {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname}>
      <Hero>
        <h2 className={classes.heroTitle}>Friendly. Professional. Reliable.</h2>
      </Hero>

      <Introduction className={classes.introSpacing} />
    </Layout>
  );
}
