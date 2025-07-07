import "./welcome.css";
import Header from "../Header";

export function Welcome() {
  return (
    <body>
        <Header />
        <main>
          <section id="about">
            <div className="row">
              <div className="box">
                <h2>About Me</h2>
                <p>
                  Hi! I am a final year student at the University of Warwick studying Computer Science (MEng).
                  <br />
                  I am an aspiring software engineer with a keen interest in Development Operations/Platform Engineering.
                  <br />
                  I have a wide range of differing experience in the field of technology, ranging from software development experience
                  at a large trading firm, to being a tool developer and maintainer for a Data Science (Strategy) group at a Formula One Team.
                  <br />
                  More recently, I have been working on personal projects including:
                </p>
                <ul>
                  <li>My homelabbing journey (Blog to come soon)</li>
                  <li>This portfolio page</li>
                  <li>A biography page for my family found <a href="https://bio.fitzmaurice.me">here</a></li>
                </ul>
              </div>
              <div className="picture a"></div>
            </div>
          </section>
        </main>
    </body>
  );
}