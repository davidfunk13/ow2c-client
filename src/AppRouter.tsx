import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error/Error.page";
import Home from "./pages/Home/Home";
import DashboardPage from "./pages/Dashboard/Dashboard.page";
import CallbackPage from "./pages/Callback/Callback.page";
import SessionPage from "./pages/Session/Session.page";

interface AppRouterProps { }

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Routes>
            <Route  path={"/"} element={<Home />} />
            <Route path={"/callback"} element={<CallbackPage />} />
            <Route path={"/dashboard"} element={<DashboardPage />} />
            <Route path={"/session/:id"} element={<SessionPage />} />
            <Route path={"*"} element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;
