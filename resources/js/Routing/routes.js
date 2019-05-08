import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Search from "../pages/Search";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import NationalMuseum from "../pages/NationalMuseum";
import VRMuseum from "../pages/VRMuseum";
import ContactUs from "../pages/ContactUs";
import Showcase from "../pages/Showcase";
import Home from "../pages/Home";

// NOTE : paths are defined form backend, you will need to make sure the keys are correct

const routes = {
    'reset-password': {
        exact: true,
        component: ResetPassword,
    },
    'forgot-password': {
        exact: true,
        component: ForgotPassword,
    },
    search: {
        exact: true,
        component: Search,
    },
    signup: {
        exact: true,
        component: Signup,
    },
    login: {
        exact: true,
        component: Login,
    },
    'privacy-policy': {
        exact: true,
        component: PrivacyPolicy,
    },
    'terms-of-service': {
        exact: true,
        component: TermsOfService,
    },
    'national-museum.single': {
        exact: true,
        component: NationalMuseum,
    },
    'national-museum': {
        exact: true,
        component: NationalMuseum,
    },
    vrmuseum: {
        exact: true,
        component: VRMuseum,
    },
    'contact-us': {
        exact: true,
        component: ContactUs,
    },
    showcase: {
        exact: true,
        component: Showcase,
    },
    home: {
        exact: true,
        component: Home,
    },
};


export default routes;
