import { Route, Routes } from 'react-router-dom';
import HomeTab from '../tabs/HomeTab';
import { HomeLayouts } from '../tabs/Home/HomelayoutConfig';
import ReportTab from '../tabs/Report/ReportTab';
import UserTab from '../tabs/User/UserTab';
import Container from './Container/Container';
import PageRenderer from './PageRenderer';
import { UserLayouts } from '../tabs/User/UserLayoutConfig';
import { ReportLayouts } from '../tabs/Report/ReportlayoutConfig';

const TabRoutes = () => {
    return (
        <Routes>
             <Route path="/" element={<Container />}> 
            <Route path="home" element={<PageRenderer layouts={HomeLayouts} />} />
            <Route path="user" element={<PageRenderer layouts={UserLayouts} />} />
            <Route path="report" element={<PageRenderer layouts={ReportLayouts} />} />
            </Route>
        </Routes>
    );
};

export default TabRoutes;
