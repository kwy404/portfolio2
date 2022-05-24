import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useEffect, useState} from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import LinksMenu from './LinksMenu';

interface theme {
    setDarkTheme: void;
    darkTheme: boolean;
};

const Header = ({setDarkTheme, darkTheme}: theme) => {
    //Array with objects content linksMenu
    const [isDesktop, setIsDestkop] = useState(window.innerWidth > 760);
    const [pathActive, setPathActive] = useState(window.location.hash.replace(`#`, ``));

    const linksMenu = LinksMenu;

    useEffect(() => {
        const updateWindowDimensions = () => {
            setIsDestkop(window.innerWidth > 855);
        };
        window.addEventListener("resize", updateWindowDimensions);
    }, [window.innerWidth]);

    return (
        <>
            {!isDesktop && <HeaderMobile 
            pathActive={pathActive}
            setPathActive={setPathActive}
            linksMenu={linksMenu}
            MenuLink={MenuLink}/>}
            <header>
                { isDesktop ? 
                <HeaderDesktop 
                pathActive={pathActive}
                setPathActive={setPathActive}
                linksMenu={linksMenu} 
                MenuLink={MenuLink}/> : 
                ``
                }
                <div 
                onClick={() => {
                    setDarkTheme(!darkTheme)
                    window.localStorage.setItem('darkTheme', String(!darkTheme))
                }}
                className="fadedown-enter-done animation" 
                style={{position: `fixed`,
                left: `0px`, 
                transitionDelay: '400ms', 
                marginLeft: `40px`, 
                cursor: `pointer`, 
                zIndex: `13`,
                border: `1px solid var(--green)`,
                borderRadius: `var(--border-radius)`,
                padding: `0.75rem 1rem`
                }}>
                    <a className="resume-button" target="_blank" rel="noopener noreferrer">
                        { darkTheme ? <FaSun/> : <FaMoon/> }
                        Change Theme</a>
                </div>
            </header>
        </>
    );
};

interface propsMenuLink {
    name: string;
    path?: string;
    pathActive?: string;
    setPathActive: (path: string) => void;
};

const MenuLink = ({name, path, pathActive, setPathActive}: propsMenuLink) => {
    return (
        <li 
        onClick={() => {
            if(setPathActive){
                setPathActive(path)
            }
        }}
        className={`fadedown-enter-done ${path == pathActive ? `onHash` : ``}`} style={{transitionDelay: '0ms'}}>
             <a href={`/#${path}`}>{name}</a>
        </li>
    )
};

export default Header;