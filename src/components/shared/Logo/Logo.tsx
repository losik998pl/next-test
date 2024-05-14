import Image from "next/image";
import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
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
    );
};

export default Logo;