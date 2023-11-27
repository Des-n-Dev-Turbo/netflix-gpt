/* eslint-disable react/prop-types */
import { userAuthSelector } from '@store/userSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoutes = ({ children }) => {
  const user = useSelector(userAuthSelector);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthenticatedRoutes;
