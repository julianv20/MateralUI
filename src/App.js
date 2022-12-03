import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { Searcher } from './components/Searcher';
import { UserCard } from './components/userCard';
import { users } from './services /users';

export const App = () => {
  const [inputUser, setInputUser] = useState('freddier');
  const [userState, setUserState] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const data = await users(inputUser);
      setUserState(data);
      console.log(userState);
    };
    getUser();
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: 'whitesmoke',
        with: '80vw',
        // height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '40px',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};
