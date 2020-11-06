import React from 'react';
import styled from 'styled-components';
import wave from 'assets/svg/wave.inline.svg';
import propTypes from 'prop-types';

const StyledWave = styled(wave)`
    width: 100%;
    transform: ${({ $top }) => ($top ? 'scale(-1)' : 'none')};
    path {
        fill: ${({ theme }) => theme.primary};
    }
    ${({ theme }) => theme.mq.md} {
        margin-top: ${({ $top }) => ($top ? '5rem' : '0')};
    }
`;

const Wave = ({ top }) => {
    return <StyledWave $top={top} />;
};

Wave.propTypes = {
    top: propTypes.bool,
};
Wave.defaultProps = {
    top: false,
};

export default Wave;
