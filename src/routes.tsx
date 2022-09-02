import { pageNames } from "./constant";
import { Lead, LeadOtp, Opprtunity } from "./pages";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.register,
    element: <Lead />,
  },
  {
    path: pageNames.register_verify,
    element: <LeadOtp />,
  },
  {
    path: pageNames.opportunity,
    element: <Opprtunity />,
  },
  {
    path: pageNames.register_success,
    element: <Opprtunity />,
  },
];
export default routes;
