import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AppBar from "./components/AppBar";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));


export default function App() {
 const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {!isFetchingCurrent && (
        <>
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/register" element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              } />
              <Route path="/login" element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              } />
              <Route path="/" element={<PrivateRoute redirectTo="/login" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
} 