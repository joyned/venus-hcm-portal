import { FaArrowAltCircleUp } from "react-icons/fa"
import styled from "styled-components"
import { root } from "./UI/Variables"

const GoToTopComponet = styled.div`
    position: fixed;
    bottom: 0;
    bottom: 20px;
    right: 20px;
    z-index: 99;

    svg {
        font-size: 3rem;
        cursor: pointer;
        color: ${root.primaryColor};
    }
`

export default function GoToTop() {
    const hasScroll = document.body.clientHeight > window.innerHeight;
    return (
        <GoToTopComponet>
            {hasScroll && <FaArrowAltCircleUp onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></FaArrowAltCircleUp>}
        </GoToTopComponet>
    )
}