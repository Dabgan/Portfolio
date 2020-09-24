import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin-bottom: ${({ theme }) => theme.margin.m};
    ${({ theme }) => theme.mq.lg} {
        flex-flow: ${({ inverted }) => (inverted ? 'row-reverse' : 'row')};
        padding: ${({ theme }) => theme.padding.l} 0;
        margin: ${({ theme }) => theme.margin.l} 0
            ${({ theme }) => theme.margin.l};
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    box-shadow: 5px 5px 35px #9e9e9e;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    ${({ theme }) => theme.mq.lg} {
        margin: 0 ${({ inverted, theme }) => (inverted ? theme.margin.s : '0')}
            0 ${({ inverted, theme }) => (inverted ? '0' : theme.margin.s)};
    }
    ${({ theme }) => theme.mq.lg} {
        ::before {
            content: ' ';
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: ${({ inverted }) => (inverted ? '+35px' : '-35px')};
            top: -35px;
            background: ${({ theme }) => theme.lightGray};
            z-index: -1;
        }
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-flow: column;
    ${({ theme }) => theme.mq.lg} {
        flex: 0 0 50%;
        padding: 0
            ${({ inverted, theme }) => (inverted ? theme.padding.xl : '0')} 0
            ${({ inverted, theme }) => (inverted ? '0' : theme.padding.xl)};
        align-items: ${({ inverted }) =>
            inverted ? 'flex-start' : 'flex-end'};
    }
`;

export const ProjectTitle = styled.h4`
    color: ${({ theme }) => theme.tertiary};
    font-size: ${({ theme }) => theme.fontSize.ml};
    margin-top: ${({ theme }) => theme.margin.s};
    ${({ theme }) => theme.mq.lg} {
        text-align: ${({ inverted }) => (inverted ? 'left' : 'right')};
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    margin: ${({ theme }) => theme.margin.s} 0 ${({ theme }) => theme.margin.xs};
    ${({ theme }) => theme.mq.lg} {
        justify-content: flex-end;
        height: auto;
        margin: 0 0 0;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.tertiary};
    margin: ${({ theme }) => theme.margin.xs} 0;
    ${({ theme }) => theme.mq.lg} {
        margin: 0;
    }
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-align: justify;
    text-justify: inter-word;
    letter-spacing: 0.05rem;
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.s};
        margin-top: ${({ theme }) => theme.margin.xs};
    }
`;

export const TechnologiesList = styled.ul`
    margin-top: ${({ theme }) => theme.margin.xs};
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        margin-top: ${({ theme }) => theme.margin.s};
    }
`;

export const ProjectItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0.6rem 0;
    padding: 0 0;
    height: auto;
    list-style: none;

    ${({ theme }) => theme.mq.lg} {
        margin: 0 0;
        font-size: ${({ theme }) => theme.fontSize.s};
        width: 50%;
        height: 4rem;
    }
`;
export const ProjectMarker = styled.span`
    display: inline-block;
    background: ${({ theme }) => theme.tertiary};
    border-radius: 50%;
    flex: 0 0 auto;
    margin-right: 1rem;
    width: ${({ theme }) => theme.fontSize.xs};
    height: ${({ theme }) => theme.fontSize.xs};
    ${({ theme }) => theme.mq.lg} {
        width: ${({ theme }) => theme.fontSize.s};
        height: ${({ theme }) => theme.fontSize.s};
        margin-right: 2rem;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    ${({ theme }) => theme.mq.lg} {
        justify-content: space-between;
        height: auto;
        width: 300px;
        margin-top: ${({ theme }) => theme.margin.s};
    }
`;
