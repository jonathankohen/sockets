import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

import Main from './pages/Main';
import Chat from './pages/Chat';

function App() {
    return (
        <div className="App">
            <header>
                <nav className="navbar sticky-top navbar-dark bg-primary">
                    <a className="navbar-brand" href="#!">
                        Chat App
                    </a>
                </nav>
            </header>

            <main className="container d-flex justify-content-center">
                <Router>
                    <Main path="/" />
                    <Chat path="/chat" />
                </Router>
            </main>

            <footer>
                <nav className="navbar fixed-bottom navbar-dark bg-primary">
                    <a className="navbar-brand" href="#!">
                        Sticky bottom
                    </a>
                </nav>
            </footer>
        </div>
    );
}

export default App;
