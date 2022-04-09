import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { ThemeProvider } from "styled-components";
import css from '../css/style.css';

const styles = {
    mainImage: {
        'maxWidth': '65%',
        'borderRadius': '10px',
        'marginTop': '0.5em',
    },
    customCard: {
        'maxWidth': '50%',
        'marginLeft': 'auto',
        'marginRight': 'auto',
    },
}

export default function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100vh">
            <div>   
                <img style={ styles.mainImage } src="https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"></img>
            </div>    
            <div className="headerTxt-div">
                <p className="headerTxt">The Kitchen Sync</p>
                <p className="sloganTxt">Drippin In Recipes</p>
            </div>
            <Card style={ styles.customCard } sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            </Card>
            
            </Container>
        </React.Fragment>
            
        
    )
}

// src="https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"