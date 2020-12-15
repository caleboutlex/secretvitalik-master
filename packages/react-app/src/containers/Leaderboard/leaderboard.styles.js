import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: decimal;
    padding: 0;
    margin: 0 0 20px 0;
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    li{
        font-size: 0.6em;
        line-height: 1.6;
        color: #000;
    }
`;