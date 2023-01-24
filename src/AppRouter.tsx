import React, { FC } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import { useAppDispatch } from "./redux/hooks";
import CallbackPage from "./pages/Callback/Callback.page";
import ContactPage from "./pages/Contact/Contact.page";
import ErrorPage from "./pages/Error/Error.page";

interface AppRouterProps { }

const AppRouter: FC<AppRouterProps> = () => {
    const dispatch = useAppDispatch();

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // we can access the data we return
            // here in useLoaderData() in the component! 
            // How fuckin' cool is that?!?!
            loader: () => {
                console.log("hit");
                // dispatch(increment())
                return null;
            },
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "contacts",
                    element:<>poop</>,
                },
            ]
        }, {
            path: "/callback",
            element: <CallbackPage />,
            errorElement: <ErrorPage />,
        }]);

    return <RouterProvider router={routes} />
}

export default AppRouter;