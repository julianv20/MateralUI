import { Stack, Typography } from '@mui/material';
import React from 'react';
import { LocationInformation } from '../locationInformation';
import { PaperInformation } from '../paperInformation';
export const Description = ({ userState }) => {
  const { bio } = userState;
  return (
    <>
      <Stack sx={{ justifyContent: 'center' }}>
        <Typography variant="body1">
          {bio ? bio : 'Bio: No disponible'}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
