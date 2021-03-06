import styled from 'styled-components';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    margin-top: -1rem;
    padding: 2.5rem 0;
    ${({ theme }) => theme.mq.lg} {
        min-height: 40rem;
    }
`;
export const InnerWrapper = styled.section`
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        justify-content: center;
    }
`;
export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0 0;
    text-align: justify;
    text-justify: inter-word;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.fonts.color.secondary};
    p {
        margin: 2rem 0;
    }

    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: ${({ theme }) => theme.padding.l}
            ${({ theme }) => theme.padding.l} 0 0;
        flex: 0 0 100%;
        text-align: justify;
        text-justify: inter-word;
        letter-spacing: 0.05rem;
    }
`;
