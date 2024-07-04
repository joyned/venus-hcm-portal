import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';
import { root } from './UI/Variables';


export interface ToastMethods {
    show: (title: string, message: string) => void;
    showSuccess: (title: string, message: string) => void;
    showError: (title: string, message: string) => void;
    showWarn: (title: string, message: string) => void;
}

const ToastComponent = styled.div<{ $isVisible?: boolean }>`
    background-color: ${root.primaryColor};
    position: fixed;
    right: 0;
    top: 5em;
    width: 270px;
    padding: 15px;
    color: white !important;
    opacity: 0.8;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
    opacity: ${props => props.$isVisible ? '0.8' : '0'};
    transition:visibility 0.3s linear,opacity 0.3s linear;

    h1 {
        margin: 0;
    }

    p {
        color: white !important;
    }
`

const Toast: React.ForwardRefRenderFunction<ToastMethods, any> = (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [toastColor, setToastColor] = useState('');

    const timerRef = useRef<NodeJS.Timeout>();

    useImperativeHandle(ref, () => ({
        show: (title: string, message: string) => {
            setToastColor(root.primaryColor)
            setTitle(title);
            setMessage(message);
            setIsVisible(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 10000);
        },
        showSuccess: (title: string, message: string) => {
            setToastColor(root.success);
            setTitle(title);
            setMessage(message);
            setIsVisible(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 10000);
        },
        showError: (title: string, message: string) => {
            setToastColor(root.danger);
            setTitle(title);
            setMessage(message);
            setIsVisible(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 10000);
        },
        showWarn: (title: string, message: string) => {
            setToastColor(root.warning);
            setTitle(title);
            setMessage(message);
            setIsVisible(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 10000);
        }
    }));

    const closeOnClick = () => {
        setIsVisible(false);
    }

    return (
        <>
            <ToastComponent onClick={() => closeOnClick()}
                $isVisible={isVisible}
                style={{ backgroundColor: toastColor }}>
                <h3>{title}</h3>
                <p>{message}</p>
            </ToastComponent>
        </>
    );
};

export default forwardRef(Toast);
