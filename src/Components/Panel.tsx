import { ReactElement } from "react"
import styled from "styled-components"
import { panel } from "./UI/Variables"

const PanelComponent = styled.div`
    background-color: ${panel.backgroundColor};
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`

const PanelTitle = styled.div`
    padding: 10px;
    color: ${panel.titleColor};
`

const PanelContent = styled.div`
    padding: 10px;
`

export default function Panel(props: { title?: string, children?: ReactElement | ReactElement[] }) {
    return (
        <PanelComponent>
            <PanelTitle>
                <h2>{props.title}</h2>
            </PanelTitle>
            <PanelContent>
                {props.children}
            </PanelContent>
        </PanelComponent>
    )
}