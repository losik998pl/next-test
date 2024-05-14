import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import SliderBanner from '../components/presentational/SliderBanner/SliderBanner';
import Projects from '@/components/containers/Projects/Projects';


const HomePage = () => {
  return (
    <Container>
        <SliderBanner />
        <Projects />
    </Container>
  );
};

export default HomePage;
