import React, { useContext } from 'react';
import { TextField, Button, Grid} from '@mui/material';
import { Formik } from 'formik';
import { postApi } from './Utils';
import { SnackBarContext } from '../App';

function AddNoteForm() {
  const setSnackBar = useContext(SnackBarContext)

  const handleFormSubmission = values => {
    postApi(undefined, values).then(response => {
      console.log(response)
      setSnackBar(true);

    })
  }
  return (
    <Formik 
      initialValues={{title: '', description: ''}}
      onSubmit={handleFormSubmission}
      >
      {
        ({ values, handleChange, handleSubmit, handleReset }) => (
          <form onSubmit={e => { 
            e.preventDefault();
            handleSubmit();
            handleReset();
            }}>
            <Grid container spacing={2} alignItems="center" marginBottom={'20px'}>
              <Grid item xs={12} sm={8}>
                <TextField
                    fullWidth
                    label="title"
                    name="title"
                    variant="outlined"
                    value={values.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="description"
                    name="description"
                    variant="outlined"
                    value={values.description}
                    onChange={handleChange}
                    required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add
              </Button>
              </Grid>
            </Grid>
          </form>
        )}

      {/* <Snackbar
        autoHideDuration={3000}
        open={true}
        size={size}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpen(false);
        }}
      >
        A snackbar with {size} size.
      </Snackbar> */}
    </Formik>

  );
}

export default AddNoteForm;
