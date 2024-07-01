import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import NotFound from "./Pages/NotFound/NotFound";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Contact from "./Pages/Contact/Contact";
import Photo from "./Pages/PhotoGallery/Photo";
import Wrapped from "./Pages/Wrapped/Wrapped";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/Login/ForgotPassword/ForgotPassword";
import Reset from "./Pages/Login/ForgotPassword/Reset/Reset";
import Edit from "./Pages/Dashboard/EditProfile";
import MockMun24 from "./Pages/MockMun24/MockMun24";
import SuperAdminDashboard from "./Pages/SuperAdmin/SuperAdminDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import IndividualUser from "./Pages/SuperAdmin/IndividualUser";
import AllAccounts from "./Pages/SuperAdmin/AllAccounts";
import ContactUsResponses from "./Pages/SuperAdmin/ContactUsResponses";
import Scheduled from "./Pages/SuperAdmin/Scheduled";
import AllEventRegistrations from "./Pages/Admin/AllEventRegistrations";
import IndividualEventReg from "./Pages/Admin/IndividualEventReg";
import RegistrationsBasedOnStatus from "./Pages/Admin/RegistrationsBasedOnStatus";
import OneEventRegistrations from "./Pages/Admin/OneEventRegistrations";
import Archive from "./Components/Archiv/Archive";
import Apply from "./Components/ApplyNow/apply";
import About from "./Components/About/About";
import Error from "./Pages/Error/Error";
import AnnualConf from "./Pages/AnnualConf/AnnualConf";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import ContactRes from "./Pages/ContactUsRes/ContactRes";
import Blogs from "./Pages/Blogs/Blogs";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        {/* About */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/wrapped" element={<Wrapped />} />
        <Route path="/mockmun24" element={<MockMun24 />} />
        <Route path="/annualconf" element={<AnnualConf />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/registration/invite/:grpLeaderEmail/to/:memberEmail/token/:uniqueToken/:eventNameIn/:grpName"
          element={<Registration />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword/:token" element={<Reset />} />
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/verifyemail/:token" element={<VerifyEmail />} />
        <Route path="/applynow" element={<Apply />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />

        {/* Admin stuffs */}
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/allreg" element={<AllEventRegistrations />} />
        <Route path="/registrations/:event" element={<OneEventRegistrations />} />
        {/* Individual event */}
        <Route path="/eventreg/:eventID" element={<IndividualEventReg />} />
        {/* event based on status */}
        <Route path="/reg/:eventName/:status" element={<RegistrationsBasedOnStatus />} />
        <Route path="/contactusres" element={<ContactRes />} />
        {/* SuperAdmin stuffs */}
        <Route exact path="/superadmin" element={<SuperAdminDashboard />} />
        <Route exact path="/allaccounts" element={<AllAccounts />} />
        <Route path="/user/:id" element={<IndividualUser />} />
        <Route exact path="/contactusresponses" element={<ContactUsResponses />} />
        <Route exact path="/scheduled" element={<Scheduled />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
      <Toaster />
    </main>
  );
};

export default App;
