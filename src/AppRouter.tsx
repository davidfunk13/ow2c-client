import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error/Error.page";
import Home from "./pages/Home/Home";
import CallbackPage from "./pages/Callback/Callback.page";
import DashboardPage from "./pages/Dashboard/Dashboard.page";

interface AppRouterProps { }

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/callback"} element={<CallbackPage />} />
            <Route path={"/dashboard"} element={<DashboardPage />} />
            <Route path={"*"} element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;
