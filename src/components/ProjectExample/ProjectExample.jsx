import React, { useState } from 'react';
import Button from 'components/Button/Button';
import propTypes from 'prop-types';
import Img from 'gatsby-image';
import {
    ProjectTitle,
    Wrapper,
    InfoWrapper,
    ImageWrapper,
    Description,
    TechnologiesList,
    InnerWrapper,
    ButtonsWrapper,
    ProjectItem,
    ProjectMarker,
    Line,
} from './projectExample.styles';

const ProjectExample = ({ projectData }) => {
    // const [readMore, setReadMore] = useState(false);

    const codeText = '<Code />';
    const {
        title,
        inverted,
        introduction,
        description,
        technologies,
        coverImg,
        demoLink,
        codeLink,
    } = projectData;

    // const toggleReadMore = () => {
    //     return setReadMore(prevState => !prevState);
    // };

    return (
        <Wrapper inverted={inverted ? 1 : 0}>
            <ImageWrapper inverted={inverted ? 1 : 0}>
                <Img fluid={coverImg.childImageSharp.fluid} alt={title} />
            </ImageWrapper>
            <InfoWrapper inverted={inverted ? 1 : 0}>
                {/* <InnerWrapper> */}
                <ProjectTitle inverted={inverted ? 1 : 0}>{title}</ProjectTitle>
                {/* <Button onClick={toggleReadMore} size="small" secondary>
                        Read more
                    </Button> */}
                {/* </InnerWrapper> */}
                <Line />
                <Description>{description}</Description>
                <TechnologiesList>
                    {technologies.map(item => (
                        <ProjectItem key={item}>
                            <ProjectMarker />
                            {item}
                        </ProjectItem>
                    ))}
                </TechnologiesList>

                <ButtonsWrapper>
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="medium">Live</Button>
                    </a>
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="medium" secondary>
                            {codeText}
                        </Button>
                    </a>
                </ButtonsWrapper>
                {/* <Description>{introduction}</Description> */}
            </InfoWrapper>
        </Wrapper>
    );
};

ProjectExample.propTypes = {
    projectData: propTypes.shape({
        title: propTypes.string.isRequired,
        introduction: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        technologies: propTypes.arrayOf(propTypes.string),
        inverted: propTypes.bool.isRequired,
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
