import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { heightPercentageToDP } from '../../config/Responsive';

export const HeaderBottomSvg = ({ top }) => {
    return (
        <Svg 
            viewBox="0 0 1440 320"
            style={{
                position: 'absolute',
                top: heightPercentageToDP(top),
            }}
        >
            <Path 
                fill="#1e90ff" 
                fill-opacity="1" 
                d="M0,256L48,229.3C96,203,192,149,288,117.3C384,85,480,75,576,85.3C672,96,768,128,864,160C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
        </Svg>
    );
};