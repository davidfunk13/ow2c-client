import { FC, useEffect } from 'react'
import { Box, Button, Grid, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useLogoutMutation, useTestQuery } from './redux/services/authApi';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { resetBattletagSlice, selectBattletagName, setBattletag } from './redux/slices/battletagSlice';
import { setSuccessSnackbar } from './redux/slices/notificationsSlice';
import Snackbar from './components/Snackbar/Snackbar';
import Navbar from './components/Navbar/Navbar';
import DesktopNavigationMenu from './components/DesktopNavigationMenu/DesktopNavigationMenu';
import { theme } from './theme/theme';
import AppRouter from './AppRouter';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';
import Session from './types/Session';
import { setSelectedSession } from './redux/slices/sessionSlice';

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
    const session = sessionStorage.getItem('session');
    if (session) {
      dispatch(setSelectedSession(JSON.parse(session)));
    }

    if (battletag && battletagId && id) {
      dispatch(setBattletag({ battletag, id, blizz_id: +battletagId }));
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
