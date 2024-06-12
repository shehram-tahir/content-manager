import * as React from 'react';
import { Snackbar, IconButton, Alert } from '@mui/material';


export default function SimpleSnackbar(props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setSnackBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar open={props.openSnackbar} autoHideDuration={6000} 
        onClose={handleClose} message="Note archived" action={action}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
            {props.message || 'Resource created successfully.'}
        </Alert>
      </Snackbar>
    </div>
  );
}
