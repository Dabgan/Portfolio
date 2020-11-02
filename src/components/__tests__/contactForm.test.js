import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { fireEvent, render, waitFor } from '../../../jest-configs/test-utils';

describe('Contact form', () => {
    let contactForm;
    let emailField;
    let messageField;
    let sendBtn;

    beforeEach(() => {
        contactForm = render(<ContactForm />);
        emailField = contactForm.getByText(/your email/i).previousSibling;
        messageField = contactForm.getByText(/message/i).previousSibling;
        sendBtn = contactForm.getByText(/send/i);
    });

    it('display required errors for email and password when empty', async () => {
        fireEvent.change(emailField, { target: { value: '' } });
        fireEvent.change(messageField, { target: { value: '' } });
        fireEvent.submit(sendBtn);

        await waitFor(() => {
            expect(
                contactForm.getByText(/Please enter your email/i)
            ).toBeTruthy();
            expect(contactForm.getByText(/At least say hi/i)).toBeTruthy();
        });
    });

    it('display required error when email is incorrect', async () => {
        fireEvent.change(emailField, { target: { value: 'incorrectemail' } });
        fireEvent.submit(sendBtn);

        await waitFor(() => {
            expect(
                contactForm.getByText(/The email is incorrect/i)
            ).toBeTruthy();
        });
    });

    it('display "sending" when fields are correct and send button is clicked', async () => {
        fireEvent.change(emailField, {
            target: { value: 'correctemail@wp.pl' },
        });
        fireEvent.change(messageField, { target: { value: 'testing123' } });
        fireEvent.submit(sendBtn);

        await waitFor(() => {
            expect(contactForm.getByText(/sending.../i)).toBeTruthy();
        });
    });
});
