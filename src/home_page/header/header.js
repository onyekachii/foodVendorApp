import React from "react";
import "./header.css";
import Menu from "./moblieNav";
import TabletNavigator from "./tabletNav"
import { FaBars, FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor () {
        super();
        this.state = {
            loggedIn: false,
            lname: "ugwu",
            menuShow: false
        }
    }

    menuClick = () => {
        if (this.state.menuShow) {
            this.setState({menuShow: false})
        }else if (this.state.menuShow==false) {
            this.setState({menuShow: true})
        }
    }

    render () {

        //Menu component is assigned to menu variable
        let menu, tabletNav;
        tabletNav = <TabletNavigator menuShow={this.state.menuShow} loggedIn= {this.state.loggedIn} menuClick= {this.menuClick}/>
        if (this.state.menuShow) {
            menu = <Menu loggedIn= {this.state.loggedIn} menuClick= {this.menuClick}/>
        };

        //adds or removes element when user is logged in/out. Elements are stored in the logState and welcomeMsg variables
        let logState, welcomeMsg;
        if (this.state.loggedIn==false) {
            logState=
            <span>
                <Link to="login"> <BiLogIn id="login" className="icons"/> </Link>
                <ImCart className="icons"/>
            </span>
        } else {
            logState=
            (<span>
                <CgProfile id="login" className="icons"/>
                <ImCart className="icons"/>
            </span>);
            welcomeMsg = <p>Welcome {this.state.lname.toUpperCase()}</p>
        }
        
        return (
            <>
            <header>
                <div id="header">
                    <FaBars className="icons" onClick= {this.menuClick}/>
                    {logState}
                </div>
                
                <form className="form-inline">
                    <input className="form-control" type="text" placeholder="Search.." />
                    <button type="button" >
                        <FaSearch className="icons"/>
                    </button>
                </form>
                
                {welcomeMsg}
            </header>
            {menu}
            {tabletNav}
            </>
        )
    }
}

export default Header;