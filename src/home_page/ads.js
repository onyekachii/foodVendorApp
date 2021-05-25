import ad1 from "./logos&images/logo_3000X1950.png";
import ad3 from "./logos&images/logo_1460X1096.png"
import "./ads.css";
import {FaSearch} from "react-icons/fa"

function Ads () {
    return (
        <>
        <form className="form-inline" id="search-form">
            <input className="form-control" id="input-form" type="text" placeholder="Search.." />
            <button type="button" id= "button-form">
                <FaSearch />
            </button>
        </form>
        <div className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselAds" data-slide-to="0"></li>
                {/*<li data-target="#carouselAds" data-slide-to="1"></li>*/}
                <li data-target="#carouselAds" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="img-caro" src={ad1} alt="advert" />
                </div>
                {/*<div className="carousel-item" id="para" >
                    // 16:9 Aspect Ratio //
                    <img className="img-caro" src={ad1} alt="f" />
                </div>*/}
                <div className="carousel-item">
                    <img className="img-caro" src={ad3} alt="fff" />
                </div>
            </div>
        </div>        
        </>
    )
}

export default Ads;