import {useState} from 'react';
import {BsPlusLg} from 'react-icons/bs';
import {FaMinus} from 'react-icons/fa';

import MenuLink from './MenuLink';
import LinksMenu from './LinksMenu';

interface props {
    pathActive?: string;
    setPathActive: (path: string) => void;
};


const HeaderMobile = ({pathActive, setPathActive }: props) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <div 
        onClick={() => setIsOpen(!isOpen)}
        className='buttonToggle--bottom'>
            { !isOpen ? <BsPlusLg/> : <FaMinus/>}
        </div>
        { isOpen && <div className='list__icons'>
            { LinksMenu.map((link, index) => (
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