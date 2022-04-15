import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from "../../utils/mutations";

const uom = [
    {
      value: 'tsp',
      label: 'Teaspoon',
    },
    {
      value: 'tbsp',
      label: 'Tablespoon',
    },
    {
      value: 'fl oz',
      label: 'Fluid Ounce',
    },
    {
      value: 'c',
      label: 'Cup',
    },
    {
      value: 'pt',
      label: 'Pint',
    },
    {
      value: 'qt',
      label: 'Quart',
    },
    {
      value: 'gal',
      label: 'Gallon',
    },
    {
      value: 'ml',
      label: 'Milliliter',
    },
    {
      value: 'l',
      label: 'Liter',
    },
    {
      value: 'dl',
      label: 'Deciliter',
    },
  ];

const Refrigerated = [
  {
    value: 'True',
    label: 'Yes',
  },
  {
    value: 'False',
    label: 'No',
  },
];

const styles = {
    submitButton: {
        'marginTop': '1em',
    },
}



export default function AddIngredient() {
  const [Refrigerate, setRefrigerate] = React.useState('');
  const [UOM, setUOM] = React.useState('');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRefrigerate(event.target.value);
  // }

  // const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUOM(event.target.value);
  // };

  const [userFormData, setUserFormData] = React.useState({ name: '', quantity: '', uom: '', refrigerated: '' });
  const [addingredient] = useMutation(ADD_PRODUCT);
  const [validated] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  console.log(userFormData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
   
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addingredient({
        variables: { ...userFormData },
      });
      console.log(data)
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
 
    

    setUserFormData({
      name: '',
      quantity: '',
      uom: '',
      refrigerated: '',
    });
  }

    return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      validated={validated}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Ingredient Name"
          helperText="Field Required"
          name="name"
          autoComplete="name"
          value={userFormData.name}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          helperText="Field Required"
          name="quantity"
          autoComplete="quantity"
          value={userFormData.quantity}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-select-currency"
          select
          required
          label="Unit of Measurement"
          name="uom"
          autoComplete="uom"
          options={uom}
          value={userFormData.uom}
          onChange={handleInputChange}
          helperText="Field Required"
        >
          {uom.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          required
          label="Refrigerated?"
          name="refrigerated"
          autoComplete="refrigerated"
          options={Refrigerate}
          value={userFormData.refrigerated}
          onChange={handleInputChange}
          helperText="Field Required"
        >
          {Refrigerated.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button type="submit" disabled={!(userFormData.name && userFormData.quantity && userFormData.uom && userFormData.refrigerated)} style={styles.submitButton} variant="contained">Submit Ingredient</Button>
    </Box>
    )
}