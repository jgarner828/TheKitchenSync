import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const styles = {
    box: {
        'maxWidth': '40%',
        'height': 'auto',
        'marginRight': 'auto',
        'marginLeft': 'auto',
        'borderRadius': '5px',
    },
    title: {
        'maxWidth': '35%',
        'height': 'auto',
        'marginRight': 'auto',
        'marginLeft': 'auto',
        'backgroundColor': 'red',
        'color': 'white',
        'padding': '10px',
        'borderRadius': '5px',
        'borderStyle': 'solid',
        'transform': 'translate3d(0px, -30px, 0px)',
    },
    top3recipes: {
        'float': 'left',
        'margin-left': '1.5em',
    },
    top3deserts: {
        'float': 'right',
        'margin-right': '1.5em',
    },
    flexbox: {
        'display': 'flex',
        'flexWrap': 'wrap',
    }
}

export default function Home() {
    return (
        <div>
            <Box mt={1} style={ styles.box } component="img"
            sx={{
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            src="https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"
            />
            <div style={styles.flexbox}>
                <Typography mt={4} style={styles.top3recipes} variant="h4">Top 3 Recipes of the Week</Typography>
                
            <Box style={ styles.title }>
            <Typography variant="h2">The Kitchen Sync</Typography>
            </Box>
            <Typography mt={4} style={styles.top3deserts} variant="h4">Top 3 Deserts of the Week</Typography>
            </div>
        </div>
    )
}