import React, { useState } from 'react';
import {
    Container,
    Label,
    Title,
} from './styles';
import { Modal } from 'react-native';

export const ModalWarning = ({ title, msg }) => {
    const [isVisible, setVisible] = useState(false);

    return (
        <Container>
            <Modal
                visible={isVisible}
            >
                <Title>
                    {title}
                </Title>

                <Label>
                    {msg}
                </Label>
            </Modal>
        </Container>
    );
};