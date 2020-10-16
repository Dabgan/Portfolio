import styled from 'styled-components';

const Content = styled.div`
    padding: 0 2vh;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    position: relative;
    z-index: 1;
    ${({ theme }) => theme.mq.lg} {
        padding: 0 5rem;
    }
    ${({ theme }) => theme.mq.xl} {
        padding: 0 0;
    }
`;

export default Content;
