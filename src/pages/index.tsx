import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import SliderBanner from '../components/presentational/SliderBanner/SliderBanner';
import Projects from '@/components/containers/Projects/Projects';
import FeaturesGrid from '@/components/containers/FeaturesGrid/FeaturesGrid';


const HomePage = () => {
  return (
    <Container>
        <SliderBanner />
        <Projects />
        <FeaturesGrid />
    </Container>
  );
};

export default HomePage;
