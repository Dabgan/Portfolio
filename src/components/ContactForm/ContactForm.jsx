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
    message: Yup.string().required('At least say "Hi"?'),
});

const ContactForm = () => {
    const [formValues, setFormValues] = useState();
    // const [emailFocused, setEmailFocused] = useState(false);
    // const [messageFocused, setMessageFocused] = useState(false);

    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values));
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
                    handleChange,
                    isSubmitting,
                }) => {
                    console.log(`touched`, touched);
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
                                    onChange={handleChange}
                                    $valid={touched.email && !errors.email}
                                    $error={touched.email && errors.email}
                                />
                                <Label
                                    htmlFor="email"
                                    touched={touched.email}
                                    focused={values.email}
                                >
                                    your email
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="message"
                                    component="textarea"
                                    onChange={handleChange}
                                    $valid={touched.message && !errors.message}
                                    $error={touched.message && errors.message}
                                    size={1}
                                />
                                <Label
                                    htmlFor="message"
                                    focused={values.message}
                                >
                                    message
                                </Label>
                            </FormGroup>
                            <FormGroup>
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
                                <Button
                                    marginTop="2.6rem"
                                    size="medium"
                                    submit
                                    disabled={isSubmitting}
                                >
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
