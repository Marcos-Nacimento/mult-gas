import styled from 'styled-components/native';
import { heightPercentageToDP } from '../../config/Responsive';

export const Container = styled.View `
    height: ${heightPercentageToDP('10%')}px;

    background-color: #1e90ff;
    justify-content: center;
    padding-left: ${heightPercentageToDP('3%')}px;
    padding-top: ${heightPercentageToDP('3%')}px;
`;

export const Title = styled.Text `
    font-family: 'Poppins_500Medium';
    color: #FFFFFF;

    font-size: ${heightPercentageToDP('2.5%')}px;
`;