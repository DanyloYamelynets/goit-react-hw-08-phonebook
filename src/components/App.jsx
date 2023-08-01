import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshPageThunk } from 'redux/auth/userOperations';
import { useEffect } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { selectToken, selectUserData } from 'redux/auth/userSelectors';
import { Container, Nav, SideNav, SlyledLink } from './AppStyled';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshPageThunk());
  }, [dispatch, token]);

  return (
    <div>
      <SideNav>
        <Nav>
          <SlyledLink to="/">Home</SlyledLink>
          {userData ? (
            <>
              <SlyledLink to="/contacts">Contacts</SlyledLink>
            </>
          ) : (
            <>
              <SlyledLink to="/login">Log In</SlyledLink>
              <SlyledLink to="/register">Register</SlyledLink>
            </>
          )}
        </Nav>
        <Container>{userData ? <UserMenu /> : null}</Container>
      </SideNav>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
