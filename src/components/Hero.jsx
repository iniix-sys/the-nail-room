export default function Hero() {

    const freshaLink = "https://www.fresha.com/a/the-nail-room-lincolnton-200-lithia-inn-road-fbetz7tj/booking?cartId=02f10b75-62a1-49ce-ab57-e74fc7f03a83";

    return (
        <section className="hero">
            <div className="hero-content">

                <h1>
                    The Nail Room 💖
                </h1>

                <p>
                    The Nail Room offers a private room, one on one time, and a comfortable environment. My nail salon is located in Lincolnton, North Carolina offering a range of nail services including hand paraffin treatment. Explore my service menu and book your appointment today!
                </p>

                <div className="hero-buttons">

                    {/* Book Now → Fresha */}
                    <a
                        href={freshaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="primary-btn">
                            Book Now!
                        </button>
                    </a>

                    {/* Contact Me → scroll to section */}
                    <a href="#contact">
                        <button className="secondary-btn">
                            Contact Me
                        </button>
                    </a>

                </div>

            </div>
        </section>
    );
}