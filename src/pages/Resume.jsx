export default function Resume() {
    return (
        <>
        {/* link to resume */}
        <div className="d-flex flex-column justify-content-center align-items-center" >
        <h1>View my resume! </h1>
        <a href="" target="blank">Link To resume</a>
        </div>

        <section>
            <div>
                <h2>Crislyns Resume</h2>
                p
            </div>
{/* add styles */}
            <div>
            <h3>Front-End Knowledge</h3>
              <ul className="list-group mb-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>

              <h3>Back-End Knowledge</h3>
              <ul className="list-group">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
        </section>
        </>
    
    )
}
