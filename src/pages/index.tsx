import React from 'react';
import { Container } from '@mui/material';
import SliderBanner from '../components/presentational/SliderBanner/SliderBanner';
import Projects from '@/components/containers/Projects/Projects';
import FeaturesGrid from '@/components/containers/FeaturesGrid/FeaturesGrid';

import styles from './pages.module.scss'

const HomePage = () => {
  return (
    <Container className={styles.container}>
        <SliderBanner />
        <Projects />
        <FeaturesGrid />
    </Container>
  );
};

export default HomePage;
