import React from 'react';
import { Header } from '../components/header';
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