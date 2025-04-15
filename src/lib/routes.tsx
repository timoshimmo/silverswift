import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './route-links';
import Home from '../pages/home';
import SignUp from '../pages/signup';
import Login from '../pages/login';
import About from '../pages/about';
import How from '../pages/how';
import Faqs from '../pages/faqs';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTES.INDEX} element={<Home />} />
            <Route path={ROUTES.SIGNUP} element={<SignUp />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.HOW_IT_WORKS} element={<How />} />
            <Route path={ROUTES.FAQs} element={<Faqs />} />
        </Routes>
    )
}

export default RoutesComponent;