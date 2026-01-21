import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info.jsx";
import Composers from "./components/Composers/composers.jsx";
import Albums from "./components/Albums/Albums";
import Player from "./components/Player/Player";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

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