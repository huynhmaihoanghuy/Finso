import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SAVE_USER_LOCAL_STORAGE } from '../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { ProfileForm } from '../../components/profile/form';
import isAuth from '../../hocs/isAuth';

const Profile = () => {    
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);

    const onSubmit = user => {
        dispatch({
            type: SAVE_USER_LOCAL_STORAGE,
            payload: user
        })

        history.push('/');
    }

    return (
        <Wrapper className="col-md-6 offset-md-3" style={{ marginTop: '30px' }}>
            <h1>PROFILE</h1>
            <br />

            <ProfileForm onSubmit={onSubmit} user={user} submitName="Update"/>

            <br />
        </Wrapper>
    )
}

const Wrapper = styled.section `
    .required {
        &:after {
            content: '*';
            color: red;
            margin-left: 3px;
        }
    }

    .error {
        color: red;
    }
`;

export default isAuth(Profile);
