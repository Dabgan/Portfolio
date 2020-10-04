import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';

import {
    FormWrapper,
    Label,
    Input,
    StyledInlineErrorMessage,
    FormGroup,
    StyledForm,
} from './contactForm.styles';

const initialValues = { email: '', message: '' };

const contactSchema = Yup.object().shape({
    email: Yup.string()
        .email('The email is incorrect')
        .required('Please enter your email'),
    message: Yup.string().required('At least say hi? :('),
});

const ContactForm = () => {
    const [formValues, setFormValues] = useState();
    const [emailFocused, setEmailFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    const handleInputFocus = e => {
        return e.target.name === 'email'
            ? setEmailFocused(prev => !prev)
            : setMessageFocused(prev => !prev);
    };

    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values, actions) => {
                    setFormValues(values);
                    const timeOut = setTimeout(() => {
                        actions.setSubmitting(false);
                        clearTimeout(timeOut);
                    }, 1500);
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
                                <Button marginTop="1rem" size="medium" submit>
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </Button>
                            </FormGroup>
                        </StyledForm>
                    );
                }}
            </Formik>
        </FormWrapper>
    );
};

export default ContactForm;
