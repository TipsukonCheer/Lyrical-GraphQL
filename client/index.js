import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client' //เป็นตัวstore dataที่ดึงมาจากgraphal server
import {ApolloProvider} from 'react-apollo' //เป็นตัวเชื่อมreactกับapollo ก็คือมันจะเป็นตัวที่ไปดึงข้อมูลจาก ApolloClient
import SongLists from './components/SongLists'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import App from './components/App'
import AddSong from './components/AddSong'

//ในนี้เราไม่ต้องconfigอะไรเพิ่มเพราะappของเรามันชี้ไปที่serverของgraphqlอยู่แล้ว(ในserver.js)
const client = new ApolloClient({})

const Root = () => {
  return (
  <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongLists}/>
          <Route path="AddSong" component={AddSong}/>
        </Route>
      </Router>
  </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
