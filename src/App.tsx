import { FC, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectBattletagName, setBattletag } from "./redux/slices/battletagSlice";
import Navbar from "./components/Navbar/Navbar";
import DesktopNavigationMenu from "./components/DesktopNavigationMenu/DesktopNavigationMenu";
import AppRouter from "./AppRouter";
import MobileNavigationMenu from "./components/NavigationDrawer/NavigationDrawer";
import { setSelectedSession } from "./redux/slices/sessionSlice";
import { selectTheme } from "./redux/slices/themeSlice";
import { parseTheme } from "./providers/MuiThemeProvider/MuiThemeProvider";

interface AppProps { }

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const currentTheme = parseTheme(theme);
  const desktopMenuBreakpoint = useMediaQuery(currentTheme.breakpoints.up("md"));

  const battletagName = useAppSelector(selectBattletagName);

  const desktopMode = desktopMenuBreakpoint && battletagName;

  useEffect(() => {
    const id = localStorage.getItem("id");
    const battletag = localStorage.getItem("battletag");
    const battletagId = localStorage.getItem("battletag_id");
    const session = localStorage.getItem("session");

    if (session) {
      dispatch(setSelectedSession(JSON.parse(session)));
    }

    if (battletag && battletagId && id) {
      dispatch(setBattletag({
        battletag,
        id,
        blizz_id: +battletagId
      }));
    }

  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      {desktopMode ? <DesktopNavigationMenu /> : <MobileNavigationMenu />}
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
