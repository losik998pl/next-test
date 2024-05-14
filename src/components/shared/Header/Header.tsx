import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import styles from './header.module.scss';
import TabPanel from "../TabPanel/TabPanel";

const Header = () => {
  return (
    <AppBar position="static" elevation={0} component="header" classes={{ root: styles.appBar }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>
          <Link href="/" passHref>
            <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Logo X"
              className={styles.logoX}
              width={78}
              height={72}
            //   priority
            />
            <div>
            <Image
              src="/jedi_logo.png"
              alt="Jedi Logo"
              className={styles.logoX}
              width={72}
              height={38}
            //   priority
            />
            <Typography variant="h6" component="div">
              May the Joomla be with you
            </Typography>
            </div>
            </div>
          </Link>
          <nav className={styles.navContainer}>
            <TabPanel tabs={['Home', 'Features', 'Portfolio', 'Blog']} />
            {/* <Button color="inherit" component={Link} href="/">Home</Button>
            <Button color="inherit" component={Link} href="/features">Features</Button>
            <Button color="inherit" component={Link} href="/portfolio">Portfolio</Button>
            <Button color="inherit" component={Link} href="/blog">Blog</Button> */}
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
