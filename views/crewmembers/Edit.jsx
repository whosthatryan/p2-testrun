const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, rank, img,  homePlanet, engineeringAccess } = this.props.crewmembers;
        return (
            <div>
                <h1>Edit Page</h1>
                <form action={`/crewmembers/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/> <br/>
                    Rank: <input type="text" name="entry" defaultValue={rank}/><br/>
                    Image: <input type="text" name="img" defaultValue={img}/><br/>
                    Home Planet: <input type="text" name="homePlanet" defaultValue={homePlanet}/><br/>
                    Engineering Access: 
                    <input type="checkbox" name="engineeringAccess" checked={engineeringAccess}/><br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
                <nav>
                    <a href="/crewmembers">Back</a>
                </nav>
            </div>
        )
    }
}

module.exports = Edit;