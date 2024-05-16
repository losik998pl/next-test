import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Container, Typography } from '@mui/material';
import styles from './header.module.scss';
import { NewTabPanel } from "../TabPanel/TabPanel";
import Logo from "../Logo/Logo";
import classNames from 'classnames';

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <AppBar position="static" elevation={0} component="header" classes={{ root: styles.appBar }}>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Box component={'div'} className={styles.mobileBox} onClick={toggleNav}>
          <Image src="/burgerIcon.svg" alt="My Icon" width={52} height={56} />
          <Typography className={styles.burgerMenuSignature} component={'p'}>MENU</Typography>
        </Box>
        <Toolbar disableGutters className={styles.toolbar}>
          <Link href="/" passHref>
            <Logo mode="light"/>
          </Link>
          <nav className={classNames(styles.navContainer, {[styles.navContainerHidden]:!isNavVisible})}>
            <NewTabPanel tabs={['Home', 'Features', 'Portfolio', 'Blog']} />
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
