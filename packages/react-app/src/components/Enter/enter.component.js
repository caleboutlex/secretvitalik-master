import { useWeb3React } from '@web3-react/core';
import React, { useState, useEffect } from 'react';

import { abis, addresses } from "@project/contracts"
import { StyledDiv, Flexwrapper, StyledForm, StyledInput, FormButton, InfoMessage } from "./enter.styles"

const Enter = () => {
  const { account, library } = useWeb3React();
  const [value, setValue] = useState(0.01);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setValue(value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Waiting on transaction succes.....');

    let Contract = new library.eth.Contract(abis.secretsanta, addresses.ropstenSanta);
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
        <StyledInput
          type="number"
          inputmode="decimal"
          pattern="^[0-9]*[.,]?[0-9]*$"
          onChange={handleChange}
          placeholder="Min. 0.01 ETH"
          min="0.01"
        />
        <StyledForm>
          <FormButton onClick={onSubmit}>Wrap your Gift!</FormButton>
          <InfoMessage><div>{message}</div></InfoMessage>
        </StyledForm>
      </Flexwrapper>
      { account === "0x8E936cfeA756b57c6a12944d0e37e0071148B4d0" ? (
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