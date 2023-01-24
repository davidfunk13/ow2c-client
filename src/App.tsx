import { FC } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import { Button } from '@mui/material';
import authURI from './utils/authURI';
interface AppProps { }

const App: FC<AppProps> = () => {
  return (
    <>
      <Button href={authURI.toString()} variant='contained' color='primary'>
        Login
      </Button>
      <Outlet />
    </>
  );
}

export default App
