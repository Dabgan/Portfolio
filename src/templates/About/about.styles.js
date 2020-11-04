import styled from 'styled-components';
import wave from 'assets/svg/wave.inline.svg';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    margin-top: -1rem;
    padding: 2.5rem 0;

    ${({ theme }) => theme.mq.md} {
        /* padding: 2.5rem 0; */
    }
`;
export const InnerWrapper = styled.section`
    ${({ theme }) => theme.mq.lg} {
        display: flex;
    }
`;

export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0 0;
    text-align: justify;
    text-justify: inter-word;
    p {
        margin: 2rem 0;
        visibility: hidden;
    }

    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: ${({ theme }) => theme.padding.l}
            ${({ theme }) => theme.padding.l} 0 0;
        flex: 0 0 50%;
        text-align: justify;
        text-justify: inter-word;
        letter-spacing: 0.05rem;
    }
`;

export const Wave = styled(wave)`
    width: 100%;
    transform: ${({ top }) => (top ? 'scale(-1)' : 'none')};
    path {
        fill: ${({ theme }) => theme.primary};
    }
    ${({ theme }) => theme.mq.md} {
        margin-top: ${({ top }) => (top ? '5rem' : '0')};
    }
`;
