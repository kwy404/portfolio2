import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useEffect, useState} from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

interface theme {
    setDarkTheme: void;
    darkTheme: boolean;
};

const Header = ({setDarkTheme, darkTheme}: theme) => {
    //Array with objects content linksMenu
    const [isDesktop, setIsDestkop] = useState(window.innerWidth > 760);
    const linksMenu = [
        {
            name: 'About',
            path: 'about'
        },
        {
            name: 'Experience',
            path: 'jobs'
        },
        {
            name: 'Work',
            path: 'projects'
        },
        {
            name: 'contact',
            path: 'contact'
        }
    ];

    useEffect(() => {
        const updateWindowDimensions = () => {
            setIsDestkop(window.innerWidth > 725);
        };
        window.addEventListener("resize", updateWindowDimensions);
    }, [window.innerWidth]);

    return (
        <>
            <header>
                { isDesktop ? 
                <HeaderDesktop linksMenu={linksMenu} MenuLink={MenuLink}/> : 
                <HeaderMobile linksMenu={linksMenu} MenuLink={MenuLink}/>
                }
                <div 
                onClick={() => setDarkTheme(!darkTheme)}
                className="fadedown-enter-done" 
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
                        { darkTheme ? <FaMoon/> : <FaSun/> }
                        Change Theme</a>
                </div>
            </header>
        </>
    );
};

interface propsMenuLink {
    name: string;
    path?: string;
};

const MenuLink = ({name, path}: propsMenuLink) => {
    return (
        <li className="fadedown-enter-done" style={{transitionDelay: '0ms'}}>
             <a href={`/#${path}`}>{name}</a>
        </li>
    )
};

export default Header;