import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  routes,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component {...props} routes={routes} />
        </DefaultLayout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  routes: PropTypes.arrayOf(PropTypes.object),
};

RouteWrapper.defaultProps = {
  routes: null,
};
