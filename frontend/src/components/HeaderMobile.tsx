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

    return <nav className={`${isOpen ? `contentMobileAfter openedMenu` : ``}`}>
    <div className="logo fade-enter-done" tabIndex={-1}/>
    <div className="menuLinkContent contentMobile">
        <button 
        onClick={() => setIsOpen(!isOpen)}>
            { !isOpen ? `Abrir menu` : `Fechar menu`}
        </button>
        { isOpen && (
            <>
                <ol>
                    { linksMenu.map((link, index) => (
                        <MenuLink 
                        key={index}
                        {...link}
                        />
                    ))}
                </ol>
                <div className="fadedown-enter-done" 
                style={{transitionDelay: '400ms'}}>
                    <a className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </>
        ) }
        
        
    </div>
</nav>
};

export default HeaderMobile;