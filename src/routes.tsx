import { pageNames } from "./constant";
import { Lead, LeadOtp, Opprtunity } from "./pages";
import RegisterSuccess from "./pages/register_success";

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
];
export default routes;
