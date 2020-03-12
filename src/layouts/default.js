import React from 'react';
import { Header } from '../components/header/index';
import { Container } from 'react-bootstrap';

export const LayoutDefault = props => {
    return (
        <>
            <Header></Header>
            <Container>
                { props.children }
            </Container>
        </>
    )
}