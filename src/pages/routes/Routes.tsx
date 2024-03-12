import HomePage from 'pages/HomePage.tsx';
import AnalystShop from "pages/AnalystShop.tsx";
import Contacts from "pages/Contacts.tsx";
import AboutUs from "pages/AboutUs.tsx";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage/>}/>
            <Route path="analyst-shop" element={<AnalystShop/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="about-us" element={<AboutUs/>}/>
        </>
    )
);
