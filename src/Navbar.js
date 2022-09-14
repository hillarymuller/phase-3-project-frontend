import { NavLink } from "react-router-dom";

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    backgroundColor: 'rgb(2, 38, 21)',
    fontWeight: "bold",
    verticalAlign: "center", 
    fontFamily: "Impact, fantasy"
}
const Navbar = () => {
    return (
        <div>
            <NavLink   exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#10ecc3"
            }}
            to="/">
                Home
            </NavLink>
            <NavLink   exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#10ecc3"
            }}
            to="/parks">
                Parks
            </NavLink>
            <NavLink   exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#10ecc3"
            }}
            to="/parks/new">
                New Park
            </NavLink>
            <NavLink   exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#10ecc3"
            }}
            to="/trails/new">
                New Trail
            </NavLink>
        </div>
    )
}

export default Navbar;