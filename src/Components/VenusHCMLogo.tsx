import styled from "styled-components";

const VenusHCMLogoComponent = styled.img`
    width: 500px;
    color: white;
    margin: 20px 0;
`

export default function VenusHCMLogo(props: { width?: string }) {
    return (
        <VenusHCMLogoComponent src="/logo-white.svg" alt="Venus HCM" style={{ width: props.width ?? '500px' }}></VenusHCMLogoComponent>
    )
}