import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import {
    FormWrapper,
    Label,
    Input,
    StyledInlineErrorMessage,
    FormGroup,
    StyledForm,
    SubmitButton,
} from './contactForm.styles';

const initialValues = { email: '', message: '' };

const contactSchema = Yup.object().shape({
    email: Yup.string()
        .email('The email is incorrect')
        .required('Please enter your email'),
    message: Yup.string().required('At least say hi? :('),
});

const ContactForm = () => {
    const [btnMsg, setBtnMsg] = useState('Send');
    const [btnColor, setBtnColor] = useState('color');
    const [emailFocused, setEmailFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    const handleInputFocus = e => {
        return e.target.name === 'email'
            ? setEmailFocused(prev => !prev)
            : setMessageFocused(prev => !prev);
    };

    const resetBtn = () => {
        setTimeout(() => {
            setBtnMsg('Send');
            setBtnColor('color');
        }, 3000);
    };

    const sendEmail = (values, resetForm) => {
        emailjs
            .send(
                'service_8d9ma9f',
                'portfolio_template',
                values,
                'user_Pf5BT1FzcarZmPltcqe3M'
            )
            .then(
                () => {
                    setBtnMsg('Email send, thanks!');
                    setBtnColor('send');
                    resetForm();
                    resetBtn();
                },
                () => {
                    setBtnMsg('Woops, something went wrong');
                    setBtnColor('error');
                    resetBtn();
                }
            );
    };

    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    const timeOut = setTimeout(() => {
                        setSubmitting(false);
                        clearTimeout(timeOut);
                    }, 1500);
                    sendEmail(values, resetForm);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleBlur,
                    isSubmitting,
                }) => {
                    return (
                        <StyledForm
                            name="contact"
                            method="post"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    $valid={touched.email && !errors.email}
                                    $error={touched.email && errors.email}
                                    onFocus={handleInputFocus}
                                    onBlur={e => {
                                        handleBlur(e);
                                        handleInputFocus(e);
                                    }}
                                />
                                <Label
                                    htmlFor="email"
                                    touched={touched.email}
                                    focused={values.email || emailFocused}
                                >
                                    your email
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="message"
                                    component="textarea"
                                    $valid={touched.message && !errors.message}
                                    $error={touched.message && errors.message}
                                    size={1}
                                    onFocus={handleInputFocus}
                                    onBlur={e => {
                                        handleBlur(e);
                                        handleInputFocus(e);
                                    }}
                                />
                                <Label
                                    htmlFor="message"
                                    focused={values.message || messageFocused}
                                >
                                    message
                                </Label>
                            </FormGroup>
                            <FormGroup mb="2rem">
                                <ErrorMessage name="email">
                                    {msg => (
                                        <StyledInlineErrorMessage>
                                            {msg}
                                        </StyledInlineErrorMessage>
                                    )}
                                </ErrorMessage>
                                {errors.message && touched.message && (
                                    <StyledInlineErrorMessage $message>
                                        {errors.message}
                                    </StyledInlineErrorMessage>
                                )}
                                <SubmitButton
                                    marginTop="1rem"
                                    size="medium"
                                    submit={btnColor}
                                    disabled={
                                        isSubmitting || btnColor !== 'color'
                                    }
                                >
                                    {isSubmitting ? 'Sending...' : btnMsg}
                                </SubmitButton>
                            </FormGroup>
                        </StyledForm>
                    );
                }}
            </Formik>
        </FormWrapper>
    );
};

export default ContactForm;
