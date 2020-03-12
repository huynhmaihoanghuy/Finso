import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../../store/actions/user';

export const UserHeader = () => {
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();

    if (!user || !user.username) {
        return (
            <>
                <RegisterLink to="/register" className="nav-link">Register</RegisterLink>
            </>
        )
    }

    const gotoProfile = () => {
        history.push('/profile');
    }

    const logout = () => {
        dispatch({
            type: USER_LOGOUT
        })

        history.push('/');
    }

    return (
        <>
            <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={gotoProfile}>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

const RegisterLink = styled(Link) `
    cursor: pointer;
    color: #007bff;
`;
