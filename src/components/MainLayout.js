import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TabPanel from './TabPanel';

const MainLayout = () => {
  const [openTabs, setOpenTabs] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = tabKey => {
    if (!openTabs.includes(tabKey)) {
      setOpenTabs([...openTabs, tabKey]);
    }
    setActiveTab(tabKey);
    navigate('/' + tabKey);
  };
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab(null);
      return;
    }
      handleMenuClick(location.pathname.replace('/', ''));
  }, [location.pathname]);
  const closeTab = tabKey => {
    setOpenTabs(tabs => tabs.filter(t => t !== tabKey));
    // setTabStates(states => {
    //   const { [tabKey]: _, ...rest } = states;
    //   return rest;
    // });
    if (activeTab === tabKey) {
      const idx = openTabs.indexOf(tabKey);
      const nextTab = openTabs[idx - 1] || openTabs[idx + 1] || null;
      setActiveTab(nextTab);
      if (nextTab) navigate('/' + nextTab);
      else navigate('/');
    }
  };

  React.useEffect(() => {
    // On route change, set active tab if open
    const tabKey = location.pathname.replace('/', '');
    if (tabKey && openTabs.includes(tabKey)) {
      setActiveTab(tabKey);
    }
  }, [location.pathname, openTabs]);

  return (
        <TabPanel
          openTabs={openTabs}
          activeTab={activeTab}
          setActiveTab={tabKey => {
            setActiveTab(tabKey);
            navigate('/' + tabKey);
          }}
          closeTab={closeTab}
        />
  );
};

export default MainLayout;
