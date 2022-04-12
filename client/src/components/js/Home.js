import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import css from '../css/style.css';
import ImageList from "./ImageList";

const styles = {
    mainImage: {
        'maxWidth': '80%',
        'borderRadius': '10px',
        'marginTop': '0.5em',
    },
    missionCard: {
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'marginBottom': '2.5em',
        'backgroundColor': 'gray',
        'borderRadius': '15px',
    },
    discoverCard: {
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'marginTop': '1em',
        'backgroundColor': 'purple',
        'borderRadius': '15px',
    },
    discoverBtn: {
        'backgroundColor': '#52496F',
        'width': '40%',
        'marginTop': '1em',
    },
}

export default function Home() {

    function mouseOver(e) {
        e.target.style.background = 'white';
        e.target.style.color = '#52496F';
    }

    function mouseOut(e) {
        e.target.style.background = '#52496F';
        e.target.style.color = 'white';
    }

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
            <div>
                <Card style={ styles.missionCard } sx={{ maxWidth: 700 }}>
                <CardContent>
                    <h2 className="missionHead">Our Mission Statement</h2>
                    <p className="missionTxt">It's a fact, everyone loves food! We here at The Kitchen Sync want to help you find all the favorite recipes that you will enjoy! Everyone else in your life will love you even more when you make them some amazing tasting and looking food!</p>
                </CardContent>
                </Card>

                <ImageList />
                <Card style={ styles.discoverCard } sx={{ maxWidth: 1250 }}>
                <CardContent>
                    <h2 className="discoverHead">Discover</h2>
                    <p className="discoverTxt">Discover more recipes by visiting our recipes page!</p>
                    <Button onMouseOver={mouseOver} onMouseLeave={mouseOut} variant="contained"  style={styles.discoverBtn} href="#contained-buttons">
                        Discover
                    </Button>
                </CardContent>
                </Card>

            </div>
            </Container>
        </React.Fragment>
            
        
    )
}

// src="https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"
