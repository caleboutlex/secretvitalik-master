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

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}

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
                      <Link to="/containers/dApp">dApp</Link>
                    </li>
                  </ul>
                </nav>
                <Connected>
                  Connected to {account.substring(0, 6)}...{account.substring(account.length - 4)}
                </Connected>
              </Navbar>
              : <Image src={logo} alt="Secret Vitalik" />}
        </Header>
        <Body>
          <Wrapper>
            <Switch>
              <Route path="/containers/dApp">
                <Dapp />
              </Route>
              <Route path="/">
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
              </Route>
            </Switch>

          </Wrapper>
        </Body>
      </div>
    </Router >
  );
}

export default App;
