import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/parks">
                Parks
            </NavLink>
            <NavLink to="/parks/new">
                New Trail
            </NavLink>
        </div>
    )
}

export default Navbar;