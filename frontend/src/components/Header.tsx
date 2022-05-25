import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useEffect, useState} from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

interface HeaderProps {
    setDarkTheme: (theme: boolean) => void;
    darkTheme: boolean;
};

const Header = ({setDarkTheme, darkTheme}: HeaderProps) => {
    const [isDesktop, setIsDestkop] = useState(window.innerWidth > 760);
    const [pathActive, setPathActive] = useState(window.location.hash.replace(`#`, ``) == `` ? `about` : window.location.hash.replace(`#`, ``));

    useEffect(() => {
        const handleResize = () => {
            setIsDestkop(window.innerWidth > 855);
        };
        window.addEventListener("resize", handleResize);
    }, [window.innerWidth]);

    return (
        <>
            {!isDesktop && <HeaderMobile 
            pathActive={pathActive}
            setPathActive={setPathActive}/>}
            <header>
                { isDesktop ? 
                <HeaderDesktop 
                pathActive={pathActive}
                setPathActive={setPathActive} /> : 
                ``
                }
                <div 
                onClick={() => {
                    setDarkTheme(!darkTheme)
                    window.localStorage.setItem('darkTheme', String(!darkTheme))
                }}
                className="animation resume__button__modify">
                    <a className="resume__button" target="_blank" rel="noopener noreferrer">
                        { darkTheme ? <FaSun/> : <FaMoon/> }
                        Change Theme</a>
                </div>
            </header>
        </>
    );
};

export default Header;