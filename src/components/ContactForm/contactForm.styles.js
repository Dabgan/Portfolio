import styled, { css } from 'styled-components';
import { Field, Form } from 'formik';
import Button from '../Button/Button';

export const FormWrapper = styled.div`
    background: ${({ theme }) => theme.white};
    padding: 1.5rem 1.5rem 0;
    margin: 0 3rem 0 1rem;
    position: relative;
    border: 2px solid ${({ theme }) => theme.tertiary};
    ::before {
        content: '';
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.gray};
        position: absolute;
        z-index: -1;
        left: 2rem;
        top: -2rem;
    }
    ${({ theme }) => theme.mq.lg} {
        max-width: 50%;
        flex: 1;
        padding: 2.5rem 1.5rem 0;
        margin: 0 5rem 0 3rem;
        max-height: 51rem;
    }
    ${({ theme }) => theme.mq.md} {
        margin: 0 0;
        width: calc(100% - 2rem);
    }
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    padding: 1rem 0 0.5rem;
    z-index: 1;
    margin-bottom: ${({ mb }) => mb};
    ${({ theme }) => theme.mq.lg} {
        margin: 0 2rem;
    }
`;

export const Label = styled.label`
    display: block;
    position: absolute;
    align-self: flex-start;
    color: ${({ theme }) => theme.secondary};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 700;
    pointer-events: none;
    transform: translate(15px, 22px) scale(1);
    transition: all 0.3s ease-in-out;

    ${({ focused }) =>
        focused &&
        css`
            transform: translate(0px, 4px) scale(0.7);
            background: ${({ theme }) => theme.fourth};
            color: ${({ theme }) => theme.tertiary};
            ${({ theme }) => theme.mq.lg} {
                transform: translate(-16px, 0px) scale(0.6);
            }
        `}

    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding-left: 0.7rem;
    }
`;

export const Input = styled(Field)`
    background-color: ${({ theme }) => theme.fourth};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    width: 100%;
    resize: none;
    padding: 2.5rem 1.25rem 1rem;
    border: 2px solid ${({ theme }) => theme.gray};
    outline: none;
    transition: border 0.3s ease-in-out;
    font-family: ${({ theme }) => theme.fonts.family.main};

    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding-left: 2rem;
    }

    ${({ size }) =>
        size &&
        css`
            height: 15rem;
            ${({ theme }) => theme.mq.lg} {
                height: 25rem;
            }
        `}

    ${({ $valid }) =>
        $valid &&
        css`
            border: 2px solid ${({ theme }) => theme.valid};
        `}

    ${({ $error }) =>
        $error &&
        css`
            border: 2px solid ${({ theme }) => theme.error};
        `}

    &:focus,
    &:active {
        box-shadow: #e5e5e5 0px 0px 5px 2px;
        border: 2px solid ${({ theme }) => theme.tertiary};
    }
`;

export const ErrorsContainer = styled.div`
    width: 100%;
    text-align: center;
    min-height: 30px;
    ${({ theme }) => theme.mq.md} {
        min-height: 36px;
    }
`;
export const StyledInlineErrorMessage = styled.div`
    color: ${({ theme }) => theme.error};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-style: italic;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;
export const SubmitButton = styled(Button)`
    background: ${({ disabled, theme }) =>
        disabled ? theme.white : theme.gray100};
`;
