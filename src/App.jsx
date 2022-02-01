import { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';

import { Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import routes from './routes';
import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const App = ({ getCurrentUser }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />

          <PrivateRoute
            path={routes.contacts}
            component={ContactsPage}
            redirectTo={routes.login}
          />

          <PublicRoute
            path={routes.register}
            component={RegisterPage}
            restricted
            redirectTo={routes.contacts}
          />

          <PublicRoute
            path={routes.login}
            component={LoginPage}
            restricted
            redirectTo={routes.contacts}
          />

          <PublicRoute component={PageNotFound} />
        </Switch>
      </Suspense>

      <AppFooter />

      <ToastContainer autoClose={3000} />
    </Container>
  );
};

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
