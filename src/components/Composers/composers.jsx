import React from "react";
import "./composers.css";

export default function Composers() {
    const members = ["Robin Beanland", "Chloe Kwok"];
    return (
        <section className="members">
            <h2>Composers</h2>
            <ul>
                {members.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
        </section>
    );
}