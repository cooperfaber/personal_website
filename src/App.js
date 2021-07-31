import './App.css';

const App = (props) => {
console.log(props);
return (
    <div className="App">
        <header className="App-header">
            <p>
                Welcome to my website! I'm Cooper.
            </p>
            <p>
                Details about myself!
            </p>
            <p>
                Skill Set!
            </p>
            <p>
                Experience!
            </p>
            <a
                className="Git-Link"
                href="https://github.com/cooperfaber"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github Link
            </a>
            <a
                className="LI-link"
                href="https://www.linkedin.com/in/cooper-faber-112a71213/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn Profile
            </a>
            <p>
                Photo Column
            </p>
        </header>
    </div>
);
}

export default App;
