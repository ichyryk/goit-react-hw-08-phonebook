import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  //   const [value, setValue] = React.useState(2);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="Navlink"
        activeClassName="Navlink--active"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to={routes.contacts}
          className="Navlink"
          activeClassName="Navlink--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
