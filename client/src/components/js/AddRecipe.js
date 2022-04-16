import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from "../../utils/mutations";

const Ingredients = [
  {
    value: 'sdf',
    label: 'sdf',
  },
  {
    value: 'test product',
    label: 'test product',
  },
  {
    value: 'test',
    label: 'test',
  },
];


const styles = {
    submitButton: {
        'marginTop': '1em',
    },
    overflowWrap: {
        'overflowWrap': "break-word",
    },
}



export default function AddRecipe() {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRefrigerate(event.target.value);
  // }

  // const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUOM(event.target.value);
  // };

  const [userFormData, setUserFormData] = React.useState({ name: '', instructions: '', minutes: 1, ingredients: [""] });
  const [addRecipe] = useMutation(ADD_RECIPE);
  const [validated] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  console.log(userFormData)

  const ingredientInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value});
      const arr = []
      arr.push(event.target.value)
      arr.push(userFormData.ingredients)
  }

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
      const { data } = await addRecipe({variables: { ...userFormData}})
      console.log(data)
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
 
    

    setUserFormData({
      name: '',
      instructions: '',
      minutes: '',
      ingredients: '',
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
          label="Recipe Name"
          helperText="Field Required"
          name="name"
          autoComplete="name"
          value={userFormData.name}
          onChange={handleInputChange}
        />
        <TextField
          required
          multiline
          id="outlined-required"
          label="Instructions"
          helperText="Field Required"
          name="instructions"
          autoComplete="instructions"
          value={userFormData.instructions}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Minutes"
          helperText="Field Required"
          name="minutes"
          autoComplete="minutes"
          value={userFormData.minutes}
          onChange={handleNumberChange}
        />
        <TextField
          id="outlined-select-currency"
          select
          required
          label="Ingredients Needed"
          helperText="Field Required"
          name="ingredients"
          autoComplete="ingredients"
          options={Ingredients}
          value={userFormData.ingredients}
          onChange={ingredientInputChange}
        >
          {Ingredients.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button type="submit" disabled={!(userFormData.name && userFormData.instructions && userFormData.minutes && userFormData.ingredients)} style={styles.submitButton} variant="contained">Submit Ingredient</Button>
    </Box>
    )
}
