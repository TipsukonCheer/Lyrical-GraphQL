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

    getSongList() {
        const songs = this.props.data.songs;
        const song = songs.map((songs) =>
            <li>{songs.title}</li>
        );
        return (
            <ul>{song}</ul>
        );
    }

    render() {
        console.log(this.props.data)
        if (this.props.data.loading) {
            return (
                <div>
                    loading....
                </div>
            );
        } else {
            return (
                <div>
                    SongLists
                    {this.getSongList()}
                </div>
            );
        }
    }
}

//export component using graphql qurey function -> ผลลัพท์ที่ได้จากการqueryจะอยู่ในprops
export default graphql(query)(SongLists)
