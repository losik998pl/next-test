import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Logo.module.scss";

import cn from 'classnames'

const DARK_MODE = "dark";
const LIGHT_MODE = "light";

const ROW = "row"
const COLUMN = "column"

type Mode = typeof DARK_MODE | typeof LIGHT_MODE;
type Direction = typeof ROW | typeof COLUMN;

interface LogoProps {
  mode: Mode;
  direction?: Direction
}

const getImagePath = (path: string, mode: Mode) =>
  mode === DARK_MODE
    ? path.replace(/\.(png|svg|jpg)$/i, `_dark.${path.slice(-3)}`)
    : path;

const Logo = ({ mode, direction = 'row' }: LogoProps) => {
  return (
    <div className={cn(styles.logoContainer, {[styles.logoContainerRow]: direction === 'row'}, {[styles.logoContainerColumn]: direction === 'column'})}>
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
