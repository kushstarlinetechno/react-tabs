import { HomeLayouts } from '../tabs/Home/HomelayoutConfig';
import { ReportLayouts } from '../tabs/Report/ReportlayoutConfig';
import { UserLayouts } from '../tabs/User/UserLayoutConfig';
import PageRenderer from './PageRenderer';

const tabLabels = {
  home: 'Home',
  user: 'User',
  report: 'Report',
};
const UserPage = () => <PageRenderer layouts={UserLayouts} />;
const ReportPage = () => <PageRenderer layouts={ReportLayouts} />;
const HomePage = () => <PageRenderer layouts={HomeLayouts} />;
const tabComponents = {
  home: HomePage,
  user: UserPage,
  report: ReportPage,
};

const TabPanel = ({ openTabs, activeTab, setActiveTab, closeTab }) => (
  <div style={{flex: 1, display: 'flex', flexDirection: 'column', height: '100%'}}>
    <div style={{display: 'flex', borderBottom: '1px solid #ccc', background: '#fafafa'}}>
      {openTabs.map(tabKey => (
        <div key={tabKey} style={{display: 'flex', alignItems: 'center', marginRight: 8}}>
          <button
            style={{
              padding: '8px 16px',
              background: activeTab === tabKey ? '#fff' : '#eee',
              border: 'none',
              borderBottom: activeTab === tabKey ? '2px solid #007bff' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => setActiveTab(tabKey)}
          >
            {tabLabels[tabKey]}
          </button>
          <button
            style={{marginLeft: 4, color: 'red', background: 'none', border: 'none', cursor: 'pointer'}}
            onClick={() => closeTab(tabKey)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
    <div style={{flex: 1, padding: 16}}>
      {openTabs.length > 0 ? (
        openTabs.map(tabKey => {
          const TabComponent = tabComponents[tabKey];
          if (!TabComponent) return null;
          return (
            <div
              key={tabKey}
              style={{ display: activeTab === tabKey ? 'block' : 'none', height: '100%' }}
            >
              <TabComponent />
            </div>
          );
        })
      ) : (
        <div style={{color: '#888'}}>No tab open. Click a menu item to open a tab.</div>
      )}
    </div>
  </div>
);

export default TabPanel;
