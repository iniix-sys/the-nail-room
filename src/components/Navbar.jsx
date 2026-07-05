import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const freshaLink = "https://www.fresha.com/a/the-nail-room-lincolnton-200-lithia-inn-road-fbetz7tj/booking?cartId=02f10b75-62a1-49ce-ab57-e74fc7f03a83";

    return (
        <nav className="navbar">
            <div href="#hero" className="logo">💅 The Nail Room</div>

            <div className={`links ${open ? "open" : ""}`}>

                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>

                {/* Fresha booking button */}
                <a
                    href={freshaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="book-btn">
                        Book Now!
                    </button>
                </a>

            </div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                ☰
            </div>
        </nav>
    );
}