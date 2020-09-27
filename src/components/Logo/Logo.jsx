import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const LogoWrapper = styled.div`
    display: block;
    width: 48px;
    height: 48px;
    ${({ theme }) => theme.mq.md} {
        width: 64px;
        height: 64px;
    }
    ${({ $small }) =>
        $small &&
        css`
            width: 42px;
            height: 42px;
        `}
`;

const Logo = ({ small }) => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(name: { eq: "Logo" }) {
                childImageSharp {
                    fluid(maxWidth: 64, pngQuality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <LogoWrapper as={Link} to="/" $small={small}>
            <Img fluid={data.logo.childImageSharp.fluid} alt="logo" />
        </LogoWrapper>
    );
};

Logo.propTypes = {
    small: propTypes.bool,
};
Logo.defaultProps = {
    small: false,
};

export default Logo;
