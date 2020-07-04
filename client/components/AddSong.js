import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class AddSong extends Component {    
    constructor(props){
        super(props);
        this.state = {
            title : ''
        }
    }

    render() {
        console.log("props"+this.props.data)
        console.log("title"+this.state.title)
        return (
            <div>
                <h1>Add new song</h1>
                <form onSubmit={()=>console.log("submit")}>
                    title
                    <input
                        onChange={(event)=>this.setState({title:event.target.value})}
                        value={this.state.title}
                    />
                </form>
             </div>
        )
    }
}

const query = gql`
{
    songs{
        title
    }
}
`

export default graphql(query)(AddSong);
