import React from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Info from "./components/Info/Info.jsx";
import Composers from "./components/Composers/composers.jsx";
import Albums from "./components/Albums/Albums.jsx";
import Player from "./components/Player/Player.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App()
{
    return (
        <>
            <Header />
            <Info />
            <Composers />
            <Albums />
            <Player />
            <Gallery />
            <Footer />
        </>
    );
}

export default App;