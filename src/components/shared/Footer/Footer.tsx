import React from "react";
import { Grid, Box, Typography, TextField, Button, Link } from "@mui/material";
import styles from "./Footer.module.scss";
import { Facebook, Twitter, Google, LinkedIn } from "@mui/icons-material";
import Logo from "../Logo/Logo";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Grid container spacing={9}>
        <Grid item xs={12} sm={4}>
          <Logo mode="dark" />
          <Box className={styles.info}>
            <Box className={styles.infoItem}>
              <Typography variant="h6" gutterBottom>
                Address:
              </Typography>
              <Typography>
                28 Jackson Blvd Ste 1020 Chicago, IL 60604-2340
              </Typography>
            </Box>
            <Box className={styles.infoItem}>
              <Typography variant="h6" gutterBottom>
                Phone:
              </Typography>
              <Typography>800-2345-6789</Typography>
              <Typography variant="h6" gutterBottom>
                E-Mail:
              </Typography>
              <Typography>info@demolink.org</Typography>
            </Box>
          </Box>
          <Box className={styles.socialMedia}>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Twitter />
            </Link>
            <Link href="#">
              <Google />
            </Link>
            <Link href="#">
              <LinkedIn />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Latest From the Blog
          </Typography>
          <Box className={styles.blog}>
            <Box className={styles.blogItem}>
            <Image width={62} height={62} src="/blog0.png" alt="Blog" />
              <Box className={styles.blogInfo}>
                <Box>
                  <Image
                    priority
                    src="/arrow.svg"
                    height={13}
                    width={13}
                    alt="arrow"
                  />
                  <Typography className={styles.blogInfoDate}>04/30/2014</Typography>
                </Box>
                <Typography>Believe in the Business</Typography>
              </Box>
            </Box>
            <Box className={styles.blogItem}>
            <Image width={62} height={62} src="/blog1.png" alt="Blog" />
              <Box className={styles.blogInfo}>
                <Box>
                  <Image
                    priority
                    src="/arrow.svg"
                    height={13}
                    width={13}
                    alt="arrow"
                  />
                  <Typography className={styles.blogInfoDate}>05/01/2014</Typography>
                </Box>
                <Typography>Color solutions for the office</Typography>
              </Box>
            </Box>
            <Box className={styles.blogItem}>
              <Image width={62} height={62} src="/blog2.png" alt="Blog" />
              <Box className={styles.blogInfo}>
                <Box>
                  <Image
                    priority
                    src="/arrow.svg"
                    height={13}
                    width={13}
                    alt="arrow"
                  />
                  <Typography className={styles.blogInfoDate}>04/28/2014</Typography>
                </Box>
                <Typography>Anti-stress Joke Therapy</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
