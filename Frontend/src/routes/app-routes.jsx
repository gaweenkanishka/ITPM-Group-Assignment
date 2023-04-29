import react from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {
    HealthHome,
    DonateAdvertisement, 
} from '../pages';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/healthHome" element={<HealthHome />} />
                    <Route exact path="/donateAds" element={<DonateAdvertisement />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRoutes;