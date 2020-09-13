import styled from 'styled-components';

const Content = styled.div`
    padding: 0 2vh;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    ${({ theme }) => theme.mq.md} {
        padding: 0 0;
        /* border: 2px solid #069cc8; */
    }
`;

export default Content;
