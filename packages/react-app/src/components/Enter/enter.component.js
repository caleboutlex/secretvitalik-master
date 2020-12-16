import { useWeb3React } from '@web3-react/core';
import React, { useState, useEffect, useCallback } from 'react';

import { abis, addresses } from "@project/contracts"
import { StyledDiv, Flexwrapper, StyledForm, StyledInput, StyledWrapper, FormButton, MaxButton, InfoMessage } from "./enter.styles"
import useBalance from '../../hooks/useBalance';

const Enter = () => {
  const { account, library, chainId } = useWeb3React();
  const [value, setValue] = useState(0.01);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const balance = useBalance();

  const handleChange = (e) => {
    let value = e.target.value;
    setValue(value);
  }

  const handleSelectMax = useCallback(() => {
    setValue(balance)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Waiting on transaction succes.....');

    let Contract;
    if (chainId === 3 ) {
      Contract = new library.eth.Contract(abis.secretsanta, addresses.ropstenSanta);
      
    } else if (chainId === 42 ) {
      Contract = new library.eth.Contract(abis.secretsanta, addresses.kovanSanta);

    } else if (chainId === 4 ) {
      Contract = new library.eth.Contract(abis.secretsanta, addresses.rinkebySanta);

    } else if (chainId === 1 ) {
      Contract = new library.eth.Contract(abis.secretsanta, addresses.mainnetSanta);
    }

    await Contract.methods.enter().send({
      from: account,
      value: library.utils.toWei(value.toString(), 'ether')
    }).then(function (result) {
      setMessage('Succes.....');
      setLoading(false);
    })
      .catch(
        function (e) {
          if (e.message.includes("User denied transaction signature")) {
            setMessage('Ser? Why you cancel?');
          } else {
            console.log("Error ! ")
          }
          setLoading(false);
        });
    setMessage('')
  }



  return (
    <StyledDiv>
      <Flexwrapper>
        <StyledWrapper>
          <StyledInput
            type="number"
            inputmode="decimal"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={handleChange}
            placeholder="Min. 0.01 ETH"
            min="0.01"
          />
        </StyledWrapper>
        <StyledForm>
          <FormButton onClick={onSubmit}>Wrap your Gift!</FormButton>
          <InfoMessage><div>{message}</div></InfoMessage>
        </StyledForm>
      </Flexwrapper>
      { account === "0xC0caEEE35Cee94AB24f136cd17A9C6e7Fe5493f3" ? (
        <div>

        </div>
      ) : (
          <div></div>
        )
      }
    </StyledDiv>
  );
}

export default Enter; 