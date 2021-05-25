import { BiLogIn, BiDish, BiBasket, BiCoffeeTogo, BiLogOut } from "react-icons/bi";
import { ImFacebook, ImInstagram, ImWhatsapp, ImCart, ImCancelCircle, ImHome3, ImLeaf } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

var Menu = (props) => {
    let log, log2;
    if (props.loggedIn){
        log= <a href="#"> <CgProfile className="" /> <p>My Account</p> </a>;
        log2 = <a href= "#"> <BiLogOut /> <p>Logout</p></a>;
    }else {
        log =  <Link to="login" > <BiLogIn className="" /> <p>Login/Sign up</p></Link>
    }
    
    return (
        <div id="menu">
            <ImCancelCircle className="" onClick= {props.menuClick} />
            <div id="menu_icons">
                <a href="#"> <ImHome3 className="" /> <p>Home</p> </a>
                <a href="#"> <ImCart className="" /> <p>Cart</p> </a>
                {log}
                <a href="#"> <BiDish className="" /> <p>Dish Order</p> </a>
                <a href="#"> <BiBasket className="" /> <p>Food Items</p> </a>
                <a href="#"> <BiCoffeeTogo className="" /> <p>Beverages </p> </a>
                <a href="#"> <ImLeaf className="" /> <p>Other Items</p> </a>
                {log2}
            </div>
                
            <div id="menuInfo">
                <a href="#" >About</a>
                <a href="#" >Report an issue</a>
                <a href="#" >Contact</a>
                <a href="#" >T's & C's</a>   
            </div>
                
            <div id="menuSocials">     
                <a href="https://www.facebook.com/AweleKitchen" target="_blank">
                    @AweleKitchen
                    <ImFacebook />                            
                </a>
                
                <a href="https://www.instagram.com/awelekitchen" target="_blank">
                    @awelekitchen
                    <ImInstagram />
                </a>
                
                <a id="whatsapp" href="#">
                    +60*********80
                    <ImWhatsapp />
                </a>
                
            </div>
                    
        </div>
    )
}

export default Menu