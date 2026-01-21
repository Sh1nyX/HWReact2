import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import BandInfo from "./components/BandInfo/BandInfo";
import Members from "./components/Members/Members";
import Albums from "./components/Albums/Albums";
import Player from "./components/Player/Player";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App()
{
    return (
        <>
            <Header />
            <BandInfo />
            <Members />
            <Albums />
            <Player />
            <Gallery />
            <Footer />
        </>
    );
}

export default App;