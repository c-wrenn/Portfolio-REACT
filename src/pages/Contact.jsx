//export default 
function Contact() {
    return (
        <section>
            <div>
                <p>Contact Me</p>
                    <a href="https://www.linkedin.com" target="_blank"
                        rel="noopener noreferrer"> 
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/c-wrenn"   target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:crislynwren@yahoo.com" target="_blank">Email: crislynwren@gmail.com
                    </a>
                    <a href="tel:+2149841219">Phone: (214) 984 - 1219
                    </a>
            </div>
        </section>
    );
};

export default Contact;