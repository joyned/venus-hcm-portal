import { ReactElement, useState } from "react";
import { FaCaretRight, FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Language from "../Components/Language";
import Loading, { useLoading } from "../Components/Loading";
import { leftSideMenu, root, topMenu } from "../Components/UI/Variables";
import VenusHCMLogo from "../Components/VenusHCMLogo";
import VenusHCMMenu from "../Model/VenusHCMMenu";
import { hcmMenu } from "../Service/MenuService";
import { useTranslation } from "react-i18next";

const RootLayout = styled.div`
    background-color: ${root.backgroundColor};
    min-height: 100vh;
`

const TopBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    max-height: 45px;
    background-color: ${topMenu.backgroundColor};
    color: ${topMenu.color};
    display: flex;
    z-index: 999;
`

const TopBarItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 13px 15px;
`

const TopBarItem = styled.div`
    display: flex;
    align-items: baseline;
    gap: 20px;

    svg {
        cursor: pointer;
    }
`

const LeftSideMenu = styled.div`
    background-color: ${leftSideMenu.backgroundColor};
    color: ${leftSideMenu.color};
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: fixed;
    min-height: 100vh;
    min-width: 240px;
    max-width: 240px;
    padding: 15px;
    opacity:0;
    transition:visibility 0.3s linear,opacity 0.3s linear;
    z-index: 1;
`

const LeftSideMenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: ${root.textSize};
    cursor: pointer;

    &:hover {
        font-weight: 500;
    }
`

const LeftSideMenuBackButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: smaller;
    cursor: pointer;
    border-bottom: 1px solid #999999;
    padding: 15px 0;
`

const MainContent = styled.div<{ $menuOpened: boolean }>`
    padding: 15px;
    margin-top: 45px;
    margin-left: ${({ $menuOpened }) => $menuOpened ? '240px' : '0'};

    @media (max-width: 750px) {
        margin-left: 0;
    }
`;

export default function Root(props: { children?: ReactElement }) {
    const { t } = useTranslation();
    const { loading } = useLoading();
    const navigate = useNavigate();
    const [latestMenu, setLatestMenu] = useState<VenusHCMMenu[] | undefined>(undefined);
    const [currentMenu, setCurrentMenu] = useState<VenusHCMMenu[]>(hcmMenu);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeMenu = (menu: VenusHCMMenu) => {
        if (menu.uri) {
            navigate(menu.uri);
            setMenuOpen(false);
            return;
        } else if (menu.subMenu.length === 0) {
            return;
        }
        setLatestMenu(currentMenu);
        setCurrentMenu(menu.subMenu);
    }

    const backMenu = () => {
        if (latestMenu) {
            setCurrentMenu(latestMenu);
            setLatestMenu(undefined);
        }
    }

    return (
        <RootLayout>
            <Loading isLoading={loading}>
                <TopBar>
                    <TopBarItems>
                        <TopBarItem onClick={() => setMenuOpen(!menuOpen)}>
                            <FiMenu></FiMenu>
                        </TopBarItem>
                        <TopBarItem>
                            <VenusHCMLogo width="160px" />
                        </TopBarItem>
                        <TopBarItem>
                            <Language></Language>
                            <FaRegUser />
                        </TopBarItem>
                    </TopBarItems>
                </TopBar>
                <LeftSideMenu style={{ visibility: menuOpen ? 'visible' : 'hidden', opacity: menuOpen ? '1' : '0' }}>
                    {latestMenu && (
                        <LeftSideMenuBackButton onClick={() => backMenu()}>
                            <IoIosArrowRoundBack />
                            {t('back')}
                        </LeftSideMenuBackButton>
                    )}
                    {currentMenu.map((item, index) => {
                        return (
                            <LeftSideMenuItem onClick={() => changeMenu(item)} key={index}>
                                {t(item.name)}
                                {item.subMenu.length > 0 && <FaCaretRight />}
                            </LeftSideMenuItem>
                        )
                    })}
                </LeftSideMenu>
                <MainContent $menuOpened={menuOpen} onClick={() => setMenuOpen(false)}>
                    {props.children}
                </MainContent>
            </Loading>
        </RootLayout>
    );
}