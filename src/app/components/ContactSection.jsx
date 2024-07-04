const ContactSection = () => (
    <div className="v-center-content contact-section">
       
        <h1>Want to hire me?</h1>
        

        <form className="contact-form" action="conatctEmail">
            <div className="contact-input">
                <label htmlFor="nameInput">Your Name</label>
                <input type="text" name="nameInput" id="nameInput" />

            </div>
            <div className="contact-input">
                <label htmlFor="subjectInput">Subject</label>
                <input type="text" name="subjectInput" id="subjectInput" />

            </div>
            <div className="contact-input">
                <label htmlFor="contactContent">Your Message:</label>
                <textarea name="contactContent" id="contactContent"></textarea>

            </div>

            <button>Send</button>
        </form>

    </div>
);
export default ContactSection;