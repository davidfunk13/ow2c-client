import { FC, useEffect } from 'react'
import { Box, Button, Grid, Toolbar, Typography, useMediaQuery } from '@mui/material';
import authURI from './utils/authURI';
import { useLogoutMutation, useTestQuery } from './redux/services/authApi';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { resetBattletagSlice, selectBattletagName, setBattletag } from './redux/slices/battletagSlice';
import { setSuccessSnackbar } from './redux/slices/notificationsSlice';
import Snackbar from './components/Snackbar/Snackbar';
import Navbar from './components/Navbar/Navbar';
import DesktopNavigationMenu from './components/DesktopNavigationMenu/DesktopNavigationMenu';
import { theme } from './theme/theme';
import AppRouter from './AppRouter';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';

interface AppProps { }

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  const desktopMenuBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  const battletagName = useAppSelector(selectBattletagName);

  const desktopMode = desktopMenuBreakpoint && battletagName;

  useEffect(() => {
    const id = localStorage.getItem('id');
    const battletag = localStorage.getItem('battletag');
    const battletagId = localStorage.getItem('battletag_id');
    if (battletag && battletagId && id) {
      dispatch(setBattletag({ battletag, id, battletag_id: +battletagId }));
    }
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      {desktopMode ? <DesktopNavigationMenu /> : <MobileNavigationMenu />}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App
