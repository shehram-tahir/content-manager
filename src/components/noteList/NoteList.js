import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { getList } from '../Utils';
import { styled } from '@mui/system';


const TitleTypography = styled(Typography)({
    overflow: 'hidden', 
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', 
    textTransform: 'capitalize'
  });


function NoteList() {
  const [datalist, setDataList] = useState([]);
  useEffect(() => {
      getList().then(
      response => setDataList(response.data)
      )
  }, []);

  return (
    datalist ? 
      <Grid container spacing={4} justifyContent="space-between">
            {datalist.map(note => (
              <Grid item xs={12} md={6} xl={4}>
                  <Card sx={{height: '100%'}}>
                      <CardContent sx={{height: '70%'}}>
                          <TitleTypography variant='h6' gutterBottom>
                          {note.title}
                          </TitleTypography>
                          <Typography variant="body2">
                            {note.body}
                          </Typography>
                      </CardContent>
                      <Box sx={{textAlign: 'center'}}>
                          <Button variant='outlined' size="small" >Learn More</Button>
                      </Box>
                  </Card>            
              </Grid>

            ))}
      </Grid> : null
  );
}

export default NoteList;