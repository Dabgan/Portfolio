import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import ContactForm from 'components/ContactForm/ContactForm';
import { Wrapper, Subtitle } from './contact.styles';
import Socials from '../../components/Socials/Socials';

const Contact = () => {
    return (
        <Wrapper>
            <Content>
                <TemplateHeader>Contact</TemplateHeader>
                <Subtitle>
                    Feel free to send me an email or message on LinkedIn. I am
                    open to job offers and I will answer as soon as possible.
                </Subtitle>
                <ContactForm />
            </Content>
            <Socials />
        </Wrapper>
    );
};

export default Contact;
