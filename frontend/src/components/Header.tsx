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
                                {...link}
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
    );
};

export default Header;