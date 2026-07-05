import BookingButton from "./BookingButton";

export default function Contact() {
    return (
        <section className="section" id="contact">

            <h2 className="section-title">Contact Me</h2>

            <div className="contact-box">

                <div>
                    <p>200 Lithia Inn Road, Lincolnton, North Carolina</p>
                    <p>208-866-3478</p>
                    <p>tammydye34@gmail.com</p>
                </div>

                <BookingButton />

            </div>

        </section>
    );
}