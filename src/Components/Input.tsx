import styled from "styled-components"
import { input, root } from "./UI/Variables"

interface InputProps {
    transsparent?: boolean
}

const InputComponent = styled.div`
    width: 100%;
`

const InputField = styled.input<InputProps>`
    background-color: ${props => props.transsparent ? 'transparent' : ''};
    border: solid 1px ${input.borderColor};
    border-radius: 5px;
    padding: 10px 16px;
    margin: 10px 0;
    width: 100%;
    font-size: 16px;
    color: ${root.textColor};
`

export default function Input(props: {
    placeholder?: string,
    value?: string, type?: 'text' | 'password' | 'date' | 'number' | 'email' | 'textarea',
    onChange?: (value: string) => void,
    transparent?: boolean,
    style?: React.CSSProperties,
    disabled?: boolean
}) {
    return (
        <InputComponent>
            <InputField type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(e) => { props.onChange && props.onChange(e.target.value) }}
                transsparent={props.transparent}
                style={props.style}
                disabled={props.disabled}
            >
            </InputField>
        </InputComponent>
    )
}