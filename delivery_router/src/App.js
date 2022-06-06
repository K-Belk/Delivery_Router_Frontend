import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LocationDetailPage from './pages/LocationDetailPage';
import LocationsListPage from './pages/LocationListPage';
import RoutingPage from './pages/RoutingPage';
import RoutingContextProvider from './contexts/RoutingContext';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ProtectedRoute from './components/Protected/Protected';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {  

  return (
    <div className="App">
    <Router>
        <div>
        <NavigationBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/locations' element={
              <ProtectedRoute>
                <LocationsListPage />
              </ProtectedRoute>
            } />
            <Route path='/locations/:locationID' element={
              <ProtectedRoute>
                <LocationDetailPage />
              </ProtectedRoute>
            } />
            <Route path='/routing' element={
              <ProtectedRoute>
                <RoutingContextProvider>
                  <RoutingPage />
                </RoutingContextProvider>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
