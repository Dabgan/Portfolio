import styled from 'styled-components';

const Content = styled.div`
    padding: 0 2vh;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    ${({ theme }) => theme.mq.md} {
        padding: 0 0;
    }
`;

export default Content;
