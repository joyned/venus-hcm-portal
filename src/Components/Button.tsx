import styled from "styled-components";
import { root } from "./UI/Variables";

interface ButtonComponentProps {
    $transparent?: boolean;
    $size?: 'normal' | 'large' | 'x-large';
}

const ButtonComponent = styled.div<ButtonComponentProps>`
    background-color: ${props => props.$transparent ? "transparent" : root.primaryColor};
    border: 1px solid ${root.primaryColor};
    cursor: pointer;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`

const ButtonAction = styled.button<ButtonComponentProps>`
    border: none;
    background-color: transparent;
    color: ${props => props.$transparent ? root.textColor : "white"};
    font-size: ${props => props.$size ? props.$size : root.textSize};
    cursor: pointer;
`

export default function Button(props: {
    label?: string,
    type?: 'submit' | 'reset' | 'button',
    transparent?: boolean,
    size?: 'normal' | 'large' | 'x-large',
    onClick?: () => void
}) {

    return (
        <ButtonAction type={props.type ?? 'button'}
            $transparent={props.transparent ? true : undefined}
            $size={props.size}
            onClick={() => props.onClick && props.onClick()}>
            <ButtonComponent $transparent={props.transparent ? true : undefined}>
                {props.label}
            </ButtonComponent>
        </ButtonAction>
    )
}