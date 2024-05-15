import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Logo.module.scss";

const DARK_MODE = "dark";
const LIGHT_MODE = "light";

type Mode = typeof DARK_MODE | typeof LIGHT_MODE;

interface LogoProps {
  mode: Mode;
}

const getImagePath = (path: string, mode: Mode) =>
  mode === DARK_MODE
    ? path.replace(/\.(png|svg|jpg)$/i, `_dark.${path.slice(-3)}`)
    : path;

const Logo = ({ mode }: LogoProps) => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src={getImagePath('/logo.png', mode)}
        alt="Logo X"
        className={styles.logoX}
        width={78}
        height={72}
        //   priority
      />
      <div className={styles.logoTextBox}>
        <Image
          src={getImagePath('/jedi_logo.png', mode)}
          alt="Jedi Logo"
          className={styles.logoX}
          width={72}
          height={38}
          //   priority
        />
        <Typography variant="h6" component="p" className={`${styles.logoTypography} ${styles[mode]}`}>
          May the Joomla be with you
        </Typography>
      </div>
    </div>
  );
};

export default Logo;
