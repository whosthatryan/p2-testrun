const React = require('react');

class Show extends React.Component {
    render() {
        const { name, rank, img, homePlanet, engineeringAccess, crewmember, _id } = this.props.crewmember;
        return (
            <div>
                <h1>Crew Page</h1>
                <p>Name: {name}</p>
                <p>Rank: {rank}</p>
                <img src={img} style={{width: '300px'}}/>
                <p>Home Planet: {homePlanet}</p>
                <p>{engineeringAccess ? `Has engineering access.` : `Does not have engineering access.`}</p>
                <nav>
                    <a href={`/crewmembers/${_id}/edit`}>Edit</a>
                </nav>
                <nav>
                    <a href="/crewmembers">Back</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show;