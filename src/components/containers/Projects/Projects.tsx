import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography, Grid } from '@mui/material';
import TabPanel from '@/components/shared/TabPanel/TabPanel';

const categories = ["All", "Business", "Creative", "Portfolio", "Blog", "Infrastructure", "Industrial", "Other"];
const projects = ["/project0.png", "/project1.png", "/project2.png"];

const Projects: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Our Projects
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                Check out other themes based on JEDI
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
            <Grid container spacing={3}>
                {projects.map((project) => <Image src={project} alt={project} key={project} width={432} height={332}/>)}
            </Grid>
        </Box>
    );
};

export default Projects;
