import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {showRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
