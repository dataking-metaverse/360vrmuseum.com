import Login from "../pages/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import NationalMuseum from "../pages/NationalMuseum";
import VRMuseum from "../pages/VRMuseum";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";

// NOTE : paths are defined form backend, you will need to make sure the keys are correct

const routes = {
    login: {
        exact: true,
        component: Login,
    },
    'privacy-policy': {
        exact: true,
        component: PrivacyPolicy,
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
    home: {
        exact: true,
        component: Home,
    },
};


export default routes;
