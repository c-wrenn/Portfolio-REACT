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
            </div>
{/* add styles */}
            <div>
            <h3>Front-End Knowledge</h3>
              <ol className="list-group mb-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ol>

              <h3>Back-End Knowledge</h3>
              <ol className="list-group">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ol>
            </div>
        </section>
        </>
    
    )
}
