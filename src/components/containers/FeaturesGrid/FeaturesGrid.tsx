import React from "react";
import { Grid } from "@mui/material";
import FeatureCard from "../../presentational/FeatureCard/FeatureCard";
import { features } from "./constants";

const FeaturesGrid: React.FC = () => {
  return (
    <Grid container>
      {features.map((feature, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesGrid;
