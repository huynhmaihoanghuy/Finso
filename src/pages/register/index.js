import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SAVE_USER_LOCAL_STORAGE } from '../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { ProfileForm } from '../../components/profile/form';

export const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = user => {
        dispatch({
            type: SAVE_USER_LOCAL_STORAGE,
            payload: user
        })

        history.push('/');
    }

    return (
        <Wrapper className="col-md-6 offset-md-3" style={{ marginTop: '30px' }}>
            <h1>REGISTER</h1>
            <br />

            <ProfileForm onSubmit={onSubmit} user={null} submitName="Register"/>
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
