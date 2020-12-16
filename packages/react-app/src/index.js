import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core';

import App from "./App";

function getLibrary(provider) {
  const library = new Web3(provider)
  library.pollingInterval = 10000
  return library
}


ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
      <App />
  </Web3ReactProvider>,
  document.getElementById("root"),
);