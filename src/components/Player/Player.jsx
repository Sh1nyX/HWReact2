import React from "react";
import "./Player.css";

export default function Player()
{
    return (
        <section className="player">
            <h2>Sea of Thieves - We shall sail together</h2>
            <audio controls>
                <source src="/music/sot_song.mp3" type="audio/mpeg" />
                Your browser does not support audio player.
            </audio>
        </section>
    );
}