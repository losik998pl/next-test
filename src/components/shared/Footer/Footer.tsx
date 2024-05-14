import React from 'react';
import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import styles from './Footer.module.scss';
import { Facebook, Twitter, Google, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <Box className={styles.footer}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>Address:</Typography>
                    <Typography>28 Jackson Blvd Ste 1020 Chicago, IL 60604-2340</Typography>
                    <Typography variant="h6" gutterBottom>Phone:</Typography>
                    <Typography>800-2345-6789</Typography>
                    <Typography variant="h6" gutterBottom>E-Mail:</Typography>
                    <Typography>info@demolink.org</Typography>
                    <Box className={styles.socialMedia}>
                        <Link href="#"><Facebook /></Link>
                        <Link href="#"><Twitter /></Link>
                        <Link href="#"><Google /></Link>
                        <Link href="#"><LinkedIn /></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>Latest From the Blog</Typography>
                    <Typography>Believe in the Business</Typography>
                    <Typography>Color solutions for the office</Typography>
                    <Typography>Anti-stress Joke Therapy</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>Contact Us</Typography>
                    <TextField label="Your Name" variant="outlined" fullWidth margin="dense" />
                    <TextField label="Your Email" variant="outlined" fullWidth margin="dense" />
                    <TextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="dense" />
                    <Button variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
