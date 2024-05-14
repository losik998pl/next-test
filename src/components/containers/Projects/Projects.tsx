import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography, Grid } from '@mui/material';
import TabPanel from '@/components/shared/TabPanel/TabPanel';

const categories = ["All", "Business", "Creative", "Portfolio", "Blog", "Infrastructure", "Industrial", "Other"];
const projects = ["/project0.png", "/project1.png", "/project2.png"];

import styles from './Projects.module.scss'

const Projects: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', paddingTop: 9, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" component="h2" gutterBottom className={styles.heading}>
                Our Projects
            </Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
                Check out other themes based on <span>JEDI</span>
            </Typography>
            <TabPanel tabs={categories}/>
            {/* <Box sx={{ mt: 2, mb: 4, display: 'flex', justifyContent: 'center' }}>
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        sx={{
                            mx: 1,
                            color: selectedCategory === category ? 'primary.main' : 'text.primary',
                            fontWeight: selectedCategory === category ? 'bold' : 'normal'
                        }}
                    >
                        {category}
                    </Button>
                ))}
            </Box> */}
            <Box gap={0} sx={{marginTop: 6}}>
                {projects.map((project) => <Image src={project} alt={project} key={project} width={432} height={332} className={styles.image}/>)}
            </Box>
        </Box>
    );
};

export default Projects;
