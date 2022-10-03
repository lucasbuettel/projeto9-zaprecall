import styled from "styled-components"
import Questions from "./Questions"

export default function Content(){
   return(
    <>
    <ContainerButtons>
        <Questions/>
    </ContainerButtons>
    </>
   )
}

const ContainerButtons = styled.div`
button{ width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    cursor: pointer;
}

`