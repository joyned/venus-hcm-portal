import styled from "styled-components"
import { input, root } from "./UI/Variables"

const TextAreaComponent = styled.textarea`
    border: solid 1px ${input.borderColor};
    border-radius: 5px;
    padding: 10px 16px;
    margin: 10px 0;
    width: 100%;
    font-size: 16px;
    color: ${root.textColor};
    resize: vertical;
`

export default function TextArea(props: { value?: any, onChange?: (value: string) => void, placeholder?: string }) {
    return (
        <TextAreaComponent
            value={props.value}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            placeholder={props.placeholder}
            className="w-full p-2 border border-gray-300 rounded-md"
        />
    )
}