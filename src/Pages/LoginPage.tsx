import styled from "styled-components"
import FormItem from "../Components/FormItem"
import FormButtons from "../Components/FormButtons"
import Button from "../Components/Button"
import { root } from "../Components/UI/Variables"
import Input from "../Components/Input"

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${root.secondaryColor};
`

const LoginPageContent = styled.div`
    background-color: ${root.primaryColor};
    color: 'white';
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    max-width: 100%;
    margin: 0 20px;
    box-sizing: border-box;
`


export default function LoginPage() {
    return (
        <LoginPageContainer>
            <LoginPageContent>
                <form>
                    <FormItem>
                        <label style={{ color: "white" }}>Usuário</label>
                        <Input type="text" style={{ color: "white" }} transparent></Input>
                    </FormItem>
                    <FormItem>
                        <label style={{ color: "white" }}>Senha</label>
                        <Input type="password" style={{ color: "white" }} transparent></Input>
                    </FormItem>
                    <FormButtons>
                        <Button label="Entrar"></Button>
                    </FormButtons>
                </form>
            </LoginPageContent>
        </LoginPageContainer>
    )
}