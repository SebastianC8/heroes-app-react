import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    let pathname = rest.location.pathname;
    pathname += (rest.location.search.length > 0) ? rest.location.search : '';

    localStorage.setItem('lastPath', pathname);

    return (
        <Route { ...rest }
            component = {(props) => (
                (isAuthenticated)
                    ? (<Component { ...props } />)
                    : (<Redirect to="/login"/>)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}