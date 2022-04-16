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
    {
      value: 'each',
      label: 'Each',
    },
  ];

const Refrigerated = [
  {
    value: true,
    label: 'Yes',
  },
  {
    value: false,
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

  const [userFormData, setUserFormData] = React.useState({ name: '', quantity: 1, uom: '', refrigerated: false });

  const [validated] = React.useState(false);

  const [showAlert, setShowAlert] = React.useState(false);
  
  const [addIngredient] = useMutation(ADD_PRODUCT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleNumberChange = (event) => {
    let valu = event.target.value;

    if (!Number(valu)) {
        return;
    }
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
   
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(userFormData)
      const { data } = await addIngredient({variables: {product: {...userFormData}}})
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
          onChange={handleNumberChange}
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
      <Button type="submit" disabled={!(userFormData.name && userFormData.quantity && userFormData.uom)} style={styles.submitButton} variant="contained">Submit Ingredient</Button>
    </Box>
    )
}