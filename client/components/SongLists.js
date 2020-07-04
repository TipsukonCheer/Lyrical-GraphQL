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

    getSongList(){
         let songs = this.props.data.songs;
         const listItems = songs.map((song,index) =>
             <li key={index}>{song.title}</li>
         );
         return listItems
    }

    render() {
        if(this.props.data.loading){
            return(
                <div>
                    loading...
                </div>
            );
        }
        return (
            <div>
                SongLists
                {this.getSongList()}
            </div>
        );
    }
}

//export component using graphql qurey function -> ผลลัพท์ที่ได้จากการqueryจะอยู่ในprops
export default graphql(query)(SongLists)
