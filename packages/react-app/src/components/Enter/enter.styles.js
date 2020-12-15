import styled from 'styled-components';

export const StyledDiv = styled.div`
    grid-column: span 4 / auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

`
export const Flexwrapper = styled.div`
    grid-column: span 3 / auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-top: 15px;
    
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const StyledInput = styled.input`
    position: relative;
    z-index: 1;
    background-color: #932c2b !important;
    border-color: #932c2b !important;
    padding: 10px; 
    border: none;
    border-radius: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.5);

    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 1em;
    color: #fff;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #fff;
    }
`