import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const images = [
  {
    url: 'https://www.angelofthewinds.com/wp-content/uploads/2021/01/Playa-BonitaBLOG.jpg',
    title: 'Mexican',
    width: '33.33%',
  },
  {
    url: 'https://zhenweinyc.com/wp-content/uploads/2019/08/5-Signature-Dishes-of-Authentic-Chinese-Food.jpg',
    title: 'Chinese',
    width: '33.33%',
  },
  {
    url: 'http://cdn.cnn.com/cnnnext/dam/assets/150813135423-korea-food-map-bibimbap.jpg',
    title: 'Korean',
    width: '33.33%',
  },
  {
    url: 'https://thertwguys.com/wp-content/uploads/2019/05/japanese-food-ramen-2-1600x900.jpg',
    title: 'Japanese',
    width: '33.33%',
  },
  {
    url: 'https://i0.wp.com/thatanxioustraveller.com/wp-content/uploads/2018/05/germany_sauerkraut_1.jpg?resize=960%2C720&ssl=1',
    title: 'German',
    width: '33.33%',
  },
  {
    url: 'https://www.bonappetour.com/blog/wp-content/uploads/2015/03/1426576690-7820792-1030x521.jpeg',
    title: 'Italian',
    width: '33.33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderColor: 'black',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function CookBook() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}