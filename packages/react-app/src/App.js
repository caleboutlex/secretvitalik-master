import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Wrapper, Button, Header, Navbar, ImageWrap, Image, Connected, ButtonWrapper, LinkButton } from "./components";
import logo from "./assets/logo.svg";

import useWeb3Modal from "./hooks/useWeb3Modal";
import { useWeb3React } from "@web3-react/core";

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import Dapp from './containers/dApp/dapp.component';


import Landing from './components/Landing/landing.component';

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

const App = () => {
  //const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const { account, library } = useWeb3React();


  /*React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);*/

  return (
    <Router>
      <div>
        <Header>
          {account === null
            ? '-'
            : account
              ?
              <Navbar>
                <ImageWrap>
                  <Image src={logo} alt="Secret Vitalik" />
                </ImageWrap>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/containers/dApp">Sekret Vitalik</Link>
                    </li>
                    <li>
                      <a href="https://etherscan.io/address/0x1f52274ddf8fd6ce92633ab33f708e5b0b39b134#code" target="_blank">⚙️</a>
                    </li>
                    <li>
                      <a href="https://github.com/caleboutlex/secret-master" target="_blank">🧰</a>
                    </li>
                    <li>
                      <a href="https://t.me/sekretvitalik" target="_blank">👨‍👩‍👧‍👦</a>
                    </li>
                  </ul>
                </nav>
                <Connected>
                  Connected to {account.substring(0, 6)}...{account.substring(account.length - 4)}
                </Connected>
              </Navbar>
              :
              <Navbar>
                <ImageWrap>
                  <Image src={logo} alt="Secret Vitalik" />
                </ImageWrap>
                <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
              </Navbar>
          }
        </Header>

        <Switch>

          <Route path="/containers/dApp">
            <Body>
              <Wrapper>
                {account === null
                  ? '-'
                  : account
                    ?
                    <Dapp />
                    :
                    ''
                }
              </Wrapper>
            </Body>
          </Route>

          <Route path="/">
            <Body>
              <Wrapper>
                <Landing />

                <ButtonWrapper>
                  <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
                  {account === null
                    ? ''
                    : account
                      ?
                      <LinkButton>
                        <Link to={'/containers/dApp'}>Ho Ho Ho</Link>
                      </LinkButton>
                      :
                      ''
                  }
                </ButtonWrapper>
              </Wrapper>
            </Body>
          </Route>


        </Switch>


      </div>
    </Router >
  );
}

export default App;
