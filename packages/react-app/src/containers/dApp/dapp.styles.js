import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`
export const Card = styled.div`
    position: relative;
    background: #fff;
    padding: 15px 25px;
    box-shadow: 0px 0px 4px #E15155;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    h2,div{
        font-size: 1em;
        color: #000;
        padding: 0 7px;
    }

`;