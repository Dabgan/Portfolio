import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    display: block;
    width: 64px;
    height: 64px;
`;

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(name: { eq: "Logo" }) {
                childImageSharp {
                    fluid(maxWidth: 50, pngQuality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <LogoWrapper as={Link} to="/">
            <Img fluid={data.logo.childImageSharp.fluid} alt="logo" />
        </LogoWrapper>
    );
};

export default Logo;
