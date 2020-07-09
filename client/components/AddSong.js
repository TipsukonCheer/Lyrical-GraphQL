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

    onSubmit(event){
        event.preventDefault();
        console.log(this.props)
        this.props.mutate({
            variables:{
                title:this.state.title
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Add new song</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
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
mutation AddSong($title:String){
    addSong(title:$title){
        id
        title
    }
}
`

export default graphql(query)(AddSong);
