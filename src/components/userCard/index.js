import { CardMedia, Grid, Stack } from '@mui/material';
import React from 'react';
import { Description } from '../description';
import { PrincipalInformation } from '../principalInformation/PrincipalInformation';

export const UserCard = ({ userState }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '15px' }}>
      <Grid item xs={3}>
        <CardMedia
          component="img"
          image={userState.avatar_url}
          alt="gitHub user"
          sx={{ borderRadius: '50%', marginLeft: '5px' }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={1} sx={{ margin: '30px' }}>
          <PrincipalInformation {...userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};
