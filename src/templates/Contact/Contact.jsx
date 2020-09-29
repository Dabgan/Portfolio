import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import ContactForm from 'components/ContactForm/ContactForm';
import MediaQuery from 'react-responsive';
import { Wrapper, Subtitle, InnerWrapper, InfoWrapper } from './contact.styles';
import Socials from '../../components/Socials/Socials';

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Content>
                <TemplateHeader inverted>Contact</TemplateHeader>
                <InnerWrapper>
                    <InfoWrapper>
                        <Subtitle>
                            Feel free to send me an email or message on
                            LinkedIn. I am open to job offers and I will answer
                            as soon as possible.
                        </Subtitle>
                        <MediaQuery minDeviceWidth={1024}>
                            <Socials />
                        </MediaQuery>
                    </InfoWrapper>
                    <ContactForm />
                </InnerWrapper>
            </Content>
            <MediaQuery maxDeviceWidth={1024}>
                <Socials />
            </MediaQuery>
        </Wrapper>
    );
};

export default Contact;
