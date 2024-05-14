import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import styles from './FeatureCard.module.scss';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <Card className={styles.featureCard} sx={{ boxShadow: 'none' }}>
            <CardContent>
                <div className={styles.icon}>{icon}</div>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
