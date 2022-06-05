import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/AuthHooks';

const ProtectedRoute = ({ children }) => {
  const { authToken } = useAuth();

  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute