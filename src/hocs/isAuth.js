import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const isAuth = Component => {
    return () => {
        const user = useSelector(state => state.user);
        const history = useHistory();

        if (!user || !user.username) {
            history.push('/register');
        }

        return <Component />
    }
}

export default isAuth;