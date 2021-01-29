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

            <main>
                <Router>
                    <Main path="/" />
                    <Chat path="/chat" />
                </Router>
            </main>
        </div>
    );
}

export default App;
