// Filename - Header.js
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div>
            <h1>
                MrFitzmaurice
            </h1>
            <div className="buttons">
                <a data-text="Home" href="/">
                    Home
                </a>
                <a data-text="Projects" href="/projects">
                    Projects
                </a>
                <a data-text="CV" href="/cv">
                    CV
                </a>
            </div>
            </div>
        </header>
    );
}