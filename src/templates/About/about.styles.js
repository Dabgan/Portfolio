import styled from 'styled-components';
import wave from 'assets/svg/wave.inline.svg';
import about from 'assets/svg/about.inline.svg';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    margin-top: -1rem;
    padding: 5rem 0;
    ${({ theme }) => theme.mq.lg} {
        /* padding: 5rem 0; */
    }
`;
export const InnerWrapper = styled.section`
    ${({ theme }) => theme.mq.lg} {
        display: flex;
    }
`;

export const Subtitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0 0 ${({ theme }) => theme.margin.m};
    letter-spacing: 0.05rem;
    text-align: center;
    font-weight: 300;
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.l};
        text-align: left;
        margin: 0 0;
    }
`;

export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0 ${({ theme }) => theme.padding.s};
    p {
        margin: 2rem 0;
    }
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: ${({ theme }) => theme.padding.l}
            ${({ theme }) => theme.padding.l} 0 0;
        flex: 1 0 50%;
        text-align: justify;
        text-justify: inter-word;
        letter-spacing: 0.05rem;
    }
`;

export const AboutSVG = styled(about)`
    display: none;
    ${({ theme }) => theme.mq.lg} {
        display: block;
        flex: 1 0 50%;
    }
`;
export const Wave = styled(wave)`
    width: 100%;
    transform: ${({ top }) => (top ? 'scale(-1)' : 'none')};
    path {
        fill: ${({ theme }) => theme.secondary};
    }
`;
