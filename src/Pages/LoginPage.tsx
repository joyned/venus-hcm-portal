import styled from "styled-components"
import Button from "../Components/Button"
import FormButtons from "../Components/FormButtons"
import FormItem from "../Components/FormItem"
import Input from "../Components/Input"
import { root } from "../Components/UI/Variables"
import VenusHCMLogo from "../Components/VenusHCMLogo"
import { useNavigate } from "react-router-dom"

const LoginPageContainer = styled.div`
    height: 100vh;
    background-color: ${root.secondaryColor};
`

const LoginPageContent = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/login-page-image.jpg");

    @media (max-width: 1154px) {
        background: none;
        justify-content: center;
    }
`

const LoginPageForm = styled.form`
    background-color: ${root.secondaryColor};
    padding: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 75px;
        margin-bottom: 30px;
    }

    @media (max-width: 610px) {
        padding: 50px;
    }
`

const ForgotPassword = styled.a`
    color: white;
    margin-top: 15px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #f0f0f0;
    }
`


export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <LoginPageContainer>
            <LoginPageContent>
                <LoginPageForm>
                    <VenusHCMLogo></VenusHCMLogo>
                    <FormItem>
                        <label style={{ color: "white" }}>Usuário</label>
                        <Input type="text" style={{ color: "white" }} transparent></Input>
                    </FormItem>
                    <FormItem>
                        <label style={{ color: "white" }}>Senha</label>
                        <Input type="password" style={{ color: "white" }} transparent></Input>
                    </FormItem>
                    <FormButtons style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type="submit" label="Entrar" size="large" onClick={() => navigate('/home')}></Button>
                        <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
                    </FormButtons>
                </LoginPageForm>
            </LoginPageContent>
        </LoginPageContainer>
    )
}