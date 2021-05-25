import { BiLogIn, BiDish, BiBasket, BiCoffeeTogo, BiLogOut } from "react-icons/bi";
import { ImCart, ImHome3, ImLeaf } from "react-icons/im";
import { RiArrowGoForwardFill, RiArrowGoBackFill } from 'react-icons/ri'
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

var TabletNavigator = (props) => {
    let log, log2;
    if (props.loggedIn){
        log= <a href="#"> <CgProfile className="tabletclass" />{text("Profile")}</a>;
        log2 = <a href= "#"><BiLogOut className="tabletclass" />{text("Logout")}</a>;
    }else {
        log = <Link to="login" > <BiLogIn className="tabletclass" />{text("LogIn/SignUp")}</Link> ;
        
    }

    let arrow;
    if (props.menuShow) {
        arrow = <RiArrowGoBackFill className="tabletclass" onClick= {props.menuClick}/>;
    }else{
        arrow = <RiArrowGoForwardFill className="tabletclass" onClick= {props.menuClick}/>;
    }

    function text(a) {
        if (props.menuShow){
            return a;
        } 
    }

    return (
        <div id="tablet">
            <div id="tablet_icons">
                {arrow} 
                <a href="#"> <ImHome3 className="tabletclass" />{text("Home")}</a>
                <a href="#"> <ImCart className="tabletclass" />{text("cart")}</a>
                {log}
                <a href="#"> <BiDish className="tabletclass" />{text("Dish Order")}</a>
                <a href="#"> <BiBasket className="tabletclass" />{text("Food Items")}</a>
                <a href="#"> <BiCoffeeTogo className="tabletclass" />{text("Beverages")}</a>
                <a href="#"> <ImLeaf className="tabletclass" />{text("Others")}</a>
                {log2}
            </div>                
        </div>
    )
}

export default TabletNavigator;