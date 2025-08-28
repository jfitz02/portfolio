// Filename - Header.js
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div>
            <h1>
                MrFitzmaurice
            </h1>
            <div id="menuToggle">
                <input type="checkbox" id="menuCheckbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/cv">CV</a></li>
                </ul>

            </div>
            {/* <div className="buttons">
                <a data-text="Home" href="/">
                    Home
                </a>
                <a data-text="Projects" href="/projects">
                    Projects
                </a>
                <a data-text="CV" href="/cv">
                    CV
                </a>
            </div> */}
            </div>
        </header>
    );
}