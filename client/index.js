import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client' //เป็นตัวstore dataที่ดึงมาจากgraphal server
import {ApolloProvider} from 'react-apollo' //เป็นตัวเชื่อมreactกับapollo ก็คือมันจะเป็นตัวที่ไปดึงข้อมูลจาก ApolloClient
import SongLists from './components/SongLists'

//ในนี้เราไม่ต้องconfigอะไรเพิ่มเพราะappของเรามันชี้ไปที่serverของgraphqlอยู่แล้ว(ในserver.js)
const client = new ApolloClient({})

const Root = () => {
  return (
  <ApolloProvider client={client}>
    <div>
      <SongLists/>
    </div>
  </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
