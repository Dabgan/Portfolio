import styled, { css } from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled.div`
    /* border: 2px solid ${({ theme }) => theme.black}; */
    background: ${({ theme }) => theme.white};
    padding: 1.5rem 1.5rem 0;
    margin: 0 30px 0 10px;
    position: relative;
    min-height: 36rem;
    ::before {
        content: '';
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.gray};
        position: absolute;
        z-index: -1;
        left: 20px;
        top: -20px;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    padding: 1rem 0 0.5rem;
    z-index: 1;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
`;

export const Label = styled.label`
    display: block;
    position: absolute;
    align-self: flex-start;
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 700;
    pointer-events: none;
    transform: translate(15px, +13px) scale(1);
    transition: all 0.3s ease-in-out;

    ${({ focused }) =>
        focused &&
        css`
            transform: translate(15px, -7px) scale(0.9);
            background: ${({ theme }) => theme.fourth};
            padding: 0 10px;
        `}
`;

export const Input = styled(Field)`
    background-color: ${({ theme }) => theme.fourth};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    width: 100%;
    resize: none;
    padding: 1.5rem 1.25rem 1rem;
    border: none;

    ${({ size }) =>
        size &&
        css`
            height: 15rem;
        `}

    /* outline: none; */

    &:focus,
    &:active {
        box-shadow: #f5f5f5 0px 0px 2px 1px, #f5f5f5 0px 0px 0px 3px;
        border: 1px solid black;
    }

    ${({ $valid }) =>
        $valid &&
        css`
            border: 2px solid green;
            &:focus,
            &:active {
                border: 2px solid green;
            }
        `}

    ${({ $error }) =>
        $error &&
        css`
            border: 2px solid ${({ theme }) => theme.error};
            &:focus,
            &:active {
                border: 2px solid ${({ theme }) => theme.error};
            }
        `}
`;

export const StyledInlineErrorMessage = styled.div`
    color: ${({ theme }) => theme.error};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-weight: 700;
    position: absolute;
    top: 0;
    ${({ $message }) =>
        $message &&
        css`
            top: 1.5rem;
        `}
`;
