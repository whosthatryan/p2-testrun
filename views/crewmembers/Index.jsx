const React = require('react');

class Index extends React.Component {
    render(){
        const { _id, crewmember } = this.props
        return (
            <div>
                <h1>Crewmembers</h1>
                <nav>
                    <a href="/">Home</a>
                </nav>
                <nav>
                    <a href="/crewmembers/new">Create New Crew</a>
                </nav>
                <ul>
                    {
                        crewmember.map((crewmember, i) => {
                            return (
                                <li key={crewmember._id}>
                                <a href={`/crewmembers/${crewmember._id}`}>{crewmember.name}</a><br/>
                                <img src={crewmember.img} style={{width: '100px'}}/><br/>
                                <form action={`/crewmembers/${crewmember._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value={`Delete Log`}/>
                                </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        )
    }
}    

module.exports = Index;
