interface propsMenuLink {
    name: string;
    path?: string;
}

interface props {
    linksMenu: Array<propsMenuLink>;
    MenuLink: any;
};

const HeaderDesktop = ({MenuLink, linksMenu }: props) => {
    return <nav>
    <div className="logo fade-enter-done" tabIndex={-1}/>
    <div className="menuLinkContent">
        <ol>
            { linksMenu.map((link, index) => (
                <MenuLink 
                key={index}
                {...link}
                />
            ))}
        </ol>
        <div className="fadedown-enter-done animation" 
        style={{transitionDelay: '400ms'}}>
            <a className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    </div>
</nav>
};

export default HeaderDesktop;