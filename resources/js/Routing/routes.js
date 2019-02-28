import NationalMuseum from "../pages/NationalMuseum/index";
import VRMuseum from "../pages/VRMuseum/index";
import ContactUs from "../pages/ContactUs/index";
import Home from "../pages/Home/index";

// NOTE : paths are defined form backend, you will need to make sure the keys are correct

const routes = {
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
