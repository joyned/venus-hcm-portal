import styled from "styled-components"

const LabelComponent = styled.label`
    display: flex;
    span {
        color: red;
        margin-left: 4px;
    }
`

export default function Label(props: { children: any, required?: boolean }) {
    return (
        <LabelComponent>
            {props.children}
            {props.required && <span>*</span>}
        </LabelComponent>
    )
}