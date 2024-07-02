import { FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaCaretRight } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import styled from "styled-components";
import { leftSideMenu, root, topMenu } from "../Components/UI/Variables";
import { ReactElement, useState } from "react";
import { hcmMenu } from "../Service/MenuService";
import VenusHCMMenu from "../Model/VenusHCMMenu";
import { useNavigate } from "react-router-dom";
import Loading, { useLoading } from "../Components/Loading";

const RootLayout = styled.div`
    background-color: ${root.backgroundColor};
    min-height: 100vh;
`

const TopBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
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
    display: inline-block;

    svg {
        cursor: pointer;
    }
`

const TopBarItemAppName = styled.span`
    font-family: "Bona Nova SC", serif;
    font-size: large;
    color: white;
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
                            <TopBarItemAppName>
                                Venus HCM
                            </TopBarItemAppName>
                        </TopBarItem>
                        <TopBarItem>
                            <FaRegUser />
                        </TopBarItem>
                    </TopBarItems>
                </TopBar>
                <LeftSideMenu style={{ visibility: menuOpen ? 'visible' : 'hidden', opacity: menuOpen ? '1' : '0' }}>
                    {latestMenu && (
                        <LeftSideMenuBackButton onClick={() => backMenu()}>
                            <IoIosArrowRoundBack />
                            Voltar
                        </LeftSideMenuBackButton>
                    )}
                    {currentMenu.map((item, index) => {
                        return (
                            <LeftSideMenuItem onClick={() => changeMenu(item)} key={index}>
                                {item.name}
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