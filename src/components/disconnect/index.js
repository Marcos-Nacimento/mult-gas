import React from 'react';
import {
    Container,
} from './styles';

import Lottie from 'lottie-react-native';
import disconnectAnimation from '../../animations/disconnet.json';

export const Disconnect = () => {
    return (
        <Container>
            <Lottie 
                source={disconnectAnimation}
                loop
                autoPlay
            />

            <Title>Você está desconectado</Title>            
        </Container>
    );
};
