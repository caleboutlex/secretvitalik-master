import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`
export const Card = styled.div`
    position: relative;
    background: #fff;
    padding: 7px 15px;
    box-shadow: 0px 0px 4px #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2,div{
        font-size: 0.8em;
        color: #000;
        padding: 0 7px;
    }
    div{
        font-size: 0.6em;
    }

`
export const Form = styled.form`
    display:flex;
    justify-content: center;
`;