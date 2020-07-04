import React, { Component } from 'react'
import gql from 'graphql-tag' //สำหรับการเขียนgraphql query
import { graphql } from 'react-apollo'

const query = gql`
    {
        songs{
            title
        }
    }
`

class SongLists extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                SongLists
            </div>
        );
    }
}

//export component using graphql qurey function -> ผลลัพท์ที่ได้จากการqueryจะอยู่ในprops
export default graphql(query)(SongLists)
