const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <nav>
                    <a href="/logs">Captain's Logs</a>
                </nav>
                <nav>
                    <a href="/crewmembers">Crewmembers</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;