import React, { FC } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import { useAppDispatch } from "./app/hooks";
import { Counter } from "./features/counter/Counter";
import { increment } from "./features/counter/counterSlice";
import ContactPage from "./Pages/Contact/Contact.page";
import ErrorPage from "./Pages/Error/Error.page";

interface AppRouterProps { }

const AppRouter: FC<AppRouterProps> = () => {
    const dispatch = useAppDispatch();

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            loader: () => {
                console.log("hit")
              dispatch(increment())
                return null;
            },
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "contacts",
                    element: <Counter />,
                },
            ]
        },
    ]);

    return <RouterProvider router={routes} />
}

export default AppRouter;