import { useSelector } from 'react-redux';
import {authSelectors} from '../redux/auth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn && restricted ? <Navigate replace to={redirectTo} /> : children;
}