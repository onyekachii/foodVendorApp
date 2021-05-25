import "./footer.css";
import { ImFacebook, ImInstagram, ImWhatsapp } from "react-icons/im";

function Footer () {
    return (
        <>
            <div className="sub-footer">

            </div>
            <footer id="footer-home">
                <div className="footer_a_div">
                    <a className="footer_info" href="#carouselAds" target="_blank">About</a>
                    <a className="footer_info" href="#carouselAds" target="_blank">Report a problem</a>
                    <a className="footer_info" href="#carouselAds" target="_blank">Contact</a>
                    <a className="footer_info" href="#carouselAds" target="_blank">Terms and Conditions</a>
                </div>
                <div id="footer-socials">
                    <span className="social-span"> 
                        <p>@AweleKitchen</p>
                        <ImFacebook  className="footer-icons"/>
                    </span>
                    <span className="social-span">
                        <p>@awelekitchen</p>
                        <ImInstagram className="footer-icons" />
                    </span>
                    <span id="whatsapp" className="social-span">
                        <p>+60*********880</p>
                        <ImWhatsapp  className="footer-icons"/>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer;