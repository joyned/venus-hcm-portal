import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import styled from "styled-components";
import { root } from "./UI/Variables";
import i18next from "i18next";

const LanguageComponent = styled.div`
    display: flex;
    gap: 10px;
`
const LanguageContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`
const LanguageDropDown = styled.div<{ $opened: boolean }>`
    display: ${({ $opened }) => $opened ? 'block' : 'none'};
    position: absolute;
    background-color: ${root.primaryColor};
    min-width: 160px;
    z-index: 1;
    right: 0;
`
const LanguageDropDownContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    font-size: ${root.textSize};
`

const LanguageDropDownItem = styled.div`
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 25px;
    }
`

export default function Language() {
    const [opened, setOpened] = useState<boolean>(false);

    const onLanguageChange = (e: any, key: string) => {
        e.preventDefault();
        i18next.changeLanguage(key);
        setOpened(false)
    }

    return (
        <LanguageComponent>
            <LanguageContainer>
                <MdLanguage onClick={() => setOpened(!opened)}></MdLanguage>
                <LanguageDropDown $opened={opened}>
                    <LanguageDropDownContent>
                        <LanguageDropDownItem onClick={(e) => onLanguageChange(e, 'en')}>
                            <img src="/eua.svg" alt="EUA"></img>
                            English
                        </LanguageDropDownItem>
                        <LanguageDropDownItem onClick={(e) => onLanguageChange(e, 'pt')}>
                            <img src="/br.svg" alt="Brazil"></img>
                            Portuguese
                        </LanguageDropDownItem>
                    </LanguageDropDownContent>
                </LanguageDropDown>
            </LanguageContainer>
        </LanguageComponent>
    )
}