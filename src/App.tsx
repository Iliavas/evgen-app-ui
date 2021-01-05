import React from 'react';

import client from './client'
import {gql} from "@apollo/client";
import {get} from './QUERIES/debug';


function App() {
  client.query({
    query: gql`${get()}`
  }).then((data) => {
    console.log(data)
  })
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
