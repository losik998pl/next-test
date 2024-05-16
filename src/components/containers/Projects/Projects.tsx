import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography, Grid } from '@mui/material';
import { NewTabPanel } from '@/components/shared/TabPanel/TabPanel';

const categories = ["All", "Business", "Creative", "Portfolio", "Blog", "Infrastructure", "Industrial", "Other"];
const projects = ["/project0.png", "/project1.png", "/project2.png"];

import styles from './Projects.module.scss'

const Projects: React.FC = () => {
    return (
        <Box component={'div'} sx={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} className={styles.container}>
            <Typography variant="h4" component="h2" gutterBottom className={styles.heading}>
                Our Projects
            </Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
                Check out other themes based on <span>JEDI</span>
            </Typography>
            <NewTabPanel tabs={categories} mode={'mono'}/>
            <Box gap={0} sx={{marginTop: 6}}>
                {projects.map((project) => <Image src={project} alt={project} key={project} width={432} height={332} className={styles.image}/>)}
            </Box>
        </Box>
    );
};

export default Projects;
