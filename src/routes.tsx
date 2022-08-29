import { pageNames } from "./constant";
import { Home } from "./pages";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.home,
    element: <Home />,
  },
];
export default routes;
