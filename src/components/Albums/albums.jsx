import React from "react";
import "./Albums.css";
import AlbumCover from "../AlbumCover/AlbumCover";

export default function Albums() {
    const albums = [
        { title: "Original game soundtrack", year: 2019, cover: "/images/AlbumCover.jpg" },
        { title: "Original game soundtrack", year: 2024, cover: "/images/AlbumCover2.png" }
    ];
    return (
        <section className="albums">
            <h2>Albums</h2>
            <div className="album-list">
                {albums.map((a, i) => <AlbumCover key={i} album={a} />)}
            </div>
        </section>
    );
}