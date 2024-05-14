import React from 'react';
import { Container } from '@mui/material';
import SliderBanner from '../components/presentational/SliderBanner/SliderBanner';
import Projects from '@/components/containers/Projects/Projects';

import styles from './pages.module.scss'

const HomePage = () => {
  return (
    <Container className={styles.container}>
        <SliderBanner />
        <Projects />
    </Container>
  );
};

export default HomePage;
