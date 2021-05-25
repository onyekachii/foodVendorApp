import "./main.css";
import img1 from "./logos&images/win4.jpg";
import img2 from "./logos&images/win5.jpg";
import img3 from "./logos&images/win6.jpg";
import img4 from "./logos&images/win7.jpg";
import ShowCase from "../showCase";

function Main () {
    return (
        <main>
            <ShowCase />
            <div id="h6" className="main-content">
                <h6>Select form our Collection!</h6>
            </div> 
            <div id="tabletMain">
                <div className="shadow-lg p-3 mb-5 bg-brown rounded main-content">
                    <img className="img-main" src= {img1} alt="order your food" />
                    <p>Food Order</p>
                </div>
                <div className="shadow-lg p-3 mb-5 bg-brown rounded main-content">
                    <img className="img-main" src={img2} alt="african food items" />
                    <p>African Food Items</p>
                </div>
                <div className="shadow-lg p-3 mb-5 bg-brown rounded main-content">
                    <img className="img-main" src={img3} alt="beverage" />
                    <p>Home-made Beverage</p>
                </div>
                <div className="shadow-lg p-3 mb-5 bg-brown rounded main-content">
                    <img className="img-main" src={img4} alt="others" />
                    <p>Others</p>
                </div>
            </div>     
        </main>
    )
}

export default Main;