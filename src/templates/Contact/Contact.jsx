import React, { lazy, Suspense } from 'react';
import MediaQuery from 'react-responsive';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TemplateSubtitle from 'components/TemplateSubtitle/TemplateSubtitle';
import Circle from 'assets/svg/circle.inline.svg';
import Arrow from 'assets/svg/arrow.inline.svg';
import ContactForm from 'components/ContactForm/ContactForm';
import CheckRender from 'components/CheckRender/CheckRender';
import Socials from 'components/Socials/Socials';
import {
    Wrapper,
    InnerWrapper,
    InfoWrapper,
    AnimationWrapper,
} from './contact.styles';

const DrawSvgAnimation = lazy(() =>
    import('../../components/animations/DrawSvgAnimation')
);
const renderLoader = () => <div />;

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Content>
                <AnimationWrapper>
                    <CheckRender>
                        <Suspense fallback={renderLoader()}>
                            <MediaQuery minDeviceWidth={1024}>
                                <DrawSvgAnimation
                                    position={{ right: -30, top: 13 }}
                                    animation={{ speed: 3, delay: 1.5 }}
                                >
                                    <Circle />
                                </DrawSvgAnimation>
                                <MediaQuery minDeviceWidth={1366}>
                                    <DrawSvgAnimation
                                        position={{ right: 350, top: -60 }}
                                        animation={{
                                            delay: 3.3,
                                            speed: 3,
                                        }}
                                    >
                                        <Arrow />
                                    </DrawSvgAnimation>
                                </MediaQuery>
                            </MediaQuery>
                        </Suspense>
                    </CheckRender>
                    <TemplateHeader inverted>Contact</TemplateHeader>
                </AnimationWrapper>
                <InnerWrapper>
                    <InfoWrapper>
                        <TemplateSubtitle mTop="1rem">
                            Feel free to send me an email or message on
                            LinkedIn. I am open to job offers and I will answer
                            as soon as possible.
                        </TemplateSubtitle>
                        <MediaQuery minDeviceWidth={786}>
                            <Socials />
                        </MediaQuery>
                    </InfoWrapper>
                    <ContactForm />
                </InnerWrapper>
                <MediaQuery maxDeviceWidth={786}>
                    <Socials />
                </MediaQuery>
            </Content>
        </Wrapper>
    );
};

export default Contact;
