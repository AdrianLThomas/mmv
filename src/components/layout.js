import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import css from './layout.module.scss';
import { Container } from '@material-ui/core';

export default function Layout({ children, currentPath }) {
  return (
    <>
      <Container className={css.container}>
        <Navigation currentPath={currentPath}></Navigation>
        {children}
        <Footer />
      </Container>
    </>
  );
}