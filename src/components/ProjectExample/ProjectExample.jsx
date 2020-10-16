import React, { useEffect, useRef } from 'react';
import Button from 'components/Button/Button';
import propTypes from 'prop-types';
import Img from 'gatsby-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ProjectTitle,
    Wrapper,
    InfoWrapper,
    ImageWrapper,
    Description,
    TechnologiesList,
    ButtonsWrapper,
    ProjectItem,
    ProjectMarker,
    Line,
} from './projectExample.styles';

const ProjectExample = ({ projectData }) => {
    const imgRef = useRef(null);
    const contentRef = useRef(null);
    const codeText = '<Code />';
    const {
        title,
        inverted,
        description,
        technologies,
        coverImg,
        demoLink,
        codeLink,
    } = projectData;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const img = imgRef.current;
        const content = contentRef.current;

        const tweenDirection = inverted ? '+' : '-';

        const startProjectAnimation = (elem, distance) => {
            gsap.fromTo(
                elem,
                {
                    x: `${tweenDirection}=${distance}`,
                    autoAlpha: 0,
                },
                {
                    duration: 1.2,
                    x: '=0',
                    autoAlpha: 1,
                    ease: 'power3.inOut',
                    scrollTrigger: {
                        trigger: elem,
                        start: '-10% 90%',
                    },
                }
            );
        };
        startProjectAnimation(img, '200');
        startProjectAnimation(content, '400');
    }, []);

    return (
        <Wrapper inverted={inverted ? 1 : 0}>
            <ImageWrapper ref={imgRef} inverted={inverted ? 1 : 0}>
                <Img fluid={coverImg.childImageSharp.fluid} alt={title} />
            </ImageWrapper>
            <InfoWrapper ref={contentRef} inverted={inverted ? 1 : 0}>
                <ProjectTitle inverted={inverted ? 1 : 0}>{title}</ProjectTitle>
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
