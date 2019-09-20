import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/characters">Characters</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/locations">Locations</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/search">Search</NavLink>
            </Menu.Item>
        </Menu>
    )
};