import { FC } from 'react'
import './App.css'
import { Navigate, Outlet } from "react-router-dom";
import { Button } from '@mui/material';
import authURI from './utils/authURI';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from './redux/services/authApi';
interface AppProps { }

const App: FC<AppProps> = () => {
  
  const navigate = useNavigate();
  const [performLogout, result] = useLogoutMutation();

  const logout = () => {
    performLogout(null);
  }

  return (
    <>
    {JSON.stringify(result.data)}
      <Button href={authURI.toString()} variant='contained' color='primary'>
        Login
      </Button>
      <Button onClick={() => logout()} variant='contained' color='primary'>
        Logout
      </Button>
      <Outlet />
    </>
  );
}

export default App
