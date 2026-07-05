export default function BookingButton() {

    const freshaLink = "https://www.fresha.com/a/the-nail-room-lincolnton-200-lithia-inn-road-fbetz7tj/booking?cartId=02f10b75-62a1-49ce-ab57-e74fc7f03a83";

    return (
        <a href={freshaLink} target="_blank" rel="noopener noreferrer">
            <button className="primary-btn">
                Book Now!
            </button>
        </a>
    );
}