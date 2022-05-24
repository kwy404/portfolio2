import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useEffect, useState} from 'react';

const Header = () => {
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
            setIsDestkop(window.innerWidth > 550);
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