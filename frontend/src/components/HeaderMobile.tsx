import {useState} from 'react';
import {BsPlusLg} from 'react-icons/bs';

interface propsMenuLink {
    name: string;
    path?: string;
};

interface props {
    linksMenu: Array<propsMenuLink>;
    MenuLink: any;
};


const HeaderMobile = ({MenuLink, linksMenu }: props) => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <div 
        onClick={() => setIsOpen(!isOpen)}
        className='buttonToggleBottom'>
            <BsPlusLg/>
        </div>
        { isOpen && <div className='listIcons'>
            { linksMenu.map((link, index) => (
                <MenuLink 
                key={index}
                {...link}
                />
            ))}
        </div> }
    </>
};

export default HeaderMobile;