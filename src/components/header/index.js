import React from 'react';
import { Container, Title } from './styles';

export const Header = ({ ...props }) => {
    return (
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
};