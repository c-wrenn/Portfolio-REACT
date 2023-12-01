const styles = {
  imageStyle: {
    height: '25rem',
    width: "25rem",
    borderRadius: '50%',
    border: '3px solid #000',
  },
  letterStyle: {
    fontStyle: {
      fontWeight: '900',
      fontSize: '4rem',
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    paragraphStyle: {
      fontFamily: 'Mulish, sans-serif',
      letterSpacing: '1.2px',
      lineHeight: '1.6rem',
    }
  }

}

function About() {
    return(
        <main>
          <h1 styles={styles.letterStyle.fontStyle}>About Me</h1>
<section>
    <div>
        <div>
        <div className="col-md-12">
              <p styles={styles.letterStyle.fontStyle}>
                Hello, my name is Crislyn Wren. 
              </p>
              <p styles={styles.letterStyle.fontStyle}>
                I have been attending Collin College,
                 and recently gained my associates degree.
                I plan to continue my education in Computer Science at Texas Tech University.
              </p>
              <p styles={styles.letterStyle.fontStyle}>
                I have completed the Full Stack Web Development Boot Camp at SMU
                and graduated as of November of 2023. I have been able to create
                many projects from the Boot Camp using various coding languages,
                mainly MERN stack. My goal is to acquire a stable career in this
                field of work.
              </p>
            </div>
        </div>
    </div>
</section>

        </main>
    );
}

export default About;