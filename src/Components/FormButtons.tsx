import { ReactElement } from "react"
import styled from "styled-components"

interface FormButtonsProps {
    align?: "start" | "center" | "end"
}

const FormButtonsComponent = styled.div<FormButtonsProps>`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: ${props => props.align || "start"};
`

export default function FormButtons(props: { children?: ReactElement | ReactElement[], align?: "start" | "center" | "end" }) {
    return (
        <FormButtonsComponent align={props.align}>
            {props.children}
        </FormButtonsComponent>
    )
}