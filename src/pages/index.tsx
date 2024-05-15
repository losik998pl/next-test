import React from 'react';
import { Container } from '@mui/material';
import SliderBanner from '../components/presentational/SliderBanner/SliderBanner';
import Projects from '@/components/containers/Projects/Projects';
import FeaturesGrid from '@/components/containers/FeaturesGrid/FeaturesGrid';

import styles from './pages.module.scss'
import Logo from '@/components/shared/Logo/Logo';

const HomePage = () => {
  return (
    <Container className={styles.container}>
        <Logo mode={'light'} direction='column'/>
        <SliderBanner />
        <Projects />
        <FeaturesGrid />
    </Container>
  );
};

export default HomePage;
