import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react';

export const PrincipalInformation = ({ login, name, created_at }) => {
  return (
    <Fragment>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">{name ? name : 'No disponible '}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="caption">{`@${login}`}</Typography>
    </Fragment>
  );
};
