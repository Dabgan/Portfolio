import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    border: 2px solid #f11b1b;
`;

export const ProjectImgWrapper = styled.div`
    width: 50%;
`;

export const InfoWrapper = styled.div`
    border: 2px solid #069cc8;
`;

export const ProjectTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSize.l};
`;
