import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';

export default function NonExist() {
    return (
        <>
        <Jumbotron />
        <Container>
            <p>DO NOT EXIST 404</p>
        </Container>
        </>
    )
}