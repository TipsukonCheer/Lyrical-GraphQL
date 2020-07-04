import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class AddSong extends Component {    
    render() {
        console.log("props"+this.props)
        return (
            <div>
                tttttt
            </div>
        )
    }
}

const query = gql`
    
`

export default graphql(query)(AddSong);
