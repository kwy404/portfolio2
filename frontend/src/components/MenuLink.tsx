export interface propsMenuLink {
    name: string;
    path?: string;
    pathActive?: string;
    setPathActive: (path: string) => void;
};

const MenuLink = ({name, path, pathActive, setPathActive}: propsMenuLink) => {
    return (
        <li 
        onClick={() => {
            if(setPathActive){
                setPathActive(path || "#about")
            }
        }}
        className={`${path == pathActive ? "list__icons--active" : "list__icons--disabled" }`} style={{transitionDelay: "0ms"}}>
             <a href={`/#${path}`}>{name}</a>
        </li>
    )
};

export default MenuLink;