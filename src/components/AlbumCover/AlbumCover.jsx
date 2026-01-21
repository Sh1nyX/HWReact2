import React from "react";
import "./AlbumCover.css";

export default function AlbumCover({ album })
{
    return (
        <div className="album-cover">
            <img src={album.cover} alt={album.title} />
            <h3>{album.title} ({album.year})</h3>
        </div>
    );
}