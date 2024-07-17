import styled from 'styled-components'

export const Container = styled.div`
    background-color: #333333;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > button {
        background-color: aqua;
        border: none;
        padding: 10px;
        margin: 10px;
    }
    
    > div {
        button {
            background-color: aqua;
            border: none;
            padding: 10px;
            margin: 10px;
        }
    }
`;