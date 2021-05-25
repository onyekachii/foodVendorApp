import React from "react";
import Header from "./header/header";
import Ads from "./ads";
import Main from "./main";
import Footer from "./footer";

class Home extends React.Component {
    render() {
        return (
        <>
            <Header />
            <Ads />
            <Main />
            <Footer />
        </>
        )
    }
}

export default Home;