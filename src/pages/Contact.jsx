import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

const styles = {
    buttonStyle: {
      borderRadius: '10px',
      color: '#A69888',
      background: '#A69888'
    },
    paragraphStyle: {
        color: '#A69888'
        // fontFamily: 'Mulish, sans-serif',
        // letterSpacing: '1.2px',
        // lineHeight: '1.6rem',
      }
  }

function Contact() {
    return (
        <section>
            <div style = {styles.paragraphStyle}>
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
                    <a href="tel:+2149841219">  <
                        i
                    className="fa-solid fa-phone"
                    style={{ padding: "5px" }}
                  ></i>
                    </a>
            </div>
        </section>
    );
};

export default Contact;