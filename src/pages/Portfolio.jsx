export default function Portfolio() {
    const containerStyle = {
      border: '1px solid #ccc',
      padding: '10px',
      textAlign: 'center',
    };
  
    const imageStyle = {
      maxWidth: '100%',
      transition: 'opacity 0.3s',
    };
  
    return (
      <div style={containerStyle}>
        <h1>Projects</h1>
          <div className="container">
           <div className="row">
  
  
            <div className="col-md-6 col-lg-4">
              <div>
                <a href='https://cybermart1-76e7c43ac326.herokuapp.com/' target="blank">
                  <img
                    src={cybermart}
                    alt="Ecomerce website"
                    style={imageStyle}
                    // e is for event so the event passes when it is over the target and then the style is applied
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
                </a>
                <h3>CyberMart: HTML, CSS, Express</h3>
                <a href='https://github.com/c-wrenn/CyberMart' target='blank'>Github</a>
              </div>
            </div>
  
  
            <div className="col-md-6  col-lg-4">
              <div style={containerStyle}>
                <a href='https://immense-coast-03124-7ccec52b997b.herokuapp.com/notes' target="blank">
                  <img
                    src={weatherApp}
                    alt="Note Taker App"
                    style={imageStyle}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
                </a>
                <h3>Note Taker: Express.js, Node.js</h3>
                <a href='https://github.com/c-wrenn/Create-Notes' target='blank'>Github</a>
              </div>
            </div>
  
  
  
  
            <div className="col-md-6  col-lg-4">
              <div style={containerStyle}>
                <a href='https://roam-ready-79c746e8ffc3.herokuapp.com/' target="blank">
                  <img src={roam}
                    alt="travel blog"
                    style={imageStyle}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
                </a>
                <h3>Roam Ready: MERN</h3>
                <a href='https://github.com/c-wrenn/roam-ready' target='blank'>Github</a>
              </div>
            </div>
  
  
  
            <div className="col-md-6  col-lg-4">
              <div style={containerStyle}>
                <a href='https://easyblogs1-0a58a50a4e3a.herokuapp.com/' target="blank">
                  <img src={keygenerator}
                    alt="key generator app"
                    style={imageStyle}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
                </a>
                <h3>Key Generator</h3>
                <a href='https://github.com/c-wrenn/Key-Generator-03' target='blank'>Github</a>
              </div>
            </div>
  
  
            <div className="col-md-6  col-lg-4">
              <div style={containerStyle}>
                <a href='https://github.com/c-wrenn/NoSQL-SocialNetworkAPI' target="blank">
                  <img src={socialAPI}
                    alt="markdown"
                    style={imageStyle}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
                </a>
                <h3>SocialNetWorkAPI: NoSQL, Express.js, MongoDB, Mongoose </h3>
              </div>
            </div>
  
            <div className="col-md-6  col-lg-4">
              <div style={containerStyle}>
                <a href='https://github.com/c-wrenn/README-Generator-usingNode.js' target="blank">
                  <img src={readmeGen}
                    alt="markdown"
                    style={imageStyle}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
                </a>
                <h3>Readme generator: Node.js</h3>
              </div>
            </div>
  
  
        </div>
      </div>
      </div>
    );
  }