const React = require('react');
// const Layout = require('./components/Layout.jsx');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>New Crew</h1>
            <form action="/crewmembers" method="POST">
            Name: <input type="text" name="name"/><br/>
            Rank: <input type="text" name="rank"/><br/>
            Image: <input type="text" name="img"/><br/>
            Home Planet: <input type="text" name="homePlanet"/><br/>
            Engineering Access: <input type="checkbox" name="engineeringAccess"/><br/>
            <input type="submit" value="Submit"/>
            </form>
            <nav>
                <a href="/crewmembers">Back</a>
            </nav>
        </div>
    )
  }
}

module.exports = New;