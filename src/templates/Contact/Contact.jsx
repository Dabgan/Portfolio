import React, { lazy, Suspense } from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import ContactForm from 'components/ContactForm/ContactForm';
import MediaQuery from 'react-responsive';
import Socials from 'components/Socials/Socials';
import Circle from 'assets/svg/circle.inline.svg';
import Arrow from 'assets/svg/arrow.inline.svg';
import TemplateSubtitle from 'components/TemplateSubtitle/TemplateSubtitle';

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
    const isSR = typeof window === 'undefined';

    return (
        <Wrapper id="contact">
            <Content>
                <AnimationWrapper>
                    {!isSR && (
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
                                        animation={{ delay: 3.3, speed: 3.8 }}
                                    >
                                        <Arrow />
                                    </DrawSvgAnimation>
                                </MediaQuery>
                            </MediaQuery>
                        </Suspense>
                    )}
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
            </Content>
            <MediaQuery maxDeviceWidth={786}>
                <Socials />
            </MediaQuery>
        </Wrapper>
    );
};

export default Contact;
