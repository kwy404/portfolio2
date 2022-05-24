import {useState} from 'react';
import {BsPlusLg} from 'react-icons/bs';
import {FaMinus} from 'react-icons/fa';

interface propsMenuLink {
    name: string;
    path?: string;
    pathActive?: string;
    setPathActive: (path: string) => void;
};

interface props {
    linksMenu: Array<propsMenuLink>;
    MenuLink: any;
    pathActive?: string;
    setPathActive: (path: string) => void;
};


const HeaderMobile = ({MenuLink, linksMenu, pathActive, setPathActive }: props) => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <div 
        onClick={() => setIsOpen(!isOpen)}
        className='buttonToggleBottom'>
            { !isOpen ? <BsPlusLg/> : <FaMinus/>}
        </div>
        { isOpen && <div className='listIcons'>
            { linksMenu.map((link, index) => (
                <MenuLink 
                pathActive={pathActive}
                setPathActive={setPathActive}
                key={index}
                {...link}
                />
            ))}
        </div> }
    </>
};

export default HeaderMobile;