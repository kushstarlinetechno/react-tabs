import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TabRoutes from './components/TabRoutes';
import { LayoutProvider } from './context/LayoutContext';
// ...existing code...



function App() {
  return (
    <LayoutProvider>
      <Router>
        <Routes>
            <Route
              path="*"
              element={<TabRoutes />}
            />
        </Routes>
      </Router>
    </LayoutProvider>
  );
}

export default App;
