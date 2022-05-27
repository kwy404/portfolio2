import MenuLink from './MenuLink';
import LinksMenu from './LinksMenu';

interface props {
    pathActive?: string;
    setPathActive: (path: string) => void;
};

const HeaderDesktop = ({pathActive, setPathActive }: props) => {
    return <nav>
    <div className="logo" tabIndex={-1}/>
    <div className="menu__Link__Content">
        <ol>
            { LinksMenu.map((link, index) => (
                <MenuLink 
                pathActive={pathActive}
                setPathActive={setPathActive}
                key={index}
                {...link}
                />
            ))}
        </ol>
        <div className="animation">
            <a className="resume__button" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    </div>
</nav>
};

export default HeaderDesktop;