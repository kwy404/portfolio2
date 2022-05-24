const Header = () => {
    //Array with objects content linksMenu
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

    return (
        <>
            <header>
                <nav>
                    <div className="logo fade-enter-done" tabIndex={-1}/>
                    <div className="menuLinkContent">
                        <ol>
                            { linksMenu.map(link => (
                                <MenuLink 
                                linkTitle={link.name}
                                linkPath={link.path}
                                />
                            ))}
                        </ol>
                        <div className="fadedown-enter-done" 
                        style={{transitionDelay: '400ms'}}>
                            <a className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
};

interface propsMenuLink {
    linkTitle: string;
    linkPath?: string;
};

const MenuLink = ({linkTitle, linkPath}: propsMenuLink) => {
    return (
        <li className="fadedown-enter-done" style={{transitionDelay: '0ms'}}>
             <a href={`/#${linkPath}`}>{linkTitle}</a>
        </li>
    )
};

export default Header;