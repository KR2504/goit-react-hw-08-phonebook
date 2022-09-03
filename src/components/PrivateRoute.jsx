import { useSelector } from 'react-redux';
import {authSelectors} from '../redux/auth';
import { Navigate } from 'react-router-dom';
import { lazy } from "react";

const ContactsPage = lazy(() => import("../pages/ContactsPage"));

export default function PrivateRoute({redirectTo}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <ContactsPage/> : <Navigate to={redirectTo} />;
}