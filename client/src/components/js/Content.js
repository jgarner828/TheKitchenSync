import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';


import { GET_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';

export default function Content(){
  const { data } = useQuery(GET_ME);
  const user = data?.me || data?.user || {};
  console.log(user)

  const signedOn = Auth.loggedIn();

  return (
    <div>
    {signedOn && (<h2>Welcome {`${user.username}`}!</h2>)}
    {signedOn && (<h4>Your Account's Email {`${user.email}`}</h4>)}
    {signedOn && (<h5>Your ID Number: {`${user._id}`}</h5>)}
    </div>
  )
}