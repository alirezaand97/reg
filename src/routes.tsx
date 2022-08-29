import { pageNames } from "./constant";
import { Lead, LeadOtp, Opprtunity } from "./pages";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.lead,
    element: <Lead />,
  },
  {
    path: pageNames.lead_otp,
    element: <LeadOtp />,
  },
  {
    path: pageNames.opportunity,
    element: <Opprtunity />,
  },
];
export default routes;
