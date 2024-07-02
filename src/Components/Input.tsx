import styled from "styled-components"
import { input, root } from "./UI/Variables"

const InputComponent = styled.div`
    width: 100%;
`

const InputField = styled.input`
    border: solid 1px ${input.borderColor};
    border-radius: 5px;
    padding: 10px 16px;
    margin: 10px 0;
    width: 100%;
    font-size: 16px;
    color: ${root.textColor};
`

export default function Input(props: { placeholder?: string, value?: string, type?: 'text' | 'password' | 'date' | 'number' | 'email' | 'textarea', onChange?: (value: string) => void }) {
    return (
        <InputComponent>
            <InputField type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(e) => { props.onChange && props.onChange(e.target.value) }}>
            </InputField>
        </InputComponent>
    )
}