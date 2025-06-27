import "./welcome.css";
import ME from "./assets/me.jpg";

export function Welcome() {
  return (
    <main className="main">
        <header className="main__header">
          <div>
            <h1>
              MrFitzmaurice
            </h1>
          </div>
        </header>
        <div className="main__body">
          <div className="main__body__row">
            <div className="main__body__box">
              <h2>About Me</h2>
              <p>
                Hi! I am a final year student at the University of Warwick studying Computer Science (MEng).
                <br />
                I am an aspiring software engineer with a keen interest in Development Operations/Platform Engineering.
                <br />
                I have a wide range of differing experience in the field of technology, ranging from software development experience
                at a large trading firm, to being a tool developer and maintainer for a Data Science (Strategy) team at a Formula One Team.
                <br />
                More recently, I have been working on personal projects including:
              </p>
              <ul>
                <li>My homelabbing journey (Blog to come soon)</li>
                <li>This portfolio page</li>
                <li>A biography page for my family found <a href="https://bio.fitzmaurice.me">here</a></li>
              </ul>
              <p>
                Feel free to customize this app and make it your own!
              </p>
            </div>
            <div className="main__body__picture">
              <img
                src={ME}
                alt="Profile"
                className="main__body__picture__img"
              />
            </div>
          </div>
        </div>
    </main>
  );
}