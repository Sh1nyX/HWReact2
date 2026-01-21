import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./AlbumCover.css";

function ImageModal({ src, onClose })
{
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt="Album enlarged" />
                <button className="close-btn" onClick={onClose}>✖</button>
            </div>
        </div>,
        document.body
    );
}

export default function AlbumCover({ album })
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="album-cover" onClick={() => setIsOpen(true)}>
                <img src={album.cover} alt={album.title} />
                <h3>{album.title} ({album.year})</h3>
            </div>

            {isOpen && <ImageModal src={album.cover} onClose={() => setIsOpen(false)} />}
        </>
    );
}