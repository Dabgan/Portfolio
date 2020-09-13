import React from 'react';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import propTypes from 'prop-types';
import Img from 'gatsby-image';
import {
    ProjectTitle,
    Wrapper,
    InfoWrapper,
    ProjectImgWrapper,
} from './projectExample.styles';

const ProjectExample = ({ projectData }) => {
    const codeText = '<Code />';

    const {
        title,
        description,
        technologies,
        coverImg,
        demoLink,
        codeLink,
    } = projectData;

    return (
        <Content>
            <Wrapper>
                <ProjectImgWrapper>
                    <Img fluid={coverImg.childImageSharp.fluid} alt={title} />
                </ProjectImgWrapper>
                <InfoWrapper>
                    <ProjectTitle>{title}</ProjectTitle>

                    <h5>{description}</h5>
                    <ul>
                        {technologies.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Live</Button>
                    </a>
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>{codeText}</Button>
                    </a>
                </InfoWrapper>
            </Wrapper>
        </Content>
    );
};

ProjectExample.propTypes = {
    projectData: propTypes.shape({
        title: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        technologies: propTypes.arrayOf(propTypes.string),
        coverImg: propTypes.shape({
            childImageSharp: propTypes.shape({
                fluid: propTypes.shape({
                    aspectRatio: propTypes.number,
                    sizes: propTypes.string,
                    src: propTypes.string,
                    srcSet: propTypes.string,
                }),
            }),
        }),
        demoLink: propTypes.string,
        codeLink: propTypes.string,
    }).isRequired,
};

export default ProjectExample;
