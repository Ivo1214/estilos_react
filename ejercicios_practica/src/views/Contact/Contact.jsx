import React from 'react';
import styles from "./contact.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Contact Us</h1>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="gatito"
                    height="140"
                    image="../../images/image_template.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Tarjeta Gatito en Contact
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl tortor, maximus at purus ac, tempor semper ligula.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Agregar</Button>
                    <Button size="small" color="error">Eliminar</Button>
                </CardActions>
            </Card>
            </div>
        </>
    );
};

export default Contact;