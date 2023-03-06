import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error/Error.page";
import Home from "./pages/Home/Home";
import createRoutes from "./utils/createRoutes";

interface AppRouterProps { }

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            {createRoutes()}
            <Route path={"*"} element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;
