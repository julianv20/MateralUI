import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';

export const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputUser(valueInput);
  };

  const handleOnchange = ({ target }) => {
    setValueInput(target.value);
    console.log(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '30px',
        width: '80%',
      }}
    >
      <TextField
        id="outlined-basic"
        size="small"
        label="GitHub User"
        variant="outlined"
        placeholder="Octocat"
        value={valueInput}
        onChange={handleOnchange}
        sx={{
          width: '90%',
        }}
      ></TextField>
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: ' -45px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
