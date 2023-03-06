import { Route } from "react-router-dom";
import navItems from "../components/Navigation/navItems";
import INavigationItem from "../types/MenuItem";

const createRoutes = () => {
    let routes: Pick<INavigationItem, "to" | "Page">[] = [];

    navItems.map(item => {
        const { subItems = [], ...rest } = item;

        routes.push(rest);

        return subItems.map(subItem => routes.push(subItem));
    });

    return routes.map(({ to, Page }, index) => <Route key={`route-${index}`} path={to} element={<Page />} />);
};

export default createRoutes;
