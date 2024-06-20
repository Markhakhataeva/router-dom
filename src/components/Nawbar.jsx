import React from 'react';
import { NavLink} from "react-router-dom";

export const Header = () => {

    const [active, setActive] = React.useState(null);
    const handleClick = (id) => {
        setActive(id);
    }

    return (
        <div className="header">
            <h1 className="cover">Cover</h1>
            <ul className="naw">
                <li>
                    <NavLink to="/" className={active===1? "select" : "navlink"} onClick={()=>handleClick(1)}>
                        <b>Home</b>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/features" className={active===2? "select" : "navlink"} onClick={()=>handleClick(2)}>
                        <b>Features</b>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={active===3? "select" : "navlink"} onClick={()=>handleClick(3)}>
                        <b>Contacts</b>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
}
