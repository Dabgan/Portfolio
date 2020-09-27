import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import ContactForm from 'components/ContactForm/ContactForm';
import Logo from 'components/Logo/Logo';
import { Wrapper, Subtitle } from './contact.styles';

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
                <div>
                    <Logo />
                    <span>Ld</span>
                    <span>E@</span>
                    <span>GH</span>
                </div>
            </Content>
        </Wrapper>
    );
};

export default Contact;
