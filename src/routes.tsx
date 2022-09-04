import { pageNames } from "./constant";
import { Lead, LeadOtp, Opprtunity, RegisterSuccess, Sejam } from "./pages";


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
    element: <RegisterSuccess />,
  },
  {
    path: pageNames.sejam,
    element: <Sejam />,
  },
];
export default routes;
