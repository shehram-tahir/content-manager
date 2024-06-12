import React, { useState } from 'react';
import AddNoteForm from './components/AddNoteForm';
import { Container } from '@mui/material';
import NavBar from './components/Navbar';
import MainNoteList from './components/noteList/MainNoteList';
import Snackbar from './components/Snackbar';

export const SnackBarContext = React.createContext('');

function App() {
  const [openSnackbar, setSnackBar] = useState(false)
  return (
    <SnackBarContext.Provider value={setSnackBar}>
      <NavBar/>
      <Snackbar openSnackbar={openSnackbar} setSnackBar={setSnackBar}/>
      <Container maxWidth="md" sx={{marginTop: '40px'}}>
        <AddNoteForm/>
        <MainNoteList />
      </Container>
    </SnackBarContext.Provider>

  );
}

export default App;
