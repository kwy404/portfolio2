import {useState} from 'react';

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
        
    </>
};

export default HeaderMobile;