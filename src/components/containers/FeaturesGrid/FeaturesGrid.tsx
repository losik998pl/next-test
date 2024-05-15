import React from "react";
import { Grid } from "@mui/material";
import FeatureCard from "../../presentational/FeatureCard/FeatureCard";
import { features } from "./constants";

import styles from "./FeaturesGrid.module.scss";

const FeaturesGrid: React.FC = () => {
  return (
    <Grid container className={styles.cardsGrid}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </Grid>
  );
};

export default FeaturesGrid;
