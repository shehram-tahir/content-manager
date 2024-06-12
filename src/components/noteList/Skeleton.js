import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

function Skeleton() {
  const datalist = [
      {
          title: 'Loading',
          description: 'Loading',
      },
      {
          title: 'Loading',
          description: 'Loading',
      },
      {
          title: 'Loading',
          description: 'Loading',
      },
      {
          title: 'Loading',
          description: 'Loading',
      },
      {
          title: 'Loading',
          description: 'Loading',
      },
      {
          title: 'Loading',
          description: 'Loading',
      },
  ];

  return (
    <Grid container spacing={4} justifyContent="space-between">
          {datalist.map(note => (
            <Grid item xs={12} md={6} xl={4}>
                <Card sx={{height: '100%'}}>
                    <CardContent sx={{height: '70%'}}>
                        <Typography variant='h6' gutterBottom sx={{
                          overflow: 'hidden', textOverflow: 'ellipsis',
  whiteSpace: 'nowrap', textTransform: 'capitalize'
  }}>
                        {note.title}
                        </Typography>
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
    </Grid>
  );
}

export default Skeleton;