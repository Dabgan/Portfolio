import styled from 'styled-components';

const Hamburger = styled.div`
    background-color: #111;
    width: 30px;
    height: 4px;
    transition: all 0.3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

    ::before,
    ::after {
        width: 30px;
        height: 4px;
        background-color: #111;
        content: '';
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
            props.open
                ? 'rotate(-90deg) translate(-10px, 0px)'
                : 'rotate(0deg)'};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? '0' : '1')};
        transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
        top: 10px;
    }
`;

export default Hamburger;
